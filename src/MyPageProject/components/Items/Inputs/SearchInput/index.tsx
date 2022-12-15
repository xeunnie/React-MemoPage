import type { OutlinedInputProps } from '@mui/material';

import { SearchButton, SearchInputWrapper, StyledTextInput } from './styled';

type AddInputProps = OutlinedInputProps & {
  onClick: () => void;
};

export default function SearchInput({ onClick }: AddInputProps) {
  return (
    <SearchInputWrapper>
      <StyledTextInput placeholder="serch your todo" />
      <SearchButton onClick={onClick}>search</SearchButton>
    </SearchInputWrapper>
  );
}
