import { withChangeTitleDashboard } from "hoc/withChangeTitleDashboard";
import { useMemo, useEffect } from "react";
import usersData from "data/users.json";
import {
  useTable,
  useSortBy,
  usePagination,
  useRowSelect,
  useAsyncDebounce,
  useGlobalFilter,
} from "react-table";
import styled from "styled-components";
import Button from "components/Button/Button";

import {
  FaSortDown,
  FaSortUp,
  FaUser,
  FaTrash,
  FaPlus,
  FaArrowLeft,
  FaArrowRight,
  FaAngleDoubleRight,
  FaAngleDoubleLeft,
  FaEdit,
  FaEye,
} from "react-icons/fa";
import { format } from "date-fns";
import Text from "components/Typhography/Text";
import classnames from "classnames";
import { useNavigate } from "react-router-dom";
import Checkbox from "components/Form/Checkbox";

function UserManager() {
  const navigate = useNavigate();

  const COLUMNS = useMemo(() => {
    return [
      {
        Header: "Username",
        accessor: "username",
        Cell: ({ cell }) => {
          const { user_image, email } = cell.row.original;
          return (
            <UserCell>
              <UserCellImage>
                <img src={user_image} alt="" />
              </UserCellImage>
              <UserCellDetail>
                <Text>{cell.value}</Text>
                <Text>{email}</Text>
              </UserCellDetail>
            </UserCell>
          );
        },
      },
      {
        Header: "Package",
        accessor: "package",
      },
      {
        Header: "Expiration Date",
        accessor: "expiration_date",
        Cell: ({ cell }) => {
          const expDate = format(new Date(cell.value), "dd-MM-yyyy");
          return <span>{expDate}</span>;
        },
      },
      {
        Header: "Login Type",
        accessor: "login_type",
        Cell: ({ cell }) => {
          return (
            <LoginTypeCell>
              <FaUser /> {cell.value}
            </LoginTypeCell>
          );
        },
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ cell }) => {
          return <StatusCell>{cell.value}</StatusCell>;
        },
      },
      {
        Header: "Last Updated",
        accessor: "last_updated",
        Cell: ({ cell }) => {
          const lastUpdated = format(new Date(cell.value), "dd-MM-yyyy h:mm");
          return <span>{lastUpdated}</span>;
        },
      },
      {
        Header: "Created",
        accessor: "created",
        Cell: ({ cell }) => {
          const created = format(new Date(cell.value), "dd-MM-yyyy h:mm");
          return <span>{created}</span>;
        },
      },
    ];
  }, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    rows,
    prepareRow,
    canNextPage,
    canPreviousPage,
    nextPage,
    previousPage,
    gotoPage,
    pageOptions,
    state,
    setPageSize,
    setGlobalFilter,
  } = useTable(
    {
      columns: COLUMNS,
      data: usersData,
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: "selection",
            Header: ({ getToggleAllRowsSelectedProps }) => {
              return <Checkbox {...getToggleAllRowsSelectedProps()} />;
            },
            Cell: ({ row }) => {
              const cellId = row.original.id;

              return (
                <CheckboxCellWrapper>
                  <Checkbox {...row.getToggleRowSelectedProps()} />
                  <Dots onClick={(e) => handleClickDotsRow(e)}>
                    <Dot />
                    <Dot />
                    <Dot />

                    <MenuDots
                      onClick={(e) => e.stopPropagation()}
                      data-dots={cellId}
                      className="menu-dots"
                    >
                      <MenuDotList
                        onClick={(e) => handleClickEditUser(e, cellId)}
                      >
                        <FaEdit /> Edit
                      </MenuDotList>
                      <MenuDotList
                        onClick={(e) => handleClickViewAsUser(e, cellId)}
                      >
                        <FaEye /> View as user
                      </MenuDotList>
                      <MenuDotList
                        onClick={(e) => handleClickDeleteUser(e, cellId)}
                      >
                        <FaTrash /> Delete
                      </MenuDotList>
                    </MenuDots>
                  </Dots>
                </CheckboxCellWrapper>
              );
            },
          },
          ...columns,
        ];
      });
    }
  );

  const { pageIndex, pageSize } = state;

  const handleChangeSearch = useAsyncDebounce((e) => {
    setGlobalFilter(e.target.value);
  }, 500);

  useEffect(() => {
    document.querySelector(".search-navbar").onkeydown = handleChangeSearch;
  }, [handleChangeSearch]);

  const handleChangeShowPerPage = useAsyncDebounce((e) => {
    const value = Number(e.target.value);
    if (!value || value > rows.length || value <= 0) {
      return setPageSize(10);
    }

    setPageSize(value);
  }, 500);

  const handleClickDotsRow = (e) => {
    const dotsElement = e.target.querySelector(".menu-dots");
    dotsElement.classList.toggle("show");

    [...document.querySelectorAll(".menu-dots")]
      .filter((menu) => menu !== dotsElement)
      .forEach((menu) => {
        menu.classList.remove("show");
      });
  };

  const handleClickEditUser = (e, rowId) => {
    e.stopPropagation();
    navigate(`edit/${rowId}`);
  };

  const handleClickViewAsUser = (e, rowId) => {
    e.stopPropagation();
    navigate(`view-as-user/${rowId}`);
  };

  const handleClickDeleteUser = (e) => {
    e.stopPropagation();
  };

  return (
    <Container>
      <Navbar>
        <NavbarTitle>
          <Text>List Users</Text>
          <Text>100 User Active</Text>
        </NavbarTitle>

        <NavbarActions>
          <Button>
            <FaTrash />
          </Button>
          <Button onClick={() => navigate("add")}>
            <FaPlus /> Add User
          </Button>
        </NavbarActions>
      </Navbar>
      <TableWrapper>
        <table
          {...getTableProps()}
          className="table table-bordered table-head-sticky"
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((column) => {
                  return (
                    <th key={column.id} {...column.getSortByToggleProps()}>
                      {column.render("Header")}
                      <span>
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <FaSortUp />
                          ) : (
                            <FaSortDown />
                          )
                        ) : null}
                      </span>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr key={row.id}>
                  {row.cells.map((cell) => (
                    <td key={cell.id}>{cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </TableWrapper>
      <PaginationContainer>
        <ShowingEntries>
          Page {pageIndex + 1} of {pageOptions.length}
        </ShowingEntries>
        <PaginationBox>
          <ShowPerRows>
            <Text as="label" htmlFor="show">
              Show
            </Text>
            <input
              type="number"
              defaultValue={pageSize}
              onChange={handleChangeShowPerPage}
              min={1}
            />
          </ShowPerRows>

          <Pagination>
            <FaAngleDoubleLeft
              className={classnames("start-page", {
                active: canPreviousPage,
              })}
              disabled={!canPreviousPage}
              onClick={() => gotoPage(0)}
            />
            <PrevPageButton
              className={canPreviousPage && "active"}
              disabled={!canPreviousPage}
              onClick={() => {
                previousPage();
              }}
            >
              <FaArrowLeft />
            </PrevPageButton>

            <GotoPageWrapper>
              <GotoPage className={"active"}>{pageIndex + 1}</GotoPage>
            </GotoPageWrapper>

            <NextPageButton
              className={canNextPage && "active"}
              disabled={!canNextPage}
              onClick={() => {
                nextPage();
              }}
            >
              <FaArrowRight />
            </NextPageButton>
            <FaAngleDoubleRight
              className={classnames("end-page", {
                active: canNextPage,
              })}
              disabled={!canNextPage}
              onClick={() => gotoPage(pageOptions.length - 1)}
            />
          </Pagination>
        </PaginationBox>
      </PaginationContainer>
    </Container>
  );
}

const Container = styled.div`
  width: auto;
  height: auto;
  margin: -25px -35px;
  padding: 25px 35px;
`;

const Navbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const NavbarTitle = styled.div`
  display: flex;
  flex-direction: column;

  p {
    letter-spacing: -0.03em;

    :first-child {
      font-weight: 500;
      font-size: 24px;
      line-height: 36px;
      color: #237cfb;
    }

    :last-child {
      margin-top: 2px;
      font-size: 16px;
      line-height: 24px;
      color: #d8dce9;
    }
  }
`;

const NavbarActions = styled.div`
  display: flex;

  button {
    :first-child {
      color: #d8dce9;
      background: #ffffff;
      box-shadow: 0px 18px 41px rgba(0, 0, 0, 0.04);
      display: flex;
      width: 64px;
      padding: 17px 20px;

      svg {
        margin: auto;
      }
    }

    :last-child {
      background: linear-gradient(94.01deg, #237cfb 4.61%, #4390ff 99.02%);
      color: white;
      width: 166px;
      margin-left: 16px;
    }
  }
`;

const TableWrapper = styled.div`
  margin-top: 40px;

  table {
    tbody {
      tr {
        td {
          :first-child {
            width: max-content;
          }
        }
      }
    }
  }
`;

const UserCell = styled.div`
  display: inline-flex;
  align-items: center;
  width: max-content;
  height: inherit;
`;

const UserCellImage = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;

const UserCellDetail = styled.div`
  margin-left: 16px;

  p {
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.03em;

    :first-child {
      color: #3a4569;
    }

    :last-child {
      color: #d8dce9;
      margin-top: 2px;
    }
  }
`;

const LoginTypeCell = styled.div`
  background: rgba(35, 124, 251, 0.1);
  border-radius: 43px;
  padding: 8px 14px;
  width: max-content;
  color: ${(props) => props.theme.colors["p1"]};
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;

const StatusCell = styled.div`
  background: rgba(112, 207, 151, 0.1);
  border-radius: 43px;
  padding: 8px 14px;
  color: #70cf97;
  width: max-content;
`;

const CheckboxCellWrapper = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
`;

const Dots = styled.div`
  display: flex;
  justify-content: space-between;
  width: max-content;
  margin-left: 28px;
  cursor: pointer;
  position: relative;
`;

const Dot = styled.span`
  display: block;
  background: #d8dce9;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  z-index: -1;

  :not(:last-child) {
    margin-right: 4px;
  }
`;

const MenuDots = styled.ul`
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 22px 88px rgba(0, 0, 0, 0.06);
  border-radius: 10px;
  display: none;
  flex-direction: column;
  padding: 12px;
  top: 16px;
  width: 138px;
  height: 111px;
  z-index: 2;
  cursor: default;

  &.show {
    display: flex;
  }
`;

const MenuDotList = styled.li`
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.03em;
  color: #d8dce9;
  display: flex;
  cursor: pointer;
  align-items: center;
  width: max-content;

  svg {
    margin-right: 10px;
  }

  :not(:last-child) {
    margin-bottom: 12px;
  }
`;

const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  align-items: center;
`;

const ShowingEntries = styled(Text)`
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.03em;
  color: #d8dce9;
`;

const PaginationBox = styled.div`
  display: flex;
  box-shadow: 0px 16px 64px rgba(0, 0, 0, 0.04);
  border-radius: 69px;
  background: #ffffff;
  padding: 20px 23px;
`;

const ShowPerRows = styled.div`
  display: flex;
  align-items: center;
  margin-right: 22px;

  label {
    font-size: 16px;
    line-height: 19px;
    color: #d8dce9;
    letter-spacing: -0.03em;
  }

  input {
    width: 60px;
    border-radius: 7px;
    background: #f7faff;
    padding: 5px 10px;
    margin-left: 10px;
    font-size: 16px;
    line-height: 19px;
    color: #237cfb;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  color: #d8dce9;
  align-items: center;

  .start-page,
  .end-page {
    cursor: pointer;

    &.active {
      color: #237cfb;
    }
  }
`;

const PrevPageButton = styled.button`
  width: 29px;
  height: 29px;
  box-shadow: 0px 13px 32px rgba(58, 69, 105, 0.04);
  background: #ffffff;
  cursor: pointer;

  display: flex;

  svg {
    margin: auto;
  }

  &.active {
    color: #237cfb;
  }
`;

const NextPageButton = styled(PrevPageButton)``;

const GotoPageWrapper = styled.div`
  display: flex;
  margin: 0 16px;
`;

const GotoPage = styled.button`
  width: 29px;
  height: 29px;
  color: #d8dce9;
  border-radius: 50%;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.03em;

  &.active {
    box-shadow: 0px 9px 34px rgba(63, 140, 255, 0.25);
    background: #237cfb;
    color: white;
  }
`;

export default withChangeTitleDashboard(UserManager)("User Manager");
