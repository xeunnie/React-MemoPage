import { useState } from 'react';

import useTodoList from 'src/hooks/myhooks/useTodoList';
import MultiFunctionButton from 'src/MyPageProject/components/Items/Box/TodoBox';
import Input from 'src/MyPageProject/components/Items/Inputs/AddInput';
import SearchInput from 'src/MyPageProject/components/Items/Inputs/SearchInput';
import ContentsTitle from 'src/MyPageProject/components/Layout/ContentsTitle';
import Drawer from 'src/MyPageProject/components/Layout/Drawer';
import Head from 'src/MyPageProject/components/Layout/Head';

import {
  Background,
  BoardContainer,
  BodyArea,
  ContentsArea,
  ContentsContainer,
  DrawerArea,
  InputContainer,
  ListContainer,
  PendingContainer,
  SubList,
  SubTitle,
  SubTitleText,
} from './styled';

export default function MEMO() {
  const useTodoListingHook = useTodoList();

  const [todo, setTodo] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.currentTarget.value);
  };

  const onClickAdd = () => {
    useTodoListingHook.addTodo(todo);
    // console.log('addworking');
  };

  // const [, setEditData] = useState(0);
  // const onClickEdit = (selectedTodoIndex: number) => {
  //   setEditData(selectedTodoIndex);
  //   // editInput.open
  // };

  return (
    <Background>
      <Head />
      <ContentsArea>
        <DrawerArea>
          <Drawer />
        </DrawerArea>
        <BodyArea>
          <ContentsContainer>
            <ContentsTitle title="MEMO" />
            <InputContainer>
              <Input placeholder="Oh Happy Days" value={todo} onClick={onClickAdd} onChange={onChange} />
            </InputContainer>

            <ListContainer>
              <SubTitle>
                <SubTitleText>Recent MEMO</SubTitleText>
                <SearchInput onClick={onClickAdd} />
              </SubTitle>
              {useTodoListingHook.todoList.map((list, index) => (
                <MultiFunctionButton key={index} text={list.todo} onClickDelete={() => useTodoListingHook.deleteTodo(index)} onClickEdit={onClickAdd} />
              ))}
            </ListContainer>
          </ContentsContainer>
          <PendingContainer>
            <BoardContainer>
              <SubTitle>
                <SubTitleText>Important MEMO</SubTitleText>
                <SearchInput onClick={onClickAdd} />
              </SubTitle>
              <SubList />
            </BoardContainer>
            <BoardContainer>
              <SubTitle>
                <SubTitleText>Old MEMO</SubTitleText>
                <SearchInput onClick={onClickAdd} />
              </SubTitle>
              <SubList />
            </BoardContainer>
            <BoardContainer>
              <SubTitle>
                <SubTitleText>Saved MEMO</SubTitleText>
                <SearchInput onClick={onClickAdd} />
              </SubTitle>
              <SubList />
            </BoardContainer>
          </PendingContainer>
        </BodyArea>
      </ContentsArea>
    </Background>
  );
}
