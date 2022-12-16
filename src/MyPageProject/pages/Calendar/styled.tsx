import { Calendar } from 'react-calendar';
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
  backgroundColor: 'aliceblue',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
});

export const CalendarContainer = styled('div')({
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
});

export const CalendarBox = styled(Calendar)({
  backgroundColor: 'white',
  color: '#304552',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
  borderRadius: '0.8rem',
  boxShadow: '0 1.2rem 2.4rem rgba(0, 0, 0, 0.2)',
  fontFamily: 'Arial',
  fontSize: '2rem',
  marginTop: '2rem',
  padding: '2rem',
  gap: '2rem',
});

export const DrawerArea = styled('div')({
  display: 'flex',
  backgroundColor: 'white',
});

export const Drawers = styled(Drawer)({
  display: 'flex',
  width: '20rem',
});

export const BodyArea = styled('div')({
  backgroundColor: 'aliceblue',
  width: '100%',
  padding: '2rem',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  gridGap: '2rem',
});

export const ContentsContainer = styled('div')({
  backgroundColor: '#f5f6ff',
  padding: '2rem',
  gap: '2rem',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

export const ListContainer = styled('div')({
  backgroundColor: 'white',
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  overflow: 'auto',
});

export const PendingContainer = styled('div')({
  backgroundColor: 'white',
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  padding: '2rem',
  gap: '2rem',
});

export const BoardContainer = styled('div')({
  backgroundColor: '#f5f6ff',
  padding: '2rem',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
});

export const SubTitle = styled('div')({
  padding: '1rem',
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignContent: 'center',
});

export const SubTitleText = styled('div')({
  padding: '2rem',
  fontSize: '2rem',
});

export const SubList = styled('div')({
  backgroundColor: 'aliceblue',
  padding: '2rem',
  height: '100%',
});
