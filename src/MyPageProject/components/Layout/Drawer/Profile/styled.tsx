import { styled } from '@mui/material/styles';

export const ProfileContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
  backgroundColor: 'aliceblue',
  borderRadius: '2rem',
});

export const ProfileNickname = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: '0.4rem',
  color: '#304552',
  font: 'Inter',
  fontSize: '1.5rem',
  textAlign: 'left',
});

export const ProfileText = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  marginLeft: '0.4rem',
  color: '#304552',
  font: 'Inter',
  fontSize: '1rem',
  textAlign: 'left',
});
