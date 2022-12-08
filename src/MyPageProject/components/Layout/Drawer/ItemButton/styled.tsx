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
});

export const ItemContainer = styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: '#fff9e8',
});

export const ItemTextContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: '0.4rem',
  color: '#545453',
  font: 'Inter',
  fontSize: '1.5rem',
  textAlign: 'left',
});
