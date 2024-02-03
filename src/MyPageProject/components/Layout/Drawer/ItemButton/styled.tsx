import { styled } from '@mui/material/styles';

export const ItemButtonContainer = styled('button')({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '4.8rem',
  padding: '1.2rem',
  cursor: 'pointer',
  border: 0,
  backgroundColor: 'aliceblue',
});

export const ItemContainer = styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: 'aliceblue',
});

export const ItemTextContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: '0.4rem',
  color: '#304552',
  font: 'Inter',
  fontSize: '1.5rem',
  textAlign: 'left',
});
