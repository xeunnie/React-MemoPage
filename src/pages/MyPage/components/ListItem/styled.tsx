import styled from '@emotion/styled';

export const ButtonContainer = styled('button')({
  backgroundColor: '#fffdeb',
  fontfamily: 'Inter500',
  borderRadius: '0.8rem',
  height: '10rem',
  width: '100%',
  margin: '2rem',
  padding: '1.6rem',
  display: 'flex',
  alignitems: 'center',
  justifycontent: 'space-between',
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
  columngap: '0.8rem',
  marginRight: '1.6rem',
  height: '2.4rem',
});
