import styled from "styled-components";
import { withChangeTitleDashboard } from "hoc/withChangeTitleDashboard";
import Text from "components/Typhography/Text";
import { useState } from "react";
import Chart from "react-apexcharts";
import { Menu } from "components/Dropdown/Dropdown";
import Calendar from "components/Calendar/Calendar";
import classNames from "classnames";

function Dashboard() {
  const [statisticState] = useState({
    options: {
      chart: {
        id: "statistic-bar",
        toolbar: {
          show: false,
          autoSelected: "pan",
        },
      },
      tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          return `<div className="my-chart-tooltip">${series[seriesIndex][dataPointIndex]}</div>`;
        },
      },
      colors: ["#237CFB"],
      labels: ["1 Mar", "2 Mar", "3 Mar", "4 Mar", "5 Mar", "6 Mar"],
      title: {
        text: "Statistic",
        style: {
          fontSize: "18px",
          lineHeight: "32px",
          fontWeight: "500",
          color: "#101010",
          fontFamily: "Poppins",
        },
      },
      dataLabels: {
        enabled: false,
      },
    },
    series: [
      {
        name: "series-1",
        data: [4, 11, 13, 22, 15, 20],
      },
    ],
  });

  const handleClickUpload = () => {};

  return (
    <Container>
      <LeftContent>
        <Header>
          <HeaderText>
            <WelcomeText>Welcome, Rizky👋</WelcomeText>
            <TaglineText weight="medium" size="3xl">
              Lets manage your Social Media.
            </TaglineText>
            <TryNowButton>Try Now</TryNowButton>
          </HeaderText>
          <HeroHeaderWrapper>
            <InstagramIconFloat />
            <img
              src="/images/dashboard/hero-header-without-float.png"
              alt="hero"
              className="hero"
            />
            <FacebookIconFloat />
          </HeroHeaderWrapper>
        </Header>

        <StatisticWrapper>
          <StatisticBar>
            <Chart
              options={statisticState.options}
              series={statisticState.series}
              type="area"
              width="100%"
              height="100%"
            />
            <StyledMenu>
              {({ open }) => {
                return (
                  <>
                    <StyledMenuButton
                      className={classNames("hidden-default-arrow", {
                        open: open && "opened",
                      })}
                    >
                      Weekly
                    </StyledMenuButton>
                    <Menu.Items>
                      <Menu.Item>Weekly</Menu.Item>
                      <Menu.Item>Monthly</Menu.Item>
                      <Menu.Item>Yearly</Menu.Item>
                    </Menu.Items>
                  </>
                );
              }}
            </StyledMenu>
          </StatisticBar>
          <CardStatisticLists>
            <CardStatistic>
              <SuccedStatisticIcon>
                <img src="/images/icons/checked.svg" alt="" />
              </SuccedStatisticIcon>
              <ContentCardStatistic>
                <Text className="title">161</Text>
                <Text className="desc">Succeed</Text>
              </ContentCardStatistic>
            </CardStatistic>
            <CardStatistic>
              <FailedStatisticIcon>
                <img src="/images/icons/danger.svg" alt="" />
              </FailedStatisticIcon>
              <ContentCardStatistic>
                <Text className="title">161</Text>
                <Text className="desc">Failed</Text>
              </ContentCardStatistic>
            </CardStatistic>
            <CardStatistic>
              <TotalStatisticIcon>
                <img src="/images/icons/happy-emoji.svg" alt="" />
              </TotalStatisticIcon>
              <ContentCardStatistic>
                <Text className="title">240</Text>
                <Text className="desc">Total</Text>
              </ContentCardStatistic>
            </CardStatistic>
          </CardStatisticLists>
        </StatisticWrapper>
      </LeftContent>
      <RightContent>
        <SchedulePost>
          <SchedulePostHeader>
            <SchedulePostTitle>Schedule Post</SchedulePostTitle>
            <ViewAllPosts>View All</ViewAllPosts>
          </SchedulePostHeader>
          <Posts>
            <Post>
              <PostHeader>
                <PostThumb>
                  <img src="/images/dashboard/post-1.png" alt="" />
                </PostThumb>
                <PostDetail>
                  <Text className="post-detail-title">
                    Flamingo Fire on air
                  </Text>
                  <Text className="post-detail-time">
                    Mon, 8 Dec - 03.00 PM
                  </Text>
                </PostDetail>
                <PostActions>
                  <button>
                    <img src="/images/icons/edit-2.svg" alt="" />
                  </button>
                  <button>
                    <img src="/images/icons/trash.svg" alt="" />
                  </button>
                </PostActions>
              </PostHeader>
              <PostFooter>
                <Text>Upload On</Text>
                <PostUploadItem onClick={handleClickUpload}>
                  <img src="/images/share-to-fb.png" alt="" />
                </PostUploadItem>
              </PostFooter>
            </Post>
            <Post>
              <PostHeader>
                <PostThumb>
                  <img src="/images/dashboard/post-1.png" alt="" />
                </PostThumb>
                <PostDetail>
                  <Text className="post-detail-title">
                    Flamingo Fire on air
                  </Text>
                  <Text className="post-detail-time">
                    Mon, 8 Dec - 03.00 PM
                  </Text>
                </PostDetail>
                <PostActions>
                  <button>
                    <img src="/images/icons/edit-2.svg" alt="" />
                  </button>
                  <button>
                    <img src="/images/icons/trash.svg" alt="" />
                  </button>
                </PostActions>
              </PostHeader>
              <PostFooter>
                <Text>Upload On</Text>
                <PostUploadItem onClick={handleClickUpload}>
                  <img src="/images/share-to-fb.png" alt="" />
                </PostUploadItem>
              </PostFooter>
            </Post>
          </Posts>
        </SchedulePost>
        <StyledCalendar />
      </RightContent>
    </Container>
  );
}

