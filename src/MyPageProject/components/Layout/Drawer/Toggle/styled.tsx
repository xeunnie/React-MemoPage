import { styled } from '@mui/material/styles';

export const ToggleContainerButton = styled('button')({
  backgroundColor: 'aliceblue',
  borderRadius: '2rem',
  padding: '1.2rem',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  cursor: 'pointer',
});

export const ToggleText = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'left',
  fontSize: '2rem',
});

export const ToggleIconContainer = styled('button')({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  backgroundColor: '#9ba2e8',
  borderRadius: '2rem',
  '& > svg > path': {
    fill: '#304552',
  },
  '& > svg': {
    transform: 'rotate(45deg)',
  },
});
