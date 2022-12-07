import { Typography } from '@mui/material';

import { ItemButtonContainer, ItemLeftContainer, ItemLeftTextContainer } from './styled';

type ItemButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: string;
};

export default function ItemButton({ onClick, children }: ItemButtonProps) {
  return (
    <ItemButtonContainer onClick={onClick}>
      <ItemLeftContainer>
        <ItemLeftTextContainer>
          <Typography variant="h4">{children}</Typography>
        </ItemLeftTextContainer>
      </ItemLeftContainer>
    </ItemButtonContainer>
  );
}