const Container = styled.div`
  display: flex;

  @media screen and (max-width: 996px) {
    flex-direction: column;
  }
`;

const LeftContent = styled.div`
  width: calc(100% - 369px);
  height: 100%;

  @media screen and (max-width: 996px) {
    width: 100%;
  }
`;

const RightContent = styled.div`
  width: 369px;
  height: 100%;
  margin-left: 24px;
  position: sticky;
  top: 102px;

  @media screen and (max-width: 996px) {
    width: 100%;
    margin-left: unset;
    margin-top: 25px;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 272px;
  border-radius: 22px;
  box-shadow: 0px 16px 69px rgba(35, 124, 251, 0.11);
  background: ${(props) => props.theme.colors["g1"]};
  position: relative;
  display: flex;
  padding: 45px 50px 50px 50px;
  z-index: 2;
  justify-content: space-between;

  ::before,
  ::after {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
  }

  ::before {
    inset: 0;
    background: url("/images/dashboard/header-float-left.svg"),
      url("/images/dashboard/header-float-right.svg");
    background-size: 307px 100%, 358px 228px;
    background-position: left, bottom right;
    background-repeat: no-repeat;
  }

  @media screen and (max-width: 576px) {
    flex-direction: column;
    height: 604px;
    padding: 40px;
    position: relative;

    ::before,
    ::after {
      display: none;
    }
  }
`;

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
`;

const WelcomeText = styled(Text).attrs({
  color: "p4",
})`
  letter-spacing: -0.03em;
  line-height: 24px;
`;

const TaglineText = styled(Text)`
  margin-top: 12px;
  color: white;
  width: 213px;
  line-height: 36px;
  letter-spacing: -0.03em;
`;

const TryNowButton = styled.button`
  background: rgba(255, 255, 255, 0.32);
  border: 0.5px solid rgba(255, 255, 255, 0.48);
  background: rgba(255, 255, 255, 0.32);
  border: 0.5px solid rgba(255, 255, 255, 0.48);
  border-radius: 8px;
  width: 151px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 24px;
  cursor: pointer;
