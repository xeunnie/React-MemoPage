import { Typography } from '@mui/material';

import { ItemButtonContainer, ItemContainer, ItemTextContainer } from './styled';

type ItemButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: string;
};

export default function ItemButton({ onClick, children }: ItemButtonProps) {
  return (
    <ItemButtonContainer onClick={onClick}>
      <ItemContainer>
        <ItemTextContainer>
          <Typography variant="h4">{children}</Typography>
        </ItemTextContainer>
      </ItemContainer>
    </ItemButtonContainer>
  );
}
