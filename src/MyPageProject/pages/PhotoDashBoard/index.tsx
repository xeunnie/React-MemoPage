import Drawer from 'src/MyPageProject/components/Layout/Drawer';
import Head from 'src/MyPageProject/components/Layout/Head';

import { Background, BodyArea, ContentsArea, ContentsContainer, DrawerArea, PendingContainer } from './styled';

export default function PhotoDashBoard() {
  return (
    <Background>
      <Head isActive={false} />
      <ContentsArea>
        <DrawerArea>
          <Drawer />
        </DrawerArea>
        <BodyArea>
          <ContentsContainer />
          <PendingContainer />
        </BodyArea>
      </ContentsArea>
    </Background>
  );
}
