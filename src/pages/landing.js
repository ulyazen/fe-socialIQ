import React from "react";
import Footer from "components/Footer/Footer-landing";
import styled from "styled-components";

const HeroSection = styled.section`
  display: flex;
  align-items: flex-start;
  color: #fff;
  background: #237cfb;
  justify-content: space-between;
  width: 100%;
  height: 50rem;
  flex-direction: column;
  padding: 5rem 12rem;
  flex-direction: row;
  @media only screen and (max-width: 1024px) {
    justify-content: center;
    padding: 5rem 2rem;
  }
`;

const HeroSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeroSectionTitle = styled.h2`
  font-size: 52px;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
`;

const HeroSectionText = styled.h2`
  font-size: 16px;
  font-weight: 300;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const HeroSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const HeroButton = styled.button`
  margin-top: 1rem;
  background-color: #fff;
  padding: 1rem 2rem;
  border-radius: 3px;
  outline: none;
  border: none;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.5s ease;
  color: #292d32;
  &:hover {
    background-color: #173b67;
    color: #fff;
  }
  border-radius: 35px;
`;

const InstagramIconFloat = styled.button`
  background: url("/images/dashboard/float-ig.png") no-repeat;
  background-size: contain;

  animation: bounceIg 2s linear alternate-reverse infinite;

  @keyframes bounceIg {
    to {
      transform: translateY(25px) translateX(15px);
    }
  }
`;

const FacebookIconFloat = styled.div`
  background: url("/images/dashboard/float-fb.png") no-repeat;
  background-size: contain;

  animation: bounceFb 2s 1s linear alternate infinite;

  @keyframes bounceFb {
    to {
      transform: translateY(25px) translateX(-25px);
    }
  }
`;

const HeroImageSection = styled.section`
  display: flex;
  align-items: center;
  margin-top: -40vmin;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  padding: 5rem 12rem;
  flex-direction: row;
  @media only screen and (max-width: 1024px) {
    justify-content: center;
    padding: 5rem 2rem;
  }
`;

const HeroImage = styled.img`
  width: 100%;
`;

const WhyChooseSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 5rem 12rem;

  gap: 3.5rem;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    padding: 5rem 2rem;
  }
`;

const WhyChooseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
  gap: 2.9rem;
  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const SectionTitle = styled.p`
  font-size: 20px;
  color: #237cfb;
  padding: 0rem 12rem;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    padding: 0rem 2rem;
  }
`;

const WhyChooseTitle = styled.p`
  font-size: 44px;
  color: #292d32;
  font-weight: 700;
`;

const WhyChooseButton = styled.button`
  background-color: #fff;
  padding: 1rem 3rem;
  border-radius: 3px;
  outline: none;
  border: 1px solid #237cfb;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.5s ease;
  color: #237cfb;
  &:hover {
    background-color: #173b67;
    color: #fff;
  }
  border-radius: 35px;
`;

const WhyChooseImage = styled.img`
  width: 100%;
`;

const MarketingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
  gap: 2.5rem;
  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const MarketingTitle = styled.p`
  font-size: 30px;
  color: #3a4569;
  font-weight: 500;
  line-height: 3rem;
`;

const MarketingText = styled.p`
  font-size: 18px;
  color: #3a4569;
  font-weight: 300;
  margin-top: -40px;
  margin-bottom: 4px;
  line-height: 2rem;
`;

const MarketingList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
  margin-top: 10px;
  @media only screen and (max-width: 1024px) {
    margin-top: 0px;
  }
`;

const MarketingListWrapper = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: 0.5rem;
`;

const MarketingListItemTop = styled.li`
  font-size: 14px;
  line-height: 21px;
  color: #d8dce9;
  display: flex;
  align-items: flex-start;
  width: max-content;
  background-color: #237cfb;
  padding: 1.8rem 2rem;
  border-radius: 12px;
  outline: none;
  border: 1px solid #237cfb;
  font-weight: 500;
  width: 100%;
  flex-direction: row;
  gap: 16px;
`;
const MarketingListItem = styled.li`
  font-size: 14px;
  line-height: 21px;
  color: #d8dce9;
  display: flex;
  align-items: flex-start;
  width: 100%;
  background-color: #fff;
  padding: 1.8rem 2rem;
  border-radius: 12px;
  outline: none;
  border: 1px solid #237cfb;
  font-weight: 500;
  flex-direction: row;
  gap: 16px;
`;

