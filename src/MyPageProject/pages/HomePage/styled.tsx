import { styled } from '@mui/material';

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

export const DrawerArea = styled('div')({
  display: 'flex',
  backgroundColor: 'white',
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
  gap: '2rem',
  padding: '2rem',
});

export const BoardContainer = styled('div')({
  backgroundColor: '#f5f6ff',
  padding: '2rem',
  height: '100%',
  gap: '2rem',
  display: 'flex',
  flexDirection: 'column',
});

export const BoardTitle = styled('div')({
  backgroundColor: 'white',
  padding: '2rem',
  justifyContent: 'space-between',
  display: 'flex',
  flexDirection: 'row',
  alignContent: 'center',
});

export const BoardTitleText = styled('div')({
  fontSize: '3rem',
  padding: '1rem',
  display: 'flex',
});

export const BoardTitleSearch = styled('div')({
  display: 'flex',
  flexDirection: 'row',
});

export const BoardBox = styled('div')({
  backgroundColor: 'white',
  padding: '2rem',
  height: '100%',
});
