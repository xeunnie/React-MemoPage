// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ListItemText } from '@mui/material';
import Divider from '@mui/material/Divider';

// import ItemButton from './ItemButton';
import Profile from './Profile';
import { DrawerContainer, DrawerListContainer, MenuContainer, NavContainer, NavItem } from './styled';
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

        <NavContainer>
          <NavItem onClick={() => navigate('/')}>
            <ListItemText primary="- TODO List" />
          </NavItem>
          <Divider />
          <NavItem onClick={() => navigate('/calendar')}>
            <ListItemText primary="- Calender" />
          </NavItem>
          <Divider />
          <NavItem onClick={() => navigate('/memo')}>
            <ListItemText primary="- MEMO" />
          </NavItem>
          <Divider />
          <NavItem onClick={() => navigate('/photodashboard')}>
            <ListItemText primary="- Photo Dashboard" />
          </NavItem>
        </NavContainer>
      </DrawerListContainer>
    </DrawerContainer>
  );
}
