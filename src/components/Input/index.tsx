import type { OutlinedInputProps } from '@mui/material';
import { InputAdornment } from '@mui/material';

import { StyledTextInput } from './styled';

type InputProps = OutlinedInputProps;

export default function Input({ type, multiline, ...remainder }: InputProps) {
  return <StyledTextInput endAdornment={type === 'password' && <InputAdornment position="end" />} {...remainder} multiline={multiline} />;
}
