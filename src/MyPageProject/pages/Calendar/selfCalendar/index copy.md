import 'react-calendar/dist/Calendar.css';

import { useState } from 'react';

// import { addDays, endOfMonth, endOfWeek, isSameDay, startOfDay, startOfMonth } from 'date-fns';
// import { format } from 'path';
// import { Icon } from '@iconify/react';
import ContentsTitle from 'src/MyPageProject/components/Layout/ContentsTitle';
import Drawer from 'src/MyPageProject/components/Layout/Drawer';
import Head from 'src/MyPageProject/components/Layout/Head';

import {
  Background,
  BoardContainer,
  BodyArea,
  CalendarBox,
  CalendarContainer,
  ContentsArea,
  ContentsContainer,
  DrawerArea,
  PendingContainer,
  SubList,
  SubTitle,
  SubTitleText,
} from '../styled';

// type RenderHeaderProps ={
//   currentMonth:number
//   prevMonth:number
//   nextMonth:number
// }

// function RenderHeader({ currentMonth, prevMonth, nextMonth }: RenderHeaderProps) {
//   return (
//     <div className="header row">
//       <div className="col col-start">
//         <span className="text">
//           <span className="text month">{(format(currentMonth), 'M')}월</span>
//           {(format(currentMonth), 'yyyy')}
//         </span>
//       </div>
//       <div className="col col-end">
//         <Icon icon="bi:arrow-left-circle-fill" onClick={prevMonth} />
//         <Icon icon="bi:arrow-right-circle-fill" onClick={nextMonth} />
//       </div>
//     </div>
//   );
// }

// function RenderDays() {
//   const days = [];
//   const date = ['Sun', 'Mon', 'Thu', 'Wed', 'Thr', 'Fri', 'Sat'];

//   for (let i = 0; i < 7; i++) {
//     days.push(
//       <div className='"col' key={i}>
//         {date[i]}
//       </div>,
//     );
//   }
//   return <div className="days rows">{days}</div>;
// }

// function RenderCells({ currentMonth, selectedDate, onDateClick }) {
//   const monthStart = startOfMonth(currentMonth);
//   const monthEnd = endOfMonth(monthStart);
//   const startDate = startOfDay(monthStart);
//   const endDate = endOfWeek(monthEnd);

//   const rows = [];
//   let days = [];
//   let day = startDate;
//   let formattedDate = '';

//   while (day <= endDate) {
//     for (let i = 0; i < 7; i++) {
//       formattedDate = format(day, 'd');
//       const cloneDay = day;
//       days.push(
//         <div
//           className={`col cell ${
//             isSameMonth(day, monthStart)
//               ? 'disabled'
//               : isSameDay(day, selectedDate)
//               ? 'selected'
//               : format(currentMonth, 'M') !== format(day, 'M')
//               ? 'not-valid'
//               : 'valid'
//           }`}
//           key={day}
//           onClick={() => onDateClick(parse(cloneDay))}
//         >
//           <span className={format(currentMonth, 'M') !== format(day, 'M') ? 'text not-valid' : ''}>{formattedDate}</span>
//         </div>,
//       );
//       day = addDays(day, 1);
//     }
//     rows.push(
//       <div className="row" key={day}>
//         {days}
//       </div>,
//     );
//     days = [];
//   }
//   return <div className="body">{rows}</div>;
// }

export default function CalendarPage() {
  const [day, setDate] = useState(new Date());

  //   const [currentMonth, setCurrentMonth] = useState(new Date());
  //   const [selectedDate, setSelectedDate] = useState(new Date());

  //   const prevMonth = () => {
  //     setCurrentMonth(subMonth(currentMonth, 1));
  //   };
  //   const nextMonth = () => {
  //     setCurrentMonth(addMonth(currentMonth, 1));
  //   };
  //   const onDateClick = (day) => {
  //     setSelectedDate(day);
  //   };
  return (
    <Background>
      <Head isActive={false} />
      <ContentsArea>
        <DrawerArea>
          <Drawer />
        </DrawerArea>
        <BodyArea>
          {/* <RenderHeader currentMonth={currentMonth} prevMonth={prevMonth} nextMonth={nextMonth} />
          <RenderDays />
          <RenderCells currentMonth={currentMonth} prevMonth={prevMonth} nextMonth={nextMonth} /> */}
          <ContentsContainer>
            <ContentsTitle title="Calendar" />
            <CalendarContainer>
              <CalendarBox onChange={setDate} value={day} calendarType="US" />
            </CalendarContainer>
            <h2 className="text-center">
              <span className="bold">Selected Date:</span> {day.toDateString()}
            </h2>
          </ContentsContainer>
          <PendingContainer>
            <BoardContainer>
              <SubTitle>
                <SubTitleText>Important MEMO</SubTitleText>
              </SubTitle>
              <SubList />
            </BoardContainer>
            <BoardContainer>
              <SubTitle>
                <SubTitleText>Old MEMO</SubTitleText>
              </SubTitle>
              <SubList />
            </BoardContainer>
            <BoardContainer>
              <SubTitle>
                <SubTitleText>Saved MEMO</SubTitleText>
              </SubTitle>
              <SubList />
            </BoardContainer>
          </PendingContainer>
        </BodyArea>
      </ContentsArea>
    </Background>
  );
}
