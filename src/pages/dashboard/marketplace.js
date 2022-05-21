import { withChangeTitleDashboard } from "hoc/withChangeTitleDashboard";
import styled from "styled-components";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaReddit,
  FaTumblr,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaTelegram,
  FaTiktok,
} from "react-icons/fa";
import Text from "components/Typhography/Text";
import Button from "components/Button/Button";
import Divider from "components/Divider";

const Container = styled.div`
  width: auto;
  padding-bottom: 60px;
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 26px;
  line-height: 39px;

  @media screen and (max-width: 578px) {
    font-size: 22px;
  }
`;

const AddOnPackages = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(234px, 1fr));
  gap: 35px;

  @media screen and (max-width: 578px) {
    grid-template-columns: 1fr 1fr;
    gap: 18px;
  }
`;

const MarketingPackages = styled(AddOnPackages)``;

const Card = styled.div`
  width: 100%;
  height: 273px;
  box-shadow: 0px 16px 64px rgba(0, 0, 0, 0.04);
  border-radius: 32px;
  ackground: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  button {
    position: absolute;
    left: 44px;
    right: 44px;
    bottom: -25px;
    background: #237cfb;
    color: white;
    box-shadow: 0px 9px 34px rgba(63, 140, 255, 0.25);
    border-radius: 32px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f7faff;
  border-radius: 25px;
  padding: 27px;
  width: max-content;

  svg {
    font-size: 46px;
  }
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  p {
    letter-spacing: -0.03em;
    text-align: center;

    :first-child {
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      color: #3a4569;
    }

    :last-child {
      font-weight: 500;
      font-size: 18px;
      line-height: 27px;
      color: #237cfb;
      margin-top: 6px;
    }
  }
`;

function MarketPlace() {
  return (
    <Container>
      <Title>Add-on Package</Title>
      <AddOnPackages>
        {[
          {
            name: "facebook",
            title: "5 Profile",
            price: "$5/month",
            icon: <FaFacebook style={{ color: "#237CFB" }} />,
          },
          {
            name: "facebook",
            title: "Group",
            price: "$5/month",
            icon: <FaFacebook style={{ color: "#237CFB" }} />,
          },
          {
            name: "google-business",
            title: "5 Profiles",
            price: "$5/month",
            icon: <img src="/images/socmed/g-business2.png" alt="" />,
          },
          {
            name: "instagram",
            title: "5 Profiles",
            price: "$5/month",
            icon: <FaInstagram style={{ color: "#fb3958" }} />,
          },
          {
            name: "linkedin",
            title: "5 Profiles",
            price: "$5/month",
            icon: <FaLinkedin style={{ color: "#2867B2" }} />,
          },
          {
            name: "linkedin",
            title: "Page",
            price: "$5/month",
            icon: <FaLinkedin style={{ color: "#2867B2" }} />,
          },
          {
            name: "reddit",
            title: "5 Profiles",
            price: "$5/month",
            icon: <FaReddit style={{ color: "#FF4500" }} />,
          },
          {
            name: "tumblr",
            title: "5 Profiles",
            price: "$5/month",
            icon: <FaTumblr style={{ color: "#34526f" }} />,
          },
          {
            name: "twitter",
            title: "5 Profiles",
            price: "$5/month",
            icon: <FaTwitter style={{ color: "#1DA1F2" }} />,
          },
          {
            name: "youtube",
            title: "Channel",
            price: "$5/month",
            icon: <FaYoutube style={{ color: "#FF0000" }} />,
          },
          {
            name: "pinterest",
            title: "5 Profiles",
            price: "$5/month",
            icon: <FaPinterest style={{ color: "#E60023" }} />,
          },
          {
            name: "pinterest",
            title: "Boards",
            price: "$5/month",
            icon: <FaPinterest style={{ color: "#E60023" }} />,
          },
          {
            name: "telegram",
            title: "Group",
            price: "$5/month",
            icon: <FaTelegram style={{ color: "#229ED9" }} />,
          },
          {
            name: "telegram",
            title: "Channel",
            price: "$5/month",
            icon: <FaTelegram style={{ color: "#229ED9" }} />,
          },
          {
            name: "tiktok",
            title: "5 Profiles",
            price: "$5/month",
            icon: <FaTiktok style={{ color: "#010101" }} />,
          },
        ].map((pkg) => (
          <Card>
            <IconWrapper>{pkg.icon}</IconWrapper>
            <Detail>
              <Text>{pkg.title}</Text>
              <Text>{pkg.price}</Text>
            </Detail>
            <Button>Buy Now</Button>
          </Card>
        ))}
      </AddOnPackages>
      <Divider style={{ marginTop: "60px" }} />
      <Title>Marketing</Title>
      <MarketingPackages>
        <Card>
          <IconWrapper>
            <img src="/images/chatbot.png" alt="" />
          </IconWrapper>
          <Detail>
            <Text>Chatbot</Text>
            <Text>$5/month</Text>
          </Detail>
          <Button>Buy Now</Button>
        </Card>
      </MarketingPackages>
    </Container>
  );
}

export default withChangeTitleDashboard(MarketPlace)("MarketPlace");
