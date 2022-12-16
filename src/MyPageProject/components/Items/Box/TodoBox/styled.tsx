import styled from '@emotion/styled';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import DriveFileRenameOutlineTwoToneIcon from '@mui/icons-material/DriveFileRenameOutlineTwoTone';

export const ButtonContainer = styled('button')({
  backgroundColor: '#f5f6ff',
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
  backgroundColor: '#9ba2eb',
  marginRight: '1.6rem',
  justifyContent: 'space-between',
  padding: '1rem',
  borderRadius: '2rem',
  border: 0,
});

export const DeleteIcon = styled(DeleteForeverTwoToneIcon)({
  fontSize: 'large',
  color: '#304552',
});

export const EditIcon = styled(DriveFileRenameOutlineTwoToneIcon)({
  fontSize: 'large',
  color: '#304552',
});
