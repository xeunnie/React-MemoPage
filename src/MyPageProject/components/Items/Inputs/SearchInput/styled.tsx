import { styled } from '@mui/material';

export const SearchInputWrapper = styled('div')({
  borderRadius: '3rem',
  backgroundColor: '#f5f6ff',
  height: '4rem',
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

export const SearchButton = styled('button')({
  backgroundColor: '#9ba2e8',
  padding: '1rem',
  fontSize: '2rem',
  color: '#304552',
  borderRadius: '4rem',
  '&.MuiOutlinedInput-root': {
    backgroundColor: 'aliceblue',
  },
  border: '0px',
  height: '4rem',
  // '&.Mui-focused': {
  //   '&.MuiOutlinedInput-notchedOutline': {
  //     border: '1px solid #304552',
  //   },
  // },
});
