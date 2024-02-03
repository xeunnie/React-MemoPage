import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { styled } from '@mui/material/styles';

export const DrawerContainer = styled('div')({
  backgroundColor: 'white',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  justifyContent: 'flex-start',
  margin: '2rem',
});

export const MenuContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
});

export const DrawerListContainer = styled('div')({
  display: 'flex',

  flexDirection: 'column',
  backgroundColor: 'white',
});

export const NavContainer = styled(List)({
  color: 'white',
  component: 'nav',
  ariaLabel: 'mailbox folders',
});

export const NavItem = styled(ListItem)({
  backgroundColor: 'aliceblue',
  color: 'black',
  component: 'nav',
});

export const BoldDivider = styled(Divider)({
  color: '#54587a',
});
