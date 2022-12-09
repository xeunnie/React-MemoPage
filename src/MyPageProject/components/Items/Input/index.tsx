import type { OutlinedInputProps } from '@mui/material';

import { StyledTextInput } from './styled';
import AddButton from '../AddButton';

type InputProps = OutlinedInputProps & {
  onClick: () => void;
};

export default function Input({ onClick }: InputProps) {
  return (
    <>
      <StyledTextInput />
      <AddButton click="ADD" onClickAdd={onClick} />
    </>
  );
}
