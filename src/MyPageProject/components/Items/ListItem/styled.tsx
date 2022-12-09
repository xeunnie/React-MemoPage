import styled from '@emotion/styled';

export const ButtonContainer = styled('button')({
  backgroundColor: '#ebfffe',
  fontfamily: 'Inter500',
  borderRadius: '2rem',
  border: '1px solid #97a9cc',
  margin: '2rem',
  padding: '1.6rem',
  display: 'flex',
  alignitems: 'center',
  justifycontent: 'space-between',
});

export const TextContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  columnGap: '0.5rem',
  width: '100%',
});

export const Title = styled('div')({
  marginLeft: '0.4rem',
  color: '#403f37',
});

export const Category = styled('div')({
  marginLeft: '0.4rem',
  color: '#6e6d6a',
});

export const IconBundle = styled('button')({
  display: 'flex',
  backgroundColor: '#edd9ff',
  flexDirection: 'column',
  columnGap: '0.5rem',
  marginRight: '1.6rem',
  justifyContent: 'space-between',
  height: '7rem',
  '&.Mui-focused': {
    '&.MuiOutlinedInput-notchedOutline': {
      border: '1px solid #FFFFFF',
    },
  },
});
