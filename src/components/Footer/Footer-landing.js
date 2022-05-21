import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterSection = styled.footer`
  display: flex;
  align-items: center;
  color: #fff;
  background: #237cfb;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  padding: 5rem 0rem;
`;

const FooterTryFreeTrial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FooterTryFreeTrialTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 1rem;
  text-align: center;
`;

const FooterTryFreeTrialText = styled.h3`
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

const FooterTryFreeTrialWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const FooterButton = styled.button`
  background-color: #fff;
  padding: 1rem 2rem;
  border-radius: 3px;
  outline: none;
  border: none;
  font-size: 1rem;
  transition: all 0.5s ease;
  &:hover {
    background-color: #173b67;
    color: #fff;
  }
  border-radius: 35px;
`;

const FooterLinkContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 105px 0 105px;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: fit-content;
  }
`;

const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 100px;
  align-items: center;
  margin-left: 48px;
  @media only screen and (max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 25px;
    width: 100%;
    margin-top: 24px;
    margin-left: 0px;
  }
  @media only screen and (max-width: 700px) {
  }
`;

const FooterSocial = styled.div`
  display: flex;
  align-items: start;
  width: 25%;
  line-height: 2;
  flex-direction: column;
  @media only screen and (max-width: 900px) {
    display: flex;
    align-items: start;
    width: fit-content;
  }
  @media only screen and (max-width: 700px) {
  }
`;

const FooterSocialText = styled.p`
  font-size: 24px;
`;

const FooterLinks = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
`;

const FooterLinkTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 24px;
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  margin-bottom: 1rem;
  transition: all 0.4s ease;
  &:hover {
    color: #173b67;
  }
`;

function Footer() {
  return (
    <>
      <FooterSection>
        <FooterTryFreeTrial>
          <FooterTryFreeTrialTitle>
            Make it easy for yourself to
          </FooterTryFreeTrialTitle>
          <FooterTryFreeTrialText>manage Social Media</FooterTryFreeTrialText>
          <FooterTryFreeTrialWrapper>
            <FooterButton>Try Free Trial</FooterButton>
          </FooterTryFreeTrialWrapper>
        </FooterTryFreeTrial>
        <FooterLinkContainer>
          <FooterSocial>
            <img src="/images/logo3.svg" alt="logo" />
            <FooterSocialText></FooterSocialText>SocialQ+ is a virtual social
            media superhero that lets you collaborate, schedule & analyze your
            posts for Facebook, Instagram, Twitter, LinkedIn & Youtube from the
            same spot.
          </FooterSocial>
          <FooterLinksWrapper>
            <FooterLinks>
              <FooterLinkTitle>Useful Links</FooterLinkTitle>
              <FooterLink to="/">Affilate Program</FooterLink>
              <FooterLink to="/">About Us</FooterLink>
            </FooterLinks>
            <FooterLinks>
              <FooterLinkTitle>Useful Links</FooterLinkTitle>
              <FooterLink to="/">Privacy Policy</FooterLink>
              <FooterLink to="/">Terms & Condition</FooterLink>
            </FooterLinks>
            <FooterLinks>
              <FooterLinkTitle>Useful Links</FooterLinkTitle>
              <FooterLink to="/">FAQ</FooterLink>
              <FooterLink to="/">Support</FooterLink>
            </FooterLinks>
          </FooterLinksWrapper>
        </FooterLinkContainer>
      </FooterSection>
    </>
  );
}

export default Footer;
