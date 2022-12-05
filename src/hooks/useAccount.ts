import { useState } from 'react';

type UserDataSetModel = { name: string };
export default function useAccount() {
  const fetchedData = window.localStorage.getItem('account');
  const [userList, setUserList] = useState(fetchedData ? (JSON.parse(fetchedData) as UserDataSetModel[]) : []);

  const addMethod = (inputName: string) => {
    const userInputTextData = { name: inputName };
    const copiedList = [...userList];
    copiedList.push(userInputTextData);
    setUserList(copiedList);
    window.localStorage.setItem('account', JSON.stringify(copiedList));
  };

  const deleteMethod = (selectedindex: number) => {
    const copiedList = [...userList];
    const filteredList = copiedList.filter((_, index) => index !== selectedindex);
    setUserList(filteredList);
    window.localStorage.setItem('account', JSON.stringify(userList));
  };

  const editMethod = (inputEditName: string, selectedindex: number) => {
    const userInputTextData = { name: inputEditName };
    const copiedList = [...userList];
    copiedList.splice(selectedindex, 1, userInputTextData);
    setUserList(copiedList);
    window.localStorage.setItem('account', JSON.stringify(userList));
  };

  return { userList, addMethod, deleteMethod, editMethod };
}
