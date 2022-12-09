import { styled } from '@mui/material';

import Drawer from 'src/MyPageProject/components/Layout/Drawer';

export const Background = styled('div')({
  backgroundColor: '#000000',
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
  justifyContent: 'flex-start',
  boxSizing: 'border-box',
  padding: '2rem',
});

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
  flexDirection: 'row',
  justifyContent: 'center',
  gridGap: '2rem',
});

export const ContentsContainer = styled('div')({
  backgroundColor: '#dbd9ff',
  padding: '2rem',
  columnGap: '2rem',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

export const ListContainer = styled('div')({
  backgroundColor: '#ffebe8',
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  overflow: 'auto',
});

export const PendingContainer = styled('div')({
  backgroundColor: '#ffd9e1',
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  gap: '2rem',
  padding: '2rem',
});

export const BoardContainer = styled('div')({
  backgroundColor: '#f2fae1',
  padding: '2rem',
  height: '100%',
});
