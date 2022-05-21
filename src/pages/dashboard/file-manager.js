import { Menu, MenuContainer } from "components/Dropdown/Dropdown";
import { withChangeTitleDashboard } from "hoc/withChangeTitleDashboard";
import { FaChevronDown, FaChevronUp, FaImage, FaVideo } from "react-icons/fa";
import styled from "styled-components";
import Text from "components/Typhography/Text";

function FileManager() {
  // const handleClickFileBox = (fileType) => {};

  return (
    <Container>
      {/* <PreviewImageFile src="/images/files/1.png" /> */}
      <Files>
        <FilesNav>
          <FileActionButtons>
            <GoogleDriveButton>
              <img src="/images/icons/google.svg" alt="" />
            </GoogleDriveButton>
            <DropBoxButton>
              <img src="/images/icons/dropbox.svg" alt="" />
            </DropBoxButton>
          </FileActionButtons>

          <MenuContainer>
            <StyledMenu>
              {({ open }) => {
                return (
                  <>
                    <StyledMenuButton>
                      All Media {open ? <FaChevronUp /> : <FaChevronDown />}
                    </StyledMenuButton>
                    <Menu.Items>
                      <Menu.Item>
                        <FaImage /> Photos
                      </Menu.Item>
                      <Menu.Item>
                        <FaVideo />
                        Videos
                      </Menu.Item>
                    </Menu.Items>
                  </>
                );
              }}
            </StyledMenu>
          </MenuContainer>
        </FilesNav>
        <FilesContent>
          <FileBox fileType="image" />
          <FileBox fileType="image" />
          <FileBox fileType="image" />
          <FileBox fileType="image" />
          <FileBox fileType="image" />
          <FileBox fileType="image" />
          <FileBox fileType="image" />
          <FileBox fileType="image" />
          <FileBox fileType="image" />
          <FileBox fileType="image" />
          <FileBox fileType="image" />
          <FileBox fileType="image" />
          <FileBox fileType="image" />
          <FileBox fileType="image" />
          <FileBox fileType="image" />
          <FileBox fileType="image" />
          <FileBox fileType="image" />
          <FileBox fileType="image" />
          <FileBox fileType="image" />
        </FilesContent>
      </Files>
      <Storage>
        <StorageNav>
          <Text color="p6" size="lg" weight="medium">
            Storage
          </Text>
          <img src="/images/icons/folder-open2.svg" alt="" />
        </StorageNav>

        <StorageBox>
          <AvailableSpace>
            75% <AvailableSpaceBars />
          </AvailableSpace>

          <AvalaibleSpaceDetail>
            <Text>Avaible Space</Text>
            <Text>3 GB Used of 5GB</Text>
          </AvalaibleSpaceDetail>
        </StorageBox>

        <StorageType>
          <StorageTypeBox>
            <StorageTypeBoxDetail>
              <StorageTypeBoxDetailIcon>
                <img src="/images/icons/image.svg" alt="" />
              </StorageTypeBoxDetailIcon>
              <StorageTypeBoxName>
                <Text>Photos</Text>
                <Text>5 File</Text>
              </StorageTypeBoxName>
            </StorageTypeBoxDetail>

            <StorageTypeBoxSpaceAvailable>350 MB</StorageTypeBoxSpaceAvailable>
          </StorageTypeBox>

          <StorageTypeBox>
            <StorageTypeBoxDetail>
              <StorageTypeBoxDetailIcon>
                <img src="/images/icons/video-play.svg" alt="" />
              </StorageTypeBoxDetailIcon>
              <StorageTypeBoxName>
                <Text>Videos</Text>
                <Text>15 File</Text>
              </StorageTypeBoxName>
            </StorageTypeBoxDetail>

            <StorageTypeBoxSpaceAvailable>2,5 GB</StorageTypeBoxSpaceAvailable>
          </StorageTypeBox>
        </StorageType>

        <FileUploaderWrapper>
          <FileUploaderButton as="label" htmlFor="file" />
          <FileUploaderTexts>
            <Text>Upload New File</Text>
            <Text>
              or <label htmlFor="file">open file</label>{" "}
            </Text>
          </FileUploaderTexts>
          <input type="file" id="file" hidden />
        </FileUploaderWrapper>
      </Storage>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 996px) {
    flex-direction: column;
    overflow: visible;
  }
`;

const Files = styled.div`
  width: calc(100% - 329px);
  height: 100%;
  margin-right: 35px;
  overflow: hidden;

  @media screen and (max-width: 996px) {
    width: auto;
    margin-right: unset;
    margin: -20px;
    padding: 20px;
  }
`;

const FilesNav = styled.div`
  width: 100%;
  height: 54px;
  display: flex;
  justify-content: space-between;
`;

const FileActionButtons = styled.div`
  display: flex;
`;

const FileAction = styled.div`
  cursor: pointer;
  padding: 12px 15px;
  box-shadow: 0px 16px 64px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GoogleDriveButton = styled(FileAction)`
  margin-right: 15px;
`;

const DropBoxButton = styled(FileAction)``;

const StyledMenu = styled(Menu)`
  .menu-items {
    margin-top: 8px;

    .menu-item {
      border-radius: 10px;
      color: ${(props) => props.theme.colors["p2"]};
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        margin-right: 14px;
        font-size: 22px;
      }

      :hover {
        background: #f9fafb;
      }
    }
  }
`;

const StyledMenuButton = styled(Menu.Button)`
  box-shadow: 0px 16px 64px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  padding: 15px 25px;
  height: 54px;
  display: flex;
  color: ${(props) => props.theme.colors["p6"]};
  letter-spacing: -0.03em;
  align-items: center;

  svg {
    margin-left: 13px;
  }
`;

const FilesContent = styled.div`
  margin-top: 35px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(167px, 1fr));
  grid-auto-rows: 167px;
  gap: 21px;
  overflow-y: auto;
  height: calc(100% - 89px);

  @media screen and (max-width: 996px) {
    height: 373px;
    margin-top: 26px;
  }
`;

const FileBox = styled.div`
  width: 100%;
  box-shadow: 0px 11px 42px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  position: relative;
  overflow: hidden;

  ${(props) =>
    props.fileType === "image" &&
    `
    & {
      ::before {
        content: "";
        position: absolute;
        inset: 0;
        display: block;
        background: url('/images/files/1.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }

      :hover {
        ::after {
          content: "";
          position: absolute;
          inset: 0;
          display: block;
          background: rgba(0,0,0,0.15);
          cursor: zoom-in
        }
      }
    }
  `}
`;

// const PreviewImageFile = styled.div`
//   position: fixed;
//   inset: 0;
//   background: rgba(0, 0, 0, 0.15);
//   z-index: 100;
//   display: flex;

//   ::after {
//     content: "";
//     position: absolute;
//     margin: auto;
//     inset: 0;
//     background: url(${(props) => props.src}) no-repeat;
//     background-position: center;
//     background-size: auto;
//   }
// `;

const Storage = styled.div`
  width: 329px;
  height: 100%;
  padding: 28px;
  box-shadow: 0px 23px 72px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
  position: sticky;
  top: 102px;

  @media screen and (max-width: 996px) {
    width: 100%;
    position: static;
    margin-top: 24px;
  }
`;

const StorageNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  p {
    line-height: 27px;
    letter-spacing: -0.03em;
  }

  img {
    cursor: pointer;
  }
`;

const StorageBox = styled.div`
  width: 100%;
  height: 130px;
  box-shadow: 0px 9px 34px rgba(63, 140, 255, 0.25);
  border-radius: 18px;
  margin-top: 22px;
  background: ${(props) => props.theme.colors["g1"]};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AvailableSpace = styled.div`
  width: 71px;
  height: 71px;
  border: 7px solid rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 50%;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.03em;
  position: relative;
`;

const AvailableSpaceBars = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  inset: -9px;
  border: 9px solid #ffffff;
  border-radius: 50%;
`;

const AvalaibleSpaceDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  color: white;

  p {
    :first-child {
      font-weight: 500;
      font-size: 14px;
      line-height: 21px;
      letter-spacing: -0.03em;
    }

    :last-child {
      margin-top: 8px;
      font-size: 14px;
      line-height: 21px;
      letter-spacing: -0.03em;
    }
  }
`;

const StorageType = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`;

const StorageTypeBox = styled.div`
  width: 273px;
  height: 71px;
  box-shadow: 0px 16px 64px rgba(0, 0, 0, 0.04);
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px 16px 14px;

  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

const StorageTypeBoxDetail = styled.div`
  display: flex;
`;

const StorageTypeBoxDetailIcon = styled.div`
  width: 40px;
  height: 40px;
  padding: 8px;
  background: #f7faff;
  border-radius: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StorageTypeBoxName = styled.div`
  margin-left: 13px;

  p {
    :first-child {
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
      letter-spacing: -0.03em;
      color: ${(props) => props.theme.colors["p2"]};
    }

    :last-child {
      margin-top: 5px;
      font-size: 12px;
      line-height: 18px;
      letter-spacing: -0.03em;
      color: ${(props) => props.theme.colors["p3"]};
    }
  }
`;

const StorageTypeBoxSpaceAvailable = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.03em;
  align-self: start;
  color: ${(props) => props.theme.colors["p1"]};
`;

const FileUploaderWrapper = styled.div`
  margin-top: 34px;
  border: 6px solid ${(props) => props.theme.colors["p4"]};
  border-radius: 15px;
  width: 100%;
  height: 144px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  flex-direction: column;
`;

const FileUploaderButton = styled.div`
  width: 39px;
  height: 39px;
  background: ${(props) => props.theme.colors["p1"]};
  border-radius: 50%;
  box-shadow: 0px 9px 34px rgba(63, 140, 255, 0.25);
  cursor: pointer;
  display: flex;

  ::after {
    content: "+";
    color: white;
    margin: auto;
  }
`;

const FileUploaderTexts = styled.div`
  margin-top: 12px;

  text-align: center;
  color: ${(props) => props.theme.colors["p2"]};

  p {
    letter-spacing: -0.03em;
    font-weight: 500;

    :first-child {
      font-size: 12px;
      line-height: 18px;
    }

    :last-child {
      font-size: 10px;
      line-height: 15px;

      label {
        color: ${(props) => props.theme.colors["p1"]};
        cursor: pointer;
      }
    }
  }
`;

export default withChangeTitleDashboard(FileManager)("File Manager");
