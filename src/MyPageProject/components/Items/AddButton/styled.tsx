import { styled } from '@mui/material';

export const AddButtonItem = styled('button')({
  backgroundColor: 'aliceblue',
  padding: '1rem',
  fontSize: '2rem',
  color: '#304552',
  borderRadius: '4rem',
  '&.MuiOutlinedInput-root': {
    backgroundColor: 'aliceblue',
  },
  '&.Mui-focused': {
    '&.MuiOutlinedInput-notchedOutline': {
      border: '1px solid #304552',
    },
  },
  marginLeft: '1rem',
});
