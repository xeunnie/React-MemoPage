import React from 'react';

import IconButton from 'src/components/IconButton';
import useInput from 'src/hooks/useInput';

import { ReactComponent as Close } from 'src/assets/svg/Close.svg';

import styles from './index.module.scss';

type DialogProps = {
  mainText: string;
  accountName: string;
  onCancel: () => void;
  callback: (name: string) => void;
};

function Dialog({ mainText, accountName, onCancel, callback }: DialogProps, ref?: React.ForwardedRef<HTMLDivElement>) {
  const userInput = useInput();
  const onSubmit = () => {
    callback(userInput.userName);
    onCancel();
  };
  return (
    <div className={styles.background}>
      <div className={styles.dialogContainer} ref={ref}>
        <div className={styles.topHeader}>
          {mainText}
          <div className={styles.iconButton}>
            <IconButton onClick={onCancel}>
              <Close />
            </IconButton>
          </div>
        </div>
        <div className={styles.mainContainer}>
          <input type="text" className={styles.inputBox} value={userInput.userName} onChange={userInput.onChange} placeholder={accountName} />
          <button type="button" className={styles.footerSummitButton} disabled={userInput.userName === ''} onClick={onSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
const ExportDialog = React.forwardRef(Dialog);
export default ExportDialog;
