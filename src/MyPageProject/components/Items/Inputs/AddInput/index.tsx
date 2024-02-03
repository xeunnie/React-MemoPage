import type { OutlinedInputProps } from '@mui/material';

import AddButton from './AddButton';
import { AddInputWrapper, StyledTextInput } from './styled';

type AddInputProps = OutlinedInputProps & {
  onClick: () => void;
};

export default function AddInput({ onClick }: AddInputProps) {
  return (
    <AddInputWrapper>
      <StyledTextInput placeholder="Add your Todo" />
      <AddButton click="ADD" onClickAdd={onClick} />
    </AddInputWrapper>
  );
}
