import { withChangeTitleDashboard } from "hoc/withChangeTitleDashboard";
import styled from "styled-components";
import { Tab } from "components/Tabs/Tabs";
import Text from "components/Typhography/Text";
import { FaTrash, FaEdit, FaCalendar } from "react-icons/fa";
import { useMemo } from "react";

function MyContent() {
  return (
    <Container>
      <Tab.Group>
        <Tab.Lists>
          <Tab>Active</Tab>
          <Tab>Draft</Tab>
        </Tab.Lists>
        <Tab.Panels>
          <Tab.Panel>
            <Contents /> {/* Active Content */}
          </Tab.Panel>
          <Tab.Panel>
            <Contents draft /> {/* Draft Content */}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </Container>
  );
}

const Contents = ({ draft = false }) => {
  const isDraft = draft;

  const memoizedContent = useMemo(() => {
    return [
      {
        name: "Butterfly Effect",
        draft: false,
      },
      {
        name: "Butterfly Effect",
        draft: false,
      },
      {
        name: "Butterfly Effect",
        draft: false,
      },
      {
        name: "Butterfly Effect Draft",
        draft: true,
      },
      {
        name: "Butterfly Effect Draft",
        draft: true,
      },
      {
        name: "Butterfly Effect Draft",
        draft: true,
      },
    ];
  }, []);

  if (isDraft) {
    return <DraftContents memoizedContent={memoizedContent} />;
  }

  return (
    <ContentsContainer>
      {memoizedContent
        .filter((content) => !content.draft)
        .map((content, idx) => (
          <Card key={idx}>
            <CardHeader>
              <CardProfile>
                <img src="/images/monthlydigital.png" alt="" />
                <Text>{content.name}</Text>
              </CardProfile>
              <CardActions>
                <FaTrash />
                <FaEdit />
              </CardActions>
            </CardHeader>

            <CardThumbnail>
              <img src="/images/thumb-content.png" alt="" />
            </CardThumbnail>

            <CardDetail>
              <CardDetailPostingDate>
                <Text>Posting Date</Text>
                <Text>
                  <FaCalendar /> 9 January 2022
                </Text>
              </CardDetailPostingDate>

              <CardDetailUploadOn>
                <Text>Upload On</Text>
                <img src="/images/socmed/fb--with-text.png" alt="" />
              </CardDetailUploadOn>
            </CardDetail>

            <CardDesc>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia <span>See More...</span>
            </CardDesc>
          </Card>
        ))}
    </ContentsContainer>
  );
};

const DraftContents = ({ memoizedContent }) => {
  return (
    <ContentsContainer>
      {memoizedContent
        .filter((content) => content.draft === true)
        .map((content, idx) => {
          return (
            <Card key={idx}>
              <CardHeader>
                <CardProfile>
                  <img src="/images/monthlydigital.png" alt="" />
                  <Text>{content.name}</Text>
                </CardProfile>
                <CardActions>
                  <FaTrash />
                  <FaEdit />
                </CardActions>
              </CardHeader>

              <CardThumbnail>
                <img src="/images/thumb-content.png" alt="" />
                <DraftLabel>Draft</DraftLabel>
              </CardThumbnail>

              <CardDetail>
                <CardDetailPostingDate>
                  <Text>Posting Date</Text>
                  <Text>
                    <FaCalendar /> 9 January 2022
                  </Text>
                </CardDetailPostingDate>

                <CardDetailUploadOn>
                  <Text>Upload On</Text>
                  <img src="/images/socmed/fb--with-text.png" alt="" />
                </CardDetailUploadOn>
              </CardDetail>

              <CardDesc>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia <span>See More...</span>
              </CardDesc>
            </Card>
          );
        })}
    </ContentsContainer>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  .tab-group {
    .tab-lists {
      position: sticky;
      top: 0;
      backdrop-filter: blur(30px);
    }
  }

  @media screen and (min-width: 768px) {
    .tab-group {
      .tab-lists {
        width: max-content;

        background: none;
        padding: unset;

        .tab-button {
          background: inherit;
          font-size: ${(props) => props.theme.fontSize["lg"]};
          line-height: 27px;
          letter-spacing: -0.03em;
          font-weight: ${(props) => props.theme.fontWeight["medium"]};

          &.active-tab {
            box-shadow: none;
            color: ${(props) => props.theme.colors["p1"]};
          }

          :not(:last-child) {
            margin-right: 24px;
          }
        }
      }
    }
  }
`;

const ContentsContainer = styled.div`
  display: grid;
  gap: 39px;
  grid-template-columns: repeat(auto-fill, minmax(339px, 1fr));

  @media screen and (max-width: 375px) {
    grid-template-columns: 100%;
  }
`;

const Card = styled.div`
  width: 100%;
  padding: 22px 20px 25px 20px;
  box-shadow: 0px 16px 64px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
  background: #fff;
`;

const CardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  alingn-items: center;
`;

const CardProfile = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }

  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #101010;
    margin-left: 12px;
  }
`;

const CardActions = styled.div`
  display: flex;
  align-items: center;

  svg {
    cursor: pointer;

    :not(:last-child) {
      margin-right: 16px;
    }

    :first-child {
      color: #d8dce9;
    }

    :last-child {
      color: #237cfb;
    }
  }
`;

const CardThumbnail = styled.div`
  width: 100%;
  margin-top: 18px;
  height: 148px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-size: cover;
  }
`;

const DraftLabel = styled.span`
  display: flex;
  background: #ffffff;
  border-radius: 34px;
  padding: 5px 20px;
  color: #ff6270;
  position: absolute;
  top: 12px;
  left: 12px;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  letter-spacing: -0.03em;
`;

const CardDetail = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const CardDetailPostingDate = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 14px;
    line-height: 21px;

    :first-child {
      color: ${(props) => props.theme.colors["p3"]};
    }

    :last-child {
      color: ${(props) => props.theme.colors["p1"]};
      margin-top: 11px;
      display: flex;
      align-items: center;

      svg {
        margin-right: 10px;
      }
    }
  }
`;

const CardDetailUploadOn = styled(CardDetailPostingDate)`
  margin-right: 26px;

  img {
    margin-top: 11px;
  }
`;

const CardDesc = styled(Text)`
  margin-top: 16px;
  font-size: 12px;
  line-height: 20px;
  color: #3a4569;

  span {
    color: ${(props) => props.theme.colors["p1"]};
    cursor: pointer;
  }
`;

export default withChangeTitleDashboard(MyContent)("My Content");
