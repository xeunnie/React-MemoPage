import ContentsTitle from 'src/MyPageProject/components/Layout/ContentsTitle';
import Drawer from 'src/MyPageProject/components/Layout/Drawer';
import Head from 'src/MyPageProject/components/Layout/Head';

import {
  Background,
  BoardContainer,
  BodyArea,
  ContentsArea,
  ContentsContainer,
  DrawerArea,
  ListContainer,
  PendingContainer,
  SubList,
  SubTitle,
  SubTitleText,
} from './styled';

export default function PhotoDashboard() {
  return (
    <Background>
      <Head isActive={false} />
      <ContentsArea>
        <DrawerArea>
          <Drawer />
        </DrawerArea>
        <BodyArea>
          <ContentsContainer>
            <ContentsTitle title="Photo Dashboard" />
            <ListContainer>
              <SubTitle>
                <SubTitleText>Recent Photo</SubTitleText>
              </SubTitle>
            </ListContainer>
          </ContentsContainer>
          <PendingContainer>
            <BoardContainer>
              <SubTitle>
                <SubTitleText>Liked Photo</SubTitleText>
              </SubTitle>
              <SubList />
            </BoardContainer>
          </PendingContainer>
        </BodyArea>
      </ContentsArea>
    </Background>
  );
}
