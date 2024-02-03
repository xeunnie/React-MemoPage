import { ButtonContainer, DeleteIcon, EditIcon, IconBundle, TextContainer, Title } from './styled';

type TodoBoxProps = {
  onClickDelete: () => void;
  onClickEdit: () => void;
  text: string;
  // category: string;
};

export default function TodoBox({ onClickDelete, onClickEdit, text }: TodoBoxProps) {
  return (
    <ButtonContainer>
      <TextContainer>
        <Title>{text}</Title>
        {/* <Category>{category}</Category> */}
      </TextContainer>
      <IconBundle onClick={onClickEdit}>
        <EditIcon />
      </IconBundle>
      <IconBundle onClick={onClickDelete}>
        <DeleteIcon />
      </IconBundle>
    </ButtonContainer>
  );
}
