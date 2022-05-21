import { withChangeTitleDashboard } from "hoc/withChangeTitleDashboard";
import styled from "styled-components";
import Text from "components/Typhography/Text";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Menu } from "components/Dropdown/Dropdown";
import { FaChevronDown, FaEdit } from "react-icons/fa";
import { MenuContainer } from "components/Dropdown/Dropdown";
import { useMemo, useState, useRef } from "react";
import Button from "components/Button/Button";
import Popup from "components/Popup";

function Calendar() {
  const initialEvents = useMemo(() => {
    return [
      { title: "event 1", date: new Date(), type: "facebook" },
      { title: "event 1", date: new Date(), type: "linkedin" },
    ];
  }, []);

  const [currentCalendar, setCurrentCalendar] = useState("week");
  const [eventsCalendar, setEventsCalendar] = useState(initialEvents);
  const previewRef = useRef([]);

  const handleChangeMenuItem = (event, value) => {
    setCurrentCalendar(value);
  };

  const handleChangeEventTypeMenu = (event, value) => {
    if (value === "all") {
      return setEventsCalendar(initialEvents);
    }

    const findEventByType = initialEvents.filter(
      (event) => event.type === value
    );

    setEventsCalendar(findEventByType);
  };

  return (
    <Container>
      <CalendarWrapper>
        <CalendarHeader>
          <Text>Welcome to your Calendar</Text>
        </CalendarHeader>
        <CalendarEvents>
          <StyledMenuContainer>
            <Menu className="menu-wrapper" onItemChange={handleChangeMenuItem}>
              {({ open, textContent }) => {
                return (
                  <>
                    <Menu.Button>
                      Week <FaChevronDown />{" "}
                    </Menu.Button>
                    <Menu.Items>
                      <Menu.Item value="week">Week</Menu.Item>
                      {/* <Menu.Item value="month">Month</Menu.Item> */}
                      <Menu.Item value="today">Today</Menu.Item>
                    </Menu.Items>
                  </>
                );
              }}
            </Menu>
            <Menu
              className="menu-wrapper"
              onItemChange={handleChangeEventTypeMenu}
            >
              {({ open, textContent }) => {
                return (
                  <>
                    <Menu.Button>
                      All Socmed <FaChevronDown />{" "}
                    </Menu.Button>
                    <Menu.Items>
                      <Menu.Item value="all">All Socmed</Menu.Item>
                      <Menu.Item value="facebook">Facebook</Menu.Item>
                      <Menu.Item value="instagram">Instagram</Menu.Item>
                      <Menu.Item value="linkedin">Linkedin</Menu.Item>
                    </Menu.Items>
                  </>
                );
              }}
            </Menu>
          </StyledMenuContainer>
          <FullCalendar
            plugins={[timeGridPlugin, interactionPlugin]}
            initialView="timeGrid"
            duration={{ days: currentCalendar === "today" ? 1 : 5 }}
            events={eventsCalendar}
            droppable
            editable
            allDaySlot={false}
            dayHeaderFormat={(e) => {
              const days = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
              const currentDays = days[e.date.marker.getDay()];

              return (
                <div className="custom-header-fc">
                  <span className="custom-header-fc__day">{currentDays}</span>
                  <span className="custom-header-fc__date">{e.date.day}</span>
                </div>
              );
            }}
            eventContent={(e) => {
              const {
                timeText,
                event: { title },
              } = e;

              const { type: eventType } = e.event._def.extendedProps;

              return (
                <Event className="event-wrapper">
                  <EventThumb className="event-thumb show-thumb">
                    <img src="/images/thumb-calendar.png" alt="" />
                    <EventSocialIcon type={`${eventType}`} />
                  </EventThumb>
                  <EventDetail>
                    <EventName>{title}</EventName>
                    <EventTime>{timeText}</EventTime>
                  </EventDetail>
                </Event>
              );
            }}
            headerToolbar={{
              start: "",
              center: "",
              end: "prev title next",
            }}
            dayHeaders={currentCalendar === "today" ? false : true}
            eventMinHeight={100}
            eventBackgroundColor="white"
            // eventResize={(e) => {
            //   const { el } = e;
            //   const { clientHeight } = el;
            //   const fcEventMainEl = el.querySelector(".fc-event-main");
            //   const eventThumb = el.querySelector(".event-thumb");
            //   const eventWrapper = el.querySelector(".event-wrapper");

            //   if (clientHeight <= 21) {
            //     fcEventMainEl.classList.add("reset-pad");
            //     eventThumb.classList.remove("show-thumb");

            //     eventWrapper.style.padding = "unset ";

            //     eventWrapper.children[1].style.marginTop = "unset";
            //     eventWrapper.children[1].style.display = "flex";
            //     eventWrapper.children[1].style.alignItems = "center";
            //     eventWrapper.children[1].style.height = "100%";
            //   } else
            // }}
          />
        </CalendarEvents>
      </CalendarWrapper>
      <UpComingSchedule>
        <Text>Upcoming Schedule</Text>
        <Schedules>
          {[
            {
              name: "Flamingo Fire on air",
              time: "Mon, 8 Dec - 03.00 PM",
              type: "facebook",
            },
            {
              name: "Flamingo Fire on air 2",
              time: "Mon, 8 Dec - 03.00 PM",
              type: "facebook",
            },
            {
              name: "Flamingo Fire on air 3",
              time: "Mon, 8 Dec - 03.00 PM",
              type: "facebook",
            },
            {
              name: "Flamingo Fire on air 4",
              time: "Mon, 8 Dec - 03.00 PM",
              type: "facebook",
            },
            {
              name: "Flamingo Fire on air 5",
              time: "Mon, 8 Dec - 03.00 PM",
              type: "facebook",
            },
          ].map((schedule, idx) => {
            return (
              <>
                <ScheduleCard key={idx}>
                  <ScheduleCardHeader>
                    <ScheduleCardHeaderThumb type="facebook">
                      <img src="/images/up-calendar.png" alt="" />
                    </ScheduleCardHeaderThumb>
                    <ScheduleCardDetail>
                      <Text>{schedule.name}</Text>
                      <Text>{schedule.time}</Text>
                    </ScheduleCardDetail>
                    <ScheduleCardEditButton>
                      <FaEdit />
                    </ScheduleCardEditButton>
                  </ScheduleCardHeader>

                  <ScheduleCardActions>
                    <Button>Delete</Button>
                    <Button ref={(e) => (previewRef.current[idx] = e)}>
                      Preview
                    </Button>
                  </ScheduleCardActions>
                </ScheduleCard>

                <Popup trigger={previewRef.current[idx]}>
                  {({ show, setShow }) => (
                    <Popup.Content>
                      <Popup.Header>
                        <Popup.Header.Title>{schedule.name}</Popup.Header.Title>
                        <Popup.Header.Actions actions={["delete", "edit"]} />
                      </Popup.Header>
                    </Popup.Content>
                  )}
                </Popup>
              </>
            );
          })}
        </Schedules>
      </UpComingSchedule>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const CalendarWrapper = styled.div`
  width: calc(100% - 329px);
  box-shadow: 0px 16px 64px rgba(0, 0, 0, 0.04);
  border-radius: 22px;
  padding: 21px;
  margin-right: 35px;
`;

const CalendarHeader = styled.div`
  width: 100%;
  height: 143px;
  box-shadow: 0px 15.0538px 64.9197px rgba(35, 124, 251, 0.11);
  border-radius: 20.699px;
  background: ${(props) => props.theme.colors["g1"]};
  display: flex;
  align-items: center;
  padding: 0 38px;
  position: relative;

  p {
    font-weight: ${(props) => props.theme.fontWeight["medium"]};
    font-size: ${(props) => props.theme.fontSize["3xl"]};
    line-height: 36px;
    letter-spacing: -0.03em;
    color: white;
    width: 196px;
  }

  ::before {
    content: "";
    position: absolute;
    background: url("/images/calendar.png") no-repeat;
    right: 71px;
    top: -57px;
    width: 229px;
    height: 230px;
  }
`;

const CalendarEvents = styled.div`
  margin-top: 28px;
  height: calc(100% - 171px);
  position: relative;
`;

const StyledMenuContainer = styled(MenuContainer)`
  display: flex;
  height: max-content;
  position: absolute;
  top: 0;

  .menu-wrapper {
    .menu-button {
      border-radius: 29px;
      border: 1px solid #d8dce9;
      padding: 4px 25px;
      width: 121px;
      font-weight: 500;
      font-size: 14px;
      line-height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        margin-left: 10px;
      }
    }

    &:last-child {
      margin-left: 16px;

      .menu-button {
        width: max-content;
      }
    }
  }
`;

const UpComingSchedule = styled.div`
  width: 329px;
  box-shadow: 0px 23px 72px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
  padding: 28px;
  overflow: hidden;

  p {
    letter-spacing: -0.03em;
    color: ${(props) => props.theme.colors["p6"]};
    font-weight: ${(props) => props.theme.fontWeight["medium"]};
    font-size: ${(props) => props.theme.fontSize["lg"]};
    line-height: 27px;
  }
`;

const Schedules = styled.div`
  width: 100%;
  height: calc(100% - 55px);
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 24px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 0;
  }
`;

const ScheduleCard = styled.div`
  box-shadow: 0px 16px 64px rgba(0, 0, 0, 0.04);
  border-radius: 18px;
  width: 273px;
  padding: 16px;

  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

const ScheduleCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ScheduleCardHeaderThumb = styled.div`
  position: relative;
  width: 51px;
  height: 51px;
  border-radius: 11px;

  img {
    width: 100%;
    height: 100%;
  }

  &::before {
    position: absolute;
    display: block;
    content: "";
    right: -8px;
    bottom: -8px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 2px solid white;
    background-size: contain;
    background-repeat: no-repeat !important;

    ${(props) =>
      props.type === "facebook"
        ? `
      background: url('/images/socmed/fb-20x20.png');
    `
        : ""}
  }
`;

const ScheduleCardDetail = styled.div`
  display: flex;
  flex-direction: column;

  p {
    letter-spacing: -0.02em;
    :first-child {
      font-weight: 500;
      font-size: 14px;
      line-height: 21px;
      color: #3a4569;
    }

    :last-child {
      font-size: 12px;
      line-height: 18px;
      color: #d8dce9;
    }
  }
`;

const ScheduleCardEditButton = styled.div`
  color: #d8dce9;
  cursor: pointer;
  width: 20px;
  height: 20px;
`;

const ScheduleCardActions = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 14px;

  button {
    padding: 8px 16px;
    height: auto;
    border-radius: 40px;

    :first-child {
      border: 0.5px solid #d8dce9;
      margin-right: 10px;
      color: #d8dce9;
    }

    :last-child {
      background: #3d8dff;
      color: white;
    }
  }
`;

const Event = styled.div`
  width: 100%;
  height: 100%;
  padding: 7px;
  display: flex;
  flex-direction: column;
`;

const EventThumb = styled.div`
  width: 100%;
  height: 52px;
  border-radius: 6px;
  overflow: hidden;
  display: none;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &.show-thumb {
    display: block;
  }
`;

const EventSocialIcon = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: white;
  position: absolute;
  bottom: 4px;
  left: 4px;

  ::after {
    content: "";
    position: absolute;
    inset: 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover !important;

    ${(props) =>
      props.type === "facebook"
        ? `
      background: url('/images/socmed/fb.png')
    `
        : props.type === "linkedin"
        ? `
          background: url('/images/socmed/linkedin.png')
        `
        : ""}
  }
`;

const EventDetail = styled.div`
  margin-top: 7px;
`;

const EventName = styled(Text)`
  font-weight: 500;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: -0.02em;
  color: #3a4569;
`;

const EventTime = styled(Text)`
  font-size: 8px;
  line-height: 12px;
  letter-spacing: -0.02em;
  // color: #d8dce9;
  margin-top: 2px;
`;

export default withChangeTitleDashboard(Calendar)("Calendar");
