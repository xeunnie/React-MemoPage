import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AccountContainer from 'src/components/AccountContainer';
import Dialog from 'src/components/Dialog';
import MiddleHeader from 'src/components/MiddleHeader';
import SubmitButton from 'src/components/SubmitButton';
import TopHeader from 'src/components/TopHeader';
import useAccount from 'src/hooks/useAccount';
import useDialog from 'src/hooks/useDialog';

import styles from './index.module.scss';

export default function AccountManage() {
  const navigate = useNavigate();
  const user = useAccount();
  const dialog = useDialog();
  const [selectedIdx, setEditData] = useState(0);

  const onClickEdit = (selectedindex: number) => {
    setEditData(selectedindex);
    dialog.onOpen();
  };

  return (
    <div className={styles.background}>
      <div className={styles.scaffold}>
        <TopHeader />
        <MiddleHeader mainText="Account Management" onClick={() => navigate('/')} />
        <div className={styles.mainField}>
          <div className={styles.ListView}>
            {user.userList.map((e, index) => (
              <AccountContainer key={index} mainText={e.name} onClickEdit={() => onClickEdit(index)} onClickDelete={() => user.deleteMethod(index)} />
            ))}
          </div>
          <SubmitButton mainText="Create Account" />
        </div>
      </div>
      {dialog.isDialog && (
        <Dialog
          mainText="Rename account"
          accountName={user.userList[selectedIdx].name}
          onCancel={dialog.onClose}
          callback={(username) => user.editMethod(username, selectedIdx)}
          ref={dialog.dialogRef}
        />
      )}
    </div>
  );
}
