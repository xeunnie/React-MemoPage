import { ReactComponent as RightStroke } from 'src/assets/svg/RightStroke.svg';

import styles from './index.module.scss';

type MainContainerProps = {
  mainText: string;
  onClick?: () => void;
};
export default function MainContainer({ mainText, onClick }: MainContainerProps) {
  return (
    <button type="button" className={styles.buttonStyle} onClick={onClick}>
      <div className={styles.boxButton}>
        <div className={styles.boxText}>{mainText}</div>
        <div className={styles.boxIcon}>
          <RightStroke />
        </div>
      </div>
    </button>
  );
}
