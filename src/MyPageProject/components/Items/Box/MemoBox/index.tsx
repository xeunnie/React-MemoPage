import { ButtonContainer, IconBundle, MemoInfo, MemoInfoContainer } from './styled';

import { ReactComponent as Delete } from 'src/assets/svg/Delete.svg';
import { ReactComponent as Edit } from 'src/assets/svg/Edit.svg';

type MemoBoxProps = {

  onClickEdit: () => void;
  onClickDelete: () => void;
  titleInfo: string;
  date: string;
};

export default function MemoBox({ onClickDelete, onClickEdit, date, titleInfo }: MemoBoxProps) {
  return (
    <ButtonContainer >
      <MemoInfo>
        <MemoInfoContainer>
          {titleInfo} {date}
        </MemoInfoContainer>
        <IconBundle>
          <Edit type="button" onClick={onClickEdit} />
          <Delete onClick={onClickDelete} />
        </IconBundle>
      </MemoInfo>
    </ButtonContainer>
  );
}
