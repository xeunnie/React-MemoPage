import { styled } from '@mui/material/styles';

export const DrawerContainer = styled('div')({
  backgroundColor: '#f2e8ff',
  width: '100%',

  display: 'flex',
  justifyContent: 'center',
  margin: '2rem',
});

export const DrawerListContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  columnGap: '2rem',
});

export const ItemContainer = styled('div')({
  overflow: 'auto',
});