const MarketingListTopTitle = styled.p`
  font-size: 22px;
  color: white;
  font-weight: 500;
`;

const MarketingListTopText = styled.p`
  font-size: 16px;
  color: white;
  font-weight: 300;
`;

const MarketingListTitle = styled.p`
  font-size: 22px;
  color: #3a4569;
  font-weight: 500;
`;

const MarketingListText = styled.p`
  font-size: 16px;
  color: #3a4569;
  font-weight: 300;
`;

const MarketingListImage = styled.img`
  width: 75px;
`;

const landing = () => {
  return (
    <>
      <HeroSection>
        <InstagramIconFloat>
          <img src="/images/dashboard/float-ig.png" alt="instagram" />
        </InstagramIconFloat>
        <HeroSectionContainer>
          <HeroSectionTitle>Make it easy for yourself to</HeroSectionTitle>
          <HeroSectionTitle>manage Social Media</HeroSectionTitle>
          <HeroSectionText>
            Manage your social media and make it scheduled!
          </HeroSectionText>
          <HeroSectionWrapper>
            <HeroButton>Try Free Trial</HeroButton>
          </HeroSectionWrapper>
        </HeroSectionContainer>
        <FacebookIconFloat>
          <img src="/images/dashboard/float-fb.png" alt="facebook" />
        </FacebookIconFloat>
      </HeroSection>
      <HeroImageSection>
        <HeroImage src="/images/landing/dashboard.png" alt="logo" />
      </HeroImageSection>
      <SectionTitle>WHY SOCIALQ</SectionTitle>
      <WhyChooseSection>
        <WhyChooseWrapper>
          <WhyChooseTitle>Why Choose SocialQ?</WhyChooseTitle>
          <WhyChooseButton>Learn More</WhyChooseButton>

          <WhyChooseImage src="/images/landing/create.png" alt="logo" />
        </WhyChooseWrapper>
        <MarketingWrapper>
          <MarketingTitle>
            #1 Marketing Platform for Social Network
          </MarketingTitle>
          <MarketingText>
            With our service will help you save time and optimize profile
            management on social networks. Visually Plan, Schedule post and
            automation on social networks.
          </MarketingText>
          <MarketingList>
            <MarketingListItemTop>
              <MarketingListImage src="/images/landing/icon1.png" alt="logo" />
              <MarketingListWrapper>
                <MarketingListTopTitle>Post Schedule</MarketingListTopTitle>
                <MarketingListTopText>
                  Select your date, time or whenever you want to publish on each
                  your social accounts
                </MarketingListTopText>
              </MarketingListWrapper>
            </MarketingListItemTop>
            <MarketingListItem>
              <MarketingListImage src="/images/landing/icon2.png" alt="logo" />
              <MarketingListWrapper>
                <MarketingListTitle>Easy Create Post</MarketingListTitle>
                <MarketingListText>
                  SocialQ will provide AI Content generation tool. Content
                  creation has never been faster!
                </MarketingListText>
              </MarketingListWrapper>
            </MarketingListItem>
            <MarketingListItem>
              <MarketingListImage src="/images/landing/icon3.png" alt="logo" />

              <MarketingListWrapper>
                <MarketingListTitle>Flexible Pricing</MarketingListTitle>{" "}
                <MarketingListText>
                  We are providing best and affordable plans for small, medium
                  and large enterprise.
                </MarketingListText>
              </MarketingListWrapper>
            </MarketingListItem>
          </MarketingList>
        </MarketingWrapper>
      </WhyChooseSection>
      <Footer />
    </>
  );
};

export default landing;
