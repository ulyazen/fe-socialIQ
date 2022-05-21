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
      <Footer />
    </>
  );
};

export default landing;
