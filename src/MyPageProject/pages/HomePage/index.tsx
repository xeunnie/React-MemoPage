import { useState } from 'react';

import useTodo from 'src/hooks/myhooks/useTodo';
import useTodoList from 'src/hooks/myhooks/useTodoList';
import Input from 'src/MyPageProject/components/Items/Input';
import MultiFunctionButton from 'src/MyPageProject/components/Items/ListItem';
import Drawer from 'src/MyPageProject/components/Layout/Drawer';
import Head from 'src/MyPageProject/components/Layout/Head';

import { Background, BodyArea, ContentsArea, DrawerArea, InputContainer, ListContainer } from './styled';

export default function MyPage() {
  const useTodoHook = useTodo();
  const useTodoListingHook = useTodoList();

  const onClickAdd = () => {
    useTodoListingHook.addTodo(useTodoHook.todo);
    // console.log('addworking');
  };

  const [, setEditData] = useState(0);
  const onClickEdit = (selectedTodoIndex: number) => {
    setEditData(selectedTodoIndex);
    // editInput.open
  };

  return (
    <Background>
      <Head />
      <ContentsArea>
        <DrawerArea>
          <Drawer />
        </DrawerArea>
        <BodyArea>
          <InputContainer>
            <Input placeholder="Oh Happy Days" value={useTodoHook.todo} onClick={onClickAdd} />
          </InputContainer>
          <ListContainer>
            {useTodoListingHook.todoList.map((list, index) => (
              <MultiFunctionButton
                key={index}
                onClick={() => onClickEdit(index)}
                title={list.todo}
                category={useTodoHook.todo}
                onClickEdit={() => onClickEdit}
                onClickDelete={() => useTodoListingHook.deleteTodo(index)}
              />
            ))}
          </ListContainer>
        </BodyArea>
      </ContentsArea>
    </Background>
  );
}
