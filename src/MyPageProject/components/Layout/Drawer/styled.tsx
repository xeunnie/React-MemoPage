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

export const ItemContainer = styled('div')({
  color: 'white',
});
