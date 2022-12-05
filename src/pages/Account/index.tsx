import { useNavigate } from 'react-router-dom';

import MiddleHeader from 'src/components/MiddleHeader';
import SubmitButton from 'src/components/SubmitButton';
import TopHeader from 'src/components/TopHeader';
import useAccount from 'src/hooks/useAccount';
import useInput from 'src/hooks/useInput';

import { ReactComponent as Setting } from 'src/assets/svg/Setting.svg';

import styles from './index.module.scss';

export default function Account() {
  const navigate = useNavigate();
  const userInput = useInput();
  const user = useAccount();

  const onClickAdd = () => {
    user.addMethod(userInput.userName);
    navigate('/');
  };

  return (
    <div className={styles.background}>
      <div className={styles.scaffold}>
        <TopHeader />
        <MiddleHeader mainText="Connect Ledger" onClick={() => navigate('/')} />
        <div className={styles.mainField}>
          <input type="text" className={styles.inputBox} placeholder="Account Name" value={userInput.userName} onChange={userInput.onChange} />
          <div className={styles.footerField}>
            <div className={styles.rowBox}>
              Need help? Contact
              <button type="button" className={styles.textButton}>
                Cosmostaion Support
              </button>
            </div>
            <button type="button" className={styles.footerBoxButton}>
              <div className={styles.footerBoxContainer}>
                <Setting />
                HD path setting
              </div>
            </button>
            <SubmitButton mainText="Connect" onClick={onClickAdd} disabled={userInput.userName === ''} />
          </div>
        </div>
      </div>
    </div>
  );
}
