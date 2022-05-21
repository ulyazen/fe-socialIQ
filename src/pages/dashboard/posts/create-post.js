import Radio from "components/Form/Radio";
import { IItalic } from "components/Icons";
import { IEmoji } from "components/Icons";
import { IBold } from "components/Icons";
import { FullNavbar } from "components/Navbar/Navbar-Dashboard";
import Text from "components/Typhography/Text";
import { useEffect, useRef, useState, useCallback } from "react";
import { FaFileAlt, FaPlus, FaPlusCircle } from "react-icons/fa";
import styled from "styled-components";
import Button from "components/Button/Button";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CreatePost() {
  const [startDate, setStartDate] = useState(new Date()); // startDate when post schedule
  const [isOpenDatePicker, setIsOpenDatePicker] = useState(false);

  const [clickedAccount, setClickedAccount] = useState(false);
  const { handleSubmit, register, watch } = useForm();
  const [images, setImages] = useState([]);

  const watchImage = watch("image");

  const handleAddPost = (data) => {
    console.log(data);
  };

  useEffect(() => {
    if (watchImage && watchImage?.length !== 0) {
      const fileReader = new FileReader();
      const file = watchImage;

      fileReader.addEventListener("load", (e) => {
        const image = e.target.result;
        setImages((prev) => [image]);
      });

      fileReader.readAsDataURL(file[0]);
    }
  }, [watchImage]);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];

    const fileReader = new FileReader();

    fileReader.onload = (reader) => {
      const image = reader.currentTarget.result;
      setImages((prev) => [image]);
    };

    fileReader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
      <FullNavbar />
      <Container>
        <SelectAccountBox>
          <SelectAccountHeader>
            <Text className="select-account__title">Select Account</Text>
            <Text className="select-account__add-account">
              <FaPlus />
              Add Account
            </Text>
          </SelectAccountHeader>
          <AccountLists>
            <Account setClickedAccount={setClickedAccount} />
            <Account setClickedAccount={setClickedAccount} />
            <Account setClickedAccount={setClickedAccount} />
            <Account setClickedAccount={setClickedAccount} />
            <Account setClickedAccount={setClickedAccount} />
          </AccountLists>
        </SelectAccountBox>
        <CreatePostWrapper>
          <CreatePostHeader>
            <Text className="create-post__title">Create Post</Text>
            <PostTo>
              <Text>Post to:</Text>
              <PostToImage className={clickedAccount && "active"} />
            </PostTo>
          </CreatePostHeader>
          <CreatePostForm onSubmit={handleSubmit(handleAddPost)}>
            <ImageUploaderWrapper>
              {images.length >= 1 && (
                <ImagesUploaded moreOne={images.length > 1 ? "true" : "false"}>
                  {images.map((image, idx) => {
                    return <img key={idx} src={`${image}`} alt="" />;
                  })}
                </ImagesUploaded>
              )}

              <ImageUploader {...getRootProps()}>
                <ImageUploaderBox>
                  <ImageUploaderAddButton as="label" htmlFor="file-uploader">
                    <FaPlus />
                  </ImageUploaderAddButton>
                  <ImageUploaderText>
                    Drag &amp; Drop{" "}
                    <ImageUploaderLabel htmlFor="file-uploader">
                      or <span>open file</span>
                      <input
                        {...getInputProps()}
                        id="file-uploader"
                        type="file"
                        hidden
                        accept="image/*"
                        {...register("image")}
                      />
                    </ImageUploaderLabel>
                  </ImageUploaderText>
                </ImageUploaderBox>
              </ImageUploader>
            </ImageUploaderWrapper>
            <EditorWrapper>
              <PostFrom className={clickedAccount && "active"} />
              <CreatePostTextWrapper>
                <CreateCaption placeholder="Create Caption in here" />
                <RichWrapper>
                  <HastagsBox />
                  <RichBoxes>
                    <IItalic />
                    <IBold />
                    <IEmoji />
                  </RichBoxes>
                </RichWrapper>
              </CreatePostTextWrapper>
            </EditorWrapper>
            <CreatePostActionButtons>
              <ButtonLeftWrapper>
                <AddPostButton type="submit">
                  {" "}
                  <FaPlusCircle /> Add Post
                </AddPostButton>
              </ButtonLeftWrapper>

              <ButtonRightWrapper>
                <DrafButton type="button">
                  {" "}
                  <FaFileAlt /> Draf
                </DrafButton>
                <ScheduleButton
                  type="button"
                  className="schedule-btn"
                  onClick={(e) => {
                    setIsOpenDatePicker(true);
                  }}
                >
                  Schedule{" "}
                  {isOpenDatePicker && (
                    <DatePicker
                      selected={startDate}
                      showTimeInput
                      inline
                      onChange={(date) => {
                        setStartDate(date);
                      }}
                      onClickOutside={(e) => {
                        setIsOpenDatePicker(false);
                      }}
                    />
                  )}
                </ScheduleButton>

                <PostButton type="button">Post</PostButton>
              </ButtonRightWrapper>
            </CreatePostActionButtons>
          </CreatePostForm>
        </CreatePostWrapper>
      </Container>
    </>
  );
}