`;

const HeroHeaderWrapper = styled.div`
  width: 375px;
  height: auto;
  transform: translate(50px);
  margin-top: -45px;
  margin-bottom: -50px;
  position: relative;

  .hero {
    position: absolute;
    top: -65px;
    right: 0;
  }

  @media screen and (max-width: 1336px) {
    .hero {
      width: 100%;
      height: 100%;
      object-fit: contain;
      top: 0;
    }
  }

  @media screen and (max-width: 576px) {
    transform: none;
    width: auto;
    margin-top: 26px;
    margin-bottom: unset;
    flex-grow: 1;
    margin: 26px -40px -40px -40px;
  }
`;

const InstagramIconFloat = styled.div`
  width: 87px;
  height: 136px;
  background: url("/images/dashboard/float-ig.png") no-repeat;
  background-size: contain;
  position: absolute;
  left: -23px;
  top: -43px;
  animation: bounceIg 2s linear alternate-reverse infinite;

  @keyframes bounceIg {
    to {
      transform: translateY(25px) translateX(15px);
    }
  }

  @media screen and (max-width: 576px) {
    left: 16px;
    top: -9px;
  }
`;

const FacebookIconFloat = styled.div`
  width: 95px;
  height: 88px;
  background: url("/images/dashboard/float-fb.png") no-repeat;
  background-size: contain;
  position: absolute;
  top: -32px;
  right: 20px;
  animation: bounceFb 2s 1s linear alternate infinite;

  @keyframes bounceFb {
    to {
      transform: translateY(25px) translateX(-5px);
    }
  }

  @media screen and (max-width: 576px) {
    right: 44px;
    top: 15px;
  }
`;

const StatisticWrapper = styled.div`
  width: 100%;
  margin-top: 25px;
  height: calc(100% - 297px);
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 576px) {
    flex-direction: column;
    width: 100%;
  }
`;

const StatisticBar = styled.div`
  width: calc(100% - 208px);
  height: 319px;
  background: #ffffff;
  box-shadow: 0px 94.0005px 115.798px rgba(0, 0, 0, 0.03);
  border-radius: 28px;
  padding: 30px 0 25px 10px;
  position: relative;
  margin-right: 25px;
  z-index: 2;

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

const StyledMenu = styled(Menu)`
  width: 121px;
  position: absolute;
  top: 26px;
  right: 21px;
`;

const StyledMenuButton = styled(Menu.Button)`
  border: 1px solid #d8dce9;
  border-radius: 29px;
  padding: 4px;
  line-height: 32px;
  color: ${(props) => props.theme.colors["p6"]};
  font-weight: ${(props) => props.theme.fontWeight["medium"]};
  display: flex;
  align-items: center;
  justify-content: center;

  ::after {
    content: "";
    margin-left: 10px;
    display: block;
    width: 13px;
    height: 13px;
    background: url("/images/icons/arrow-down.svg");
  }

  &.opened {
    ::after {
      transform: rotate(180deg);
    }
  }
`;

const CardStatisticLists = styled.div`
  width: 208px;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 2;

  @media screen and (max-width: 576px) {
    width: 100%;
    margin-top: 25px;
  }
`;

const CardStatistic = styled.div`
  width: 100%;
  background: #fff;
  box-shadow: 0px 94.0005px 115.798px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 19px 20px;

  :not(:last-child) {
    margin-bottom: 19px;
  }
`;

const ContentCardStatistic = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;

  .title {
    letter-spacing: -0.02em;
    font-weight: ${(props) => props.theme.fontWeight["semi-bold"]};
    font-size: ${(props) => props.theme.fontSize["2xl"]};
    color: ${(props) => props.theme.colors["p2"]};
    line-height: 33px;
  }

  .desc {
    line-height: 24px;
    letter-spacing: -0.02em;
    color: ${(props) => props.theme.colors["p3"]};
  }
