import { useState } from 'react';

import useTodoList from 'src/hooks/myhooks/useTodoList';
import Input from 'src/MyPageProject/components/Items/Input';
import MultiFunctionButton from 'src/MyPageProject/components/Items/ListItem';
import Drawer from 'src/MyPageProject/components/Layout/Drawer';
import Head from 'src/MyPageProject/components/Layout/Head';

import { Background, BoardContainer, BodyArea, ContentsArea, ContentsContainer, DrawerArea, InputContainer, ListContainer, PendingContainer } from './styled';

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
            <InputContainer>
              <Input placeholder="Oh Happy Days" value={todo} onClick={onClickAdd} onChange={onChange} />
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
            <BoardContainer />
          </PendingContainer>
        </BodyArea>
      </ContentsArea>
    </Background>
  );
}
