import { Drawer } from '@mui/material';
import { styled } from '@mui/material/styles';

export const NavigationContainer = styled(Drawer)({
  backgroundColor: 'aliceblue',
  width: '40rem',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  '*::-webkit-scrollbar': {
    width: '0.1rem',
    height: '0.1rem',
    backgroundColor: 'transparent',
  },
  '*::-webkit-scrollbar-thumb': {
    backgroundColor: '',
  },
  '*::-webkit-scrollbar-corner': {
    backgroundColor: 'transparent',
  },

  '& .MuiPaper-root': {
    backgroundColor: '#755461',
    color: '#e88eb0',
  },
});

export const NavigationListContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  height: '100%',
});

export const UpContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',

  overflow: 'hidden',
});

export const ItemContainer = styled('div')({
  overflow: 'auto',
});
