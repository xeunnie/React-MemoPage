import IconButton from 'src/components/IconButton';

import { ReactComponent as Delete } from 'src/assets/svg/Delete.svg';
import { ReactComponent as Edit } from 'src/assets/svg/Edit.svg';

import styles from './index.module.scss';

type AccountContainerProps = {
  mainText: string;
  onClickEdit: () => void;
  onClickDelete: () => void;
};
export default function AccountContainer({ mainText, onClickEdit, onClickDelete }: AccountContainerProps) {
  return (
    <div className={styles.container}>
      {mainText}
      <div className={styles.iconContainer}>
        <IconButton onClick={onClickEdit}>
          <Edit />
        </IconButton>
        <IconButton onClick={onClickDelete}>
          <Delete />
        </IconButton>
      </div>
    </div>
  );
}
