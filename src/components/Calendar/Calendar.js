import ReactCalendar from "react-calendar";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styled from "styled-components";

const MyCalendar = styled(ReactCalendar)`
  background: white;
  box-shadow: 0px 16px 69px rgba(0, 0, 0, 0.04);
  border-radius: 22px;
  padding: 20px;

  .react-calendar__navigation {
    background: inherit;
    display: flex;

    .react-calendar__navigation__label {
      order: 1;
      text-align: left;
      font-size: ${(props) => props.theme.fontSize["lg"]};
      letter-spacing: -0.02em;
      line-height: 27px;
      font-weight: ${(props) => props.theme.fontWeight["medium"]};
      margin-bottom: 20px;
    }

    .react-calendar__navigation__prev-button {
      order: 2;
    }

    .react-calendar__navigation__arrow {
      width: 32px;
      height: 32px;
      background: white;
      border: 0.75px solid ${(props) => props.theme.colors["p4"]};
      border-radius: 100%;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${(props) => props.theme.colors["p3"]};
      font-size: ${(props) => props.theme.fontSize["base"]};

      :hover {
        color: ${(props) => props.theme.colors["p1"]};
        transition: 0.5s;
      }
    }

    .react-calendar__navigation__prev2-button,
    .react-calendar__navigation__next2-button {
      display: none;
    }

    .react-calendar__navigation__next-button {
      order: 3;
      margin-left: 11px;
    }
  }

  .react-calendar__month-view__weekdays {
    font-size: ${(props) => props.theme.fontSize["xs"]};
    letter-spacing: -0.02em;
    color: ${(props) => props.theme.colors["p3"]};
    line-height: 18px;
    text-align: center;
    margin-bottom: 16px;
  }

  .react-calendar__month-view__days {
    row-gap: 14px;

    button.react-calendar__tile {
      font-size: ${(props) => props.theme.fontSize["xs"]};
      abbr {
        color: ${(props) => props.theme.colors["p2"]};
        letter-spacing: -0.02em;
        font-size: ${(props) => props.theme.fontSize["xs"]};
        font-weight: ${(props) => props.theme.fontWeight["medium"]};
        line-height: 18px;
      }

      :hover {
        background: ${(props) => props.theme.colors["p1"]};
        abbr {
          color: white;
        }
      }

      &.react-calendar__month-view__days__day--neighboringMonth {
        abbr {
          color: ${(props) => props.theme.colors["p3"]};
        }
      }
    }
  }
`;

const Calendar = ({ className, ...props }) => {
  return (
    <MyCalendar
      nextLabel={<FaChevronRight />}
      prevLabel={<FaChevronLeft />}
      className={className}
      next2Label=""
      prev2Label=""
      {...props}
    />
  );
};

export default Calendar;