const Account = ({ setClickedAccount }) => {
  const radioRef = useRef();

  const handleClickAccount = () => {
    radioRef.current.checked = true;
    setClickedAccount(true);
  };

  return (
    <AccountCard onClick={handleClickAccount}>
      <AccountProfile>
        <AccountProfilePicture>
          <img src="/images/avatar/2.png" alt="profile" />
        </AccountProfilePicture>
        <AccountDetail>
          <AccountName>Rizkyfebryan</AccountName>
          <Facebook>
            <img src="/images/socmed/fb--with-text.png" alt="fb" />
          </Facebook>
        </AccountDetail>
      </AccountProfile>
      <Radio radioRef={radioRef} />
    </AccountCard>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  @media screen and (max-width: 996px) {
    flex-direction: column;
  }
`;

const SelectAccountBox = styled.div`
  width: 379px;
  height: 601px;
  padding: 0 15px 65px 15px;
  box-shadow: 0px 16px 64px rgba(0, 0, 0, 0.04);
  border-radius: 25px;
  background: white;
  overflow: hidden;
  position: sticky;
  top: 100px;

  @media screen and (max-width: 996px) {
    width: 100%;
    position: static;
    margin-bottom: 40px;
  }
`;

const SelectAccountHeader = styled.div`
  height: 101px;
  border-bottom: 1px solid #f2f3f8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 15px;

  .select-account__title {
    font-size: ${(props) => props.theme.fontSize["lg"]};
    color: ${(props) => props.theme.colors["p6"]};
    letter-spacing: -0.03em;
    line-height: 27px;
    font-weight: ${(props) => props.theme.fontWeight["medium"]};
  }

  .select-account__add-account {
    font-size: ${(props) => props.theme.fontSize["sm"]};
    line-height: 21px;
    letter-spacing: -0.03em;
    font-weight: ${(props) => props.theme.fontWeight["medium"]};
    color: ${(props) => props.theme.colors["p1"]};
    cursor: pointer;
    display: flex;
    align-items: center;

    svg {
      margin-right: 8px;
      width: 11px;
      height: 11px;
    }
  }
`;

const AccountLists = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  overflow-y: auto;
  height: calc(100% - 101px);

  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const AccountCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  padding: 15px;
  border-radius: 19px;

  :not(:last-child) {
    margin-bottom: 10px;
  }

  :hover {
    background: #f9fafb;
  }
`;

const AccountProfile = styled.div`
  display: flex;
`;

const AccountProfilePicture = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 21px;
  border: 0.75px solid ${(props) => props.theme.colors["p3"]};
  padding: 5px;

  img {
    border-radius: 17px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AccountDetail = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: column;
`;

const AccountName = styled(Text)`
  color: ${(props) => props.theme.colors["p2"]};
  letter-spacing: -0.03em;
  line-height: 24px;
  font-weight: ${(props) => props.theme.fontWeight["medium"]};
`;

const AccountSocmed = styled.div`
  border-radius: 17px;
  padding: 4px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const Facebook = styled(AccountSocmed)`
  background: #f7faff;
`;

const CreatePostWrapper = styled.div`
  margin-left: 25px;
  width: calc(100% - 379px);

  @media screen and (max-width: 996px) {
    width: 100%;
    margin-left: unset;
  }
`;

const CreatePostHeader = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .create-post__title {
    letter-spacing: -0.03em;
    font-size: ${(props) => props.theme.fontSize["4xl"]};
    line-height: 39px;
    color: ${(props) => props.theme.colors["p6"]};
    font-weight: ${(props) => props.theme.fontWeight["medium"]};
    height: max-content;
  }

  @media screen and (max-width: 996px) {
    justify-content: flex-end;

    .create-post__title {
      display: none;
    }
  }
`;

const PostTo = styled.div`
  width: 148px;
  height: 59px;
  display: flex;
  align-items: center;
  box-shadow: 0px 16px 64px rgba(0, 0, 0, 0.04);
  border-radius: 52px;
  background: #ffffff;
  padding: 8px 15px;
`;

const PostToImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors["p3"]};
  margin-left: 13px;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    box-shadow: 0px 4px 28px rgba(25, 119, 243, 0.33);
    background: ${(props) => props.theme.colors["p3"]};
    right: -6px;
    bottom: -1px;
    border: 4px solid white;
  }

  &.active {
    background: url("/images/avatar/2.png") no-repeat;
    background-size: cover;

    ::after {
      background: url("/images/socmed/fb.png");
    }
  }
`;

const CreatePostForm = styled.form`
  width: 100%;
  height: 700px;
  // height: calc(100% - 82px);
  margin-top: 30px;
  background: white;
  padding: 25px;
  box-shadow: 0px 16px 64px rgba(0, 0, 0, 0.04);
  border-radius: 22px;

  @media screen and (max-width: 996px) {
    height: auto;
  }
`;

const ImageUploader = styled.div`
  width: 100%;
  height: 144px;
  border-radius: 15px;
  background: ${(props) => props.theme.colors["p4"]};
  display: flex;
`;

const ImageUploaderBox = styled.div`
  margin: auto;
  display: flex;
  width: 82px;
  flex-direction: column;
`;

const ImageUploaderAddButton = styled.div`
  width: 39px;
  height: 39px;
  background: ${(props) => props.theme.colors["p1"]};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin: auto;
  cursor: pointer;

  svg {
    width: 8.5px;
    height: 8.5px;
  }
`;

const ImageUploaderText = styled.div`
  margin-top: 12px;
  color: ${(props) => props.theme.colors["p2"]};
  line-height: 21px;
  letter-spacing: -0.03em;
  font-weight: ${(props) => props.theme.fontWeight["medium"]};
  font-size: ${(props) => props.theme.fontSize["sm"]};
  text-align: center;
`;

const ImageUploaderLabel = styled.label`
  font-size: 10px;
  font-weight: ${(props) => props.theme.fontWeight["medium"]};
  line-height: 15px;
  letter-spacing: -0.03em;

  span {
    color: ${(props) => props.theme.colors["p1"]};
    display: inline-block;
    cursor: pointer;
  }
`;

const EditorWrapper = styled.div`
  margin-top: 25px;
  display: flex;
  height: calc(100% - 254px);

  @media screen and (max-width: 996px) {
    flex-direction: column;
    height: auto;
  }
`;

const PostFrom = styled(PostToImage)`
  margin: unset;

  @media screen and (max-width: 996px) {
    margin-bottom: 17px;
  }
`;

const CreatePostTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  padding: 20px;
  width: calc(100% - 50px);
  border-radius: 20px;
  border: 0.75px solid ${(props) => props.theme.colors["p3"]};
  background: #ffffff;

  @media screen and (max-width: 996px) {
    margin-left: unset;
    width: 100%;
    height: 219px;
  }
`;

const RichWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CreateCaption = styled.textarea`
  resize: none;
  width: 100%;
  height: calc(100% - 40px);
  line-height: 21px;
  font-size: ${(props) => props.theme.fontSize["sm"]};

  ::placeholder {
    color: ${(props) => props.theme.colors["p3"]};
    letter-spacing: -0.03em;
  }
`;

const HastagsBox = styled.div`
  width: 127px;
  height: 40px;
  border-radius: 9px;
  box-shadow: 0px 16px 64px rgba(0, 0, 0, 0.04);
  background: #ffffff;
  display: flex;

  ::before {
    content: "Hastags";
    display: block;
    margin: auto;
    line-height: 18px;
    color: ${(props) => props.theme.colors["p2"]};
    letter-spacing: -0.03em;
    font-size: ${(props) => props.theme.fontSize["xs"]};
    font-weight: ${(props) => props.theme.fontWeight["medium"]};
    text-transform: uppercase;
  }
`;

const RichBoxes = styled.div`
  width: 113px;
  height: 40px;
  background: #ffffff;
  box-shadow: 0px 16px 64px rgba(0, 0, 0, 0.04);
  border-radius: 58px;
  padding: 8px 11px;
  display: flex;
  justify-content: space-between;

  svg {
    cursor: pointer;
  }
`;

const CreatePostActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;

  button {
    :not(:last-child) {
      margin-right: 20px;
    }
  }

  @media screen and (max-width: 996px) {
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 24px;

    button {
      width: 92px;
      height: 35px;
      border-radius: 8.92913px;

      :not(:last-child) {
        margin-right: 13px;
      }
    }
  }
`;

const ButtonLeftWrapper = styled.div`
  display: flex;
  margin-left: 50px;
  justify-content: center;

  @media screen and (max-width: 996px) {
    order: 2;
    margin-left: unset;
    margin-top: 24px;
  }
`;

const ButtonRightWrapper = styled(ButtonLeftWrapper)`
  @media screen and (max-width: 996px) {
    order: 1;
    width: 100%;
    margin-top: unset;
  }
`;

const AddPostButton = styled(Button)`
  color: ${(props) => props.theme.colors["p1"]};
  width: 147px;
`;

const DrafButton = styled(Button)`
  color: white;
  background: ${(props) => props.theme.colors["p2"]};
  width: 145px;
`;

const ScheduleButton = styled(Button)`
  color: ${(props) => props.theme.colors["p1"]};
  background: white;
  width: 178px;
  position: relative;

  .react-datepicker {
    position: absolute;
    left: 0;
    bottom: 70px;
  }
`;

const PostButton = styled(Button)`
  color: white;
  background: ${(props) => props.theme.colors["p1"]};
  width: 145px;
  box-shadow: 0px 9px 34px rgba(63, 140, 255, 0.25);
`;

const ImageUploaderWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 996px) {
    flex-direction: column;
  }
`;

const ImagesUploaded = styled.div`
  width: 162px;
  height: 144px;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  margin-right: 15px;

  img {
    width: 100%;
    height: 100%;
    object-size: cover;

    :not(:last-child) {
    }
  }

  @media screen and (max-width: 996px) {
    width: 100%;
    margin-bottom: 24px;

    img {
      object-size: cover;
    }
  }
`;

export default CreatePost;
