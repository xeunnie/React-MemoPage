// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ItemButton from './ItemButton';
import Profile from './Profile';
import { DrawerContainer, DrawerListContainer, ItemContainer, MenuContainer } from './styled';
import ToggleButton from './Toggle';

export default function Drawer() {
  const navigate = useNavigate();
  // const [, setToggleOpen] = useState<HTMLButtonElement | null>(null);
  return (
    <DrawerContainer>
      <Profile />
      <DrawerListContainer>
        <MenuContainer>
          <ToggleButton />
        </MenuContainer>
        <ItemContainer>
          <ItemButton onClick={() => navigate('/')}>- TODO List</ItemButton>
          <ItemButton onClick={() => navigate('/calendar')}>- Calender</ItemButton>
          <ItemButton onClick={() => navigate('/memo')}>- MEMO</ItemButton>
          <ItemButton onClick={() => navigate('/photodashboard')}>- Photo Dashboard</ItemButton>
        </ItemContainer>
      </DrawerListContainer>
    </DrawerContainer>
  );
}
