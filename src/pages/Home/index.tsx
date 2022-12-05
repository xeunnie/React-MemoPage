import { useNavigate } from 'react-router-dom';

import MainContainer from 'src/components/MainContainer';
import MiddleHeader from 'src/components/MiddleHeader';
import TopHeader from 'src/components/TopHeader';

import styles from './index.module.scss';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className={styles.background}>
      <div className={styles.scaffold}>
        <TopHeader />
        <MiddleHeader mainText="Create Account" />
        <div className={styles.mainField}>
          <MainContainer mainText="Create a new account" onClick={() => navigate('/account')} />
          <MainContainer mainText="Important mnemonic" onClick={() => navigate('/accountmanage')} />
          <MainContainer mainText="Import private key" />
          <MainContainer mainText="Connect ledger" />
        </div>
      </div>
    </div>
  );
}
