import { useState } from 'react';

import useTodoList from 'src/hooks/myhooks/useTodoList';
import MultiFunctionButton from 'src/MyPageProject/components/Items/Box/TodoBox';
import AddInput from 'src/MyPageProject/components/Items/Inputs/AddInput';
import SearchInput from 'src/MyPageProject/components/Items/Inputs/SearchInput';
import ContentsTitle from 'src/MyPageProject/components/Layout/ContentsTitle';
import Drawer from 'src/MyPageProject/components/Layout/Drawer';
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

  const [, setEditData] = useState(0);
  const onClickEdit = (selectedTodoIndex: number) => {
    setEditData(selectedTodoIndex);
    // editInput.open
  };

  return (
    <Background>
      <Head isActive={false} />
      <ContentsArea>
        <DrawerArea>
          <Drawer />
        </DrawerArea>
        <BodyArea>
          <ContentsContainer>
            <ContentsTitle title="Todo List" />
            <InputContainer>
              <AddInput placeholder="Oh Happy Days" value={todo} onClick={onClickAdd} onChange={onChange} />
            </InputContainer>
            <ListContainer>
              {useTodoListingHook.todoList.map((list, index) => (
                <MultiFunctionButton
                  key={index}
                  onClick={() => onClickEdit(index)}
                  title={list.todo}
                  onClickEdit={() => onClickEdit}
                  onClickDelete={() => useTodoListingHook.deleteTodo(index)}
                />
              ))}
            </ListContainer>
          </ContentsContainer>
          <PendingContainer>
            <BoardContainer>
              <BoardTitle>
                <BoardTitleText>Finished List</BoardTitleText>
                <BoardTitleSearch>
                  <SearchInput onClick={onClickAdd} />
                </BoardTitleSearch>
              </BoardTitle>
              <BoardBox />
            </BoardContainer>
            <BoardContainer>
              <BoardTitle>
                <BoardTitleText>Old List</BoardTitleText>
                <BoardTitleSearch>
                  <SearchInput onClick={onClickAdd} />
                </BoardTitleSearch>
              </BoardTitle>
              <BoardBox />
            </BoardContainer>
          </PendingContainer>
        </BodyArea>
      </ContentsArea>
    </Background>
  );
}
