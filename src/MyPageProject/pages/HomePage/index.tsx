import { useState } from 'react';
import { Divider } from '@mui/material';

import useTodoList from 'src/hooks/myhooks/useTodoList';
import TodoBox from 'src/MyPageProject/components/Items/Box/TodoBox';
import StyledDialog from 'src/MyPageProject/components/Items/Dialog';
import AddInput from 'src/MyPageProject/components/Items/Inputs/AddInput';
import SearchInput from 'src/MyPageProject/components/Items/Inputs/SearchInput';
import ContentsTitle from 'src/MyPageProject/components/Layout/ContentsTitle';
// import Drawer from 'src/MyPageProject/components/Layout/Drawer';
import MiniDrawer from 'src/MyPageProject/components/Layout/Drawer/MiniDrawer';
import Head from 'src/MyPageProject/components/Layout/Head';

import {
  Background,
  BoardBox,
  BoardContainer,
  BoardTitle,
  BoardTitleSearch,
  BoardTitleText,
  BodyArea,
  ContentsArea,
  ContentsContainer,
  DrawerArea,
  InputContainer,
  ListContainer,
  PendingContainer,
  TodoContainer,
} from './styled';

export default function HomePage() {
  const useTodoListingHook = useTodoList();

  const [todo, setTodo] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.currentTarget.value);
  };

  const onClickAdd = () => {
    useTodoListingHook.addTodo(todo);
    // console.log('addworking');
  };

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Background>
      <DrawerArea>
        <MiniDrawer />
      </DrawerArea>
      <Divider orientation="vertical" color="#304552" />
      <Divider orientation="horizontal" color="#304552" />
      <Head />
      <ContentsArea>
        <BodyArea>
          <ContentsTitle title="Todo List" />
          <Divider orientation="horizontal" color="#304552" />
          <ContentsContainer>
            <TodoContainer>
              <InputContainer>
                <AddInput placeholder="Oh Happy Days" value={todo} onClick={onClickAdd} onChange={onChange} />
              </InputContainer>
              <ListContainer>
                {useTodoListingHook.todoList.map((list, index) => (
                  <TodoBox key={index} text={list.todo} onClickDelete={() => useTodoListingHook.deleteTodo(index)} onClickEdit={handleClickOpen} />
                ))}
              </ListContainer>
              {open && <StyledDialog text="Edit Todo" onClickOpen={open} onClickClose={handleClose} onClickSave={handleClose} />}
            </TodoContainer>
            <PendingContainer>
              <BoardContainer>
                <BoardTitle>
                  <BoardTitleText>Finished List</BoardTitleText>
                  <BoardTitleSearch>
                    <SearchInput onClick={onClickAdd} />
                  </BoardTitleSearch>
                </BoardTitle>
                <Divider orientation="horizontal" color="#9ba2eb" />
                <BoardBox />
              </BoardContainer>
              <BoardContainer>
                <BoardTitle>
                  <BoardTitleText>Old List</BoardTitleText>
                  <BoardTitleSearch>
                    <SearchInput onClick={onClickAdd} />
                  </BoardTitleSearch>
                </BoardTitle>
                <Divider orientation="horizontal" color="#9ba2eb" />
                <BoardBox />
              </BoardContainer>
            </PendingContainer>{' '}
          </ContentsContainer>
        </BodyArea>
      </ContentsArea>
    </Background>
  );
}
