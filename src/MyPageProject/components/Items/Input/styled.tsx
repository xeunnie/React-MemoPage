import { styled } from '@mui/material';

export const StyledTextInput = styled('input')({
  borderRadius: '3rem',
  backgroundColor: 'aliceblue',
  color: '#6f7c85',
  width: '100%',
  padding: '2rem',
  fontSize: '2rem',
  '&.MuiOutlinedInput-root': {
    backgroundColor: 'aliceblue',
  },
  '&.Mui-focused': {
    '&.MuiOutlinedInput-notchedOutline': {
      border: '1px solid #304552',
    },
  },
  '&::placeholder': {
    color: '#6f7c85',
  },
});
