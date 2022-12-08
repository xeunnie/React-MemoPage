import { styled } from '@mui/material';

import Drawer from 'src/MyPageProject/components/Layout/Drawer';

export const Background = styled('div')({
  backgroundColor: '#FFFFFF',
  padding: '2rem',
  width: '1920px',
  height: '1080px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const InputContainer = styled('div')({
  backgroundColor: '#FFFFFF',
  display: 'flex',
  justifyContent: 'center',
  boxSizing: 'border-box',
});

// export const StyledInput = styled(Input)({
//   backgroundColor: '#ecffe8',
//   width: '100%',
//   height: '5rem',
//   display: 'flex',
//   justifyContent: 'center',
// });

export const ContentsArea = styled('div')({
  backgroundColor: '#f0ffe8',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
});

export const DrawerArea = styled('div')({
  display: 'flex',
  width: '20rem',
});

export const Drawers = styled(Drawer)({
  display: 'flex',
  width: '20rem',
});

export const BodyArea = styled('div')({
  backgroundColor: '#feffe8',
  width: '100%',
  padding: '2rem',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const ListContainer = styled('div')({
  backgroundColor: '#ffebe8',
  marginTop: '2rem',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
});
