import { styled } from '@mui/material/styles';

export const ItemButtonContainer = styled('button')({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  height: '4.8rem',

  padding: '0 1.2rem 0 1.2rem',

  cursor: 'pointer',

  border: 0,
  backgroundColor: 'transparent',
});

export const ItemLeftContainer = styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
});

export const ItemLeftTextContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  marginLeft: '0.4rem',

  color: 'white',
});
