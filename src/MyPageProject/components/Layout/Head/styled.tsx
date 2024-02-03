import { styled } from '@mui/material';

export const Header = styled('div')({
  backgroundColor: 'white',
  padding: '2rem',
  height: '10rem',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignContent: 'center',
});

export const Title = styled('div')({
  color: '#2d3647',
  display: 'flex',
  padding: '2rem',
  fontSize: '5.5rem',
  backgroundColor: '#f5f6ff',
});

export const ColorChangeBox = styled('div')({
  display: 'grid',
  gridTemplateColumns: '3rem 3rem 3rem 3rem',
  gridTemplateRows: '2rem 2rem',
  rowGap: '1rem',
  columnGap: '1rem',
  border: '1px solid royalblue',
  borderRadius: '2rem',
  backgroundColor: '#FFFFFF',
  padding: '2rem',
  justifyContent: 'left',
});

export const ColorChangeButton = styled('button')({
  padding: '1rem',
  backgroundColor: '#e8ffec',
});
