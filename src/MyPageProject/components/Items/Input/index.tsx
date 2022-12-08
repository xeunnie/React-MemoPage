import { StyledTextInput } from './styled';
import AddButton from '../AddButton';

type InputProps = {
  placeholder: string;
  value: string;
  onClick: () => void;
};

export default function Input({ value, placeholder, onClick }: InputProps) {
  return (
    <StyledTextInput placeholder={placeholder} value={value}>
      <AddButton click="ADD" onClickAdd={onClick} />
    </StyledTextInput>
  );
}
