import { ToggleContainerButton, ToggleIconContainer, ToggleText } from './styled';

import { ReactComponent as Cross } from 'src/assets/svg/Cross.svg';

// type DropdownButtonProps = {
//   // isToggleOpen?: boolean;
//   // onClickToggle: (currentTarget: EventTarget & HTMLButtonElement) => void;
// }; { onClickToggle }: DropdownButtonProps
// onClick={(event) => onClickToggle(event.currentTarget)}

export default function ToggleButton() {
  return (
    <ToggleContainerButton type="button">
      <ToggleText> MENU</ToggleText>
      <ToggleIconContainer>
        <Cross />
      </ToggleIconContainer>
    </ToggleContainerButton>
  );
}
