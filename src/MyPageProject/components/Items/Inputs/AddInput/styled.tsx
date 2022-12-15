import { styled } from '@mui/material';

export const AddInputWrapper = styled('div')({
  borderRadius: '3rem',
  backgroundColor: 'aliceblue',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '1rem',
  '&.Mui-focused': {
    '&.MuiOutlinedInput-notchedOutline': {
      border: '1px solid #304552',
    },
  },
});

export const StyledTextInput = styled('input')({
  color: '#6f7c85',
  width: '100%',
  backgroundColor: 'transparent',
  marginLeft: '1rem',
  fontSize: '2rem',
  '&.MuiOutlinedInput-root': {
    backgroundColor: 'aliceblue',
  },

  '&::placeholder': {
    color: '#6f7c85',
  },

  border: '0px',
});
