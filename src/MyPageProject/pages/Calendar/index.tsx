import 'react-calendar/dist/Calendar.css';
import './calendarStyle.css';

import { useState } from 'react';

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
} from './styled';

export default function CalendarPage() {
  const [day, setDate] = useState(new Date());

  return (
    <Background>
      <Head isActive={false} />
      <ContentsArea>
        <DrawerArea>
          <Drawer />
        </DrawerArea>
        <BodyArea>
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
