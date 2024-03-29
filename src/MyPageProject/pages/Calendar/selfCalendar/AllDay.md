import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled, { css } from 'styled-components';

interface ContainerProps {
sameMonth: boolean;
sameDay: boolean;
clickDay: boolean;
isHoliday: boolean;
}

const Container = styled.div<ContainerProps>`  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: gray;
  }
  p {
    padding: 5px;
    font-weight: ${({ sameMonth }) => (sameMonth ?`700`:`300`)};
    ${({ sameDay }) =>
      sameDay
        ? css`
color: white;
background-color: blue;
`
        : css``}
    ${({ clickDay }) =>
      clickDay
        ? css`
border: 1px solid skyblue;
`
        : css``}
    ${({ isHoliday }) => {
      if (isHoliday) {
        return css`
color: red;
`;
      }
    }}
  }
`;

interface Props {
day: Date;
nowDate: Date;
setNowDate: React.Dispatch<React.SetStateAction<Date>>;
clickedDate: Date | undefined;
setClickedDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
isHoliday: boolean;
}

const allDay = ({ day, nowDate, clickedDate, setClickedDate, isHoliday }: Props) => {
const nowTime = new Date();

const sameMonth = nowDate.getMonth() === day.getMonth();
const sameDay = nowTime.getFullYear() === day.getFullYear() && nowTime.getMonth() === day.getMonth() && nowTime.getDate() === day.getDate();

const clickDay: boolean = clickedDate
? clickedDate.getFullYear() === day.getFullYear() && clickedDate.getMonth() === day.getMonth() && clickedDate.getDate() === day.getDate()
: false;

const clickDate = () => {
setClickedDate(day);
};

return (
<Container onClick={() => clickDate()} sameMonth={sameMonth} sameDay={sameDay} clickDay={clickDay} isHoliday={isHoliday}>
<p>{day.getDate()}</p>
</Container>
);
};

export default allDay;
