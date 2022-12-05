import IconButton from 'src/components/IconButton';

import { ReactComponent as DashBoard } from 'src/assets/svg/DashBoard.svg';
import { ReactComponent as Hamburger } from 'src/assets/svg/Hamburger.svg';
import { ReactComponent as Stamper } from 'src/assets/svg/StamperLogo.svg';
import { ReactComponent as StamperText } from 'src/assets/svg/StamperText.svg';

import styles from './index.module.scss';

export default function TopHeader() {
  return (
    <div className={styles.topHeader}>
      <div className={styles.leftHeader}>
        <Stamper />
        <StamperText />
      </div>
      <div className={styles.rightHeader}>
        <IconButton>
          <DashBoard />
        </IconButton>
        <IconButton>
          <Hamburger />
        </IconButton>
      </div>
    </div>
  );
}
