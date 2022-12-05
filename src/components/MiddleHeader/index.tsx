import { ReactComponent as LeftElipse } from 'src/assets/svg/LeftElipse.svg';

import styles from './index.module.scss';

type MiddleHeaderProps = {
  mainText: string;
  onClick?: () => void;
};
export default function MiddleHeader({ mainText, onClick }: MiddleHeaderProps) {
  return (
    <div className={styles.middleHeader}>
      <button type="button" className={styles.elipse} onClick={onClick}>
        <LeftElipse />
      </button>
      {mainText}
    </div>
  );
}
