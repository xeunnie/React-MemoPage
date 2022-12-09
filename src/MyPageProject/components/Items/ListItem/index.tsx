import { ButtonContainer, IconBundle, TextContainer, Title } from './styled';

import { ReactComponent as Delete } from 'src/assets/svg/Delete.svg';
import { ReactComponent as Edit } from 'src/assets/svg/Edit.svg';

type MultiFunctionButtonProps = {
  onClick: () => void;
  onClickEdit: () => void;
  onClickDelete: () => void;
  title: string;
  // category: string;
};

export default function MultiFunctionButton({ onClick, onClickDelete, onClickEdit, title }: MultiFunctionButtonProps) {
  return (
    <ButtonContainer type="button" onClick={onClick}>
      <TextContainer>
        <Title>{title}</Title>
        {/* <Category>{category}</Category> */}
      </TextContainer>
      <IconBundle>
        <Edit onClick={onClickEdit} />
        <Delete onClick={onClickDelete} />
      </IconBundle>
    </ButtonContainer>
  );
}