`;

const CardIconBox = styled.div`
  width: 57px;
  height: 57px;
  border-radius: 16px;
  box-shadow: 0px 94.0005px 115.798px rgba(0, 0, 0, 0.03);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SuccedStatisticIcon = styled(CardIconBox)`
  background: rgba(112, 207, 151, 0.15);
  filter: drop-shadow(0px 9px 23px rgba(112, 207, 151, 0.81));
`;

const FailedStatisticIcon = styled(CardIconBox)`
  background: rgba(255, 98, 112, 0.15);
`;

const TotalStatisticIcon = styled(CardIconBox)`
  background: rgba(63, 141, 253, 0.15);
`;

const SchedulePost = styled.div`
  width: 100%;
  height: 275px;
`;

const SchedulePostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SchedulePostTitle = styled(Text)`
  color: ${(props) => props.theme.colors["p6"]};
  letter-spacing: -0.03em;
  line-height: 33px;
  font-size: ${(props) => props.theme.fontSize["2xl"]};
  font-weight: ${(props) => props.theme.fontWeight["medium"]};
  display: inline-flex;
  align-items: center;

  ::after {
    content: "4";
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 7px;
    width: 39px;
    height: 36px;
    letter-spacing: -0.02em;
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.colors["p3"]};
    font-size: ${(props) => props.theme.fontSize["base"]};
    line-height: 24px;
  }
`;

const ViewAllPosts = styled(Text)`
  color: ${(props) => props.theme.colors["p1"]};
  font-weight: ${(props) => props.theme.fontWeight["medium"]};
  letter-spacing: -0.03em;
  cursor: pointer;
  display: inline-flex;
  align-items: center;

  ::after {
    content: "";
    display: block;
    width: 18px;
    margin-left: 6px;
    height: 18px;
    background: url("/images/icons/arrow-right--blue.svg") no-repeat;
  }
`;

const Posts = styled.div`
  margin-top: 23px;
  padding: 20px;
  box-shadow: 0px 16px 69px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
  height: 214px;
  background: ${(props) => props.theme.colors["g1"]};
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  z-index: -1;

  ::-webkit-scrollbar {
    width: 0;
  }
`;

const Post = styled.div`
  flex: 0;
  background: white;
  border-radius: 20px;
  box-shadow: 0px 16px 69px rgba(0, 0, 0, 0.1);
  width: 328px;
  padding: 15px 20px 10px 16px;

  :not(:last-child) {
    margin-bottom: 13px;
  }

  @media screen and (max-width: 996px) {
    width: 100%;
  }
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const PostThumb = styled.div`
  width: 51px;
  height: 51px;
  border-radius: 11px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PostDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;

  .post-detail-title {
    line-height: 24px;
    letter-spacing: -0.02em;
    color: ${(props) => props.theme.colors["p7"]};
    font-weight: ${(props) => props.theme.fontWeight["medium"]};
    margin-bottom: 3px;
  }

  .post-detail-time {
    font-size: ${(props) => props.theme.fontSize["sm"]};
    color: ${(props) => props.theme.colors["p3"]};
    line-height: 21px;
    letter-spacing: -0.02em;
  }
`;

const PostActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-grow: 1;

  button {
    width: max-content;
    height: max-content;

    img {
      cursor: pointer;
    }
  }
`;

const PostFooter = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6px;

  p:first-child {
    color: ${(props) => props.theme.colors["p3"]};
    letter-spacing: -0.02em;
    line-height: 18px;
    font-size: ${(props) => props.theme.fontSize["xs"]};
    margin-right: 7px;
  }
`;

const PostUploadItem = styled.div`
  border-radius: 17px;
  background: ${(props) => props.theme.colors["p4"]};
  padding: 4px 6px;
  cursor: pointer;
`;

const StyledCalendar = styled(Calendar)`
  z-index: 3;
  margin-top: 25px;
  height: 319px;
`;

export default withChangeTitleDashboard(Dashboard)("Dashboard");
