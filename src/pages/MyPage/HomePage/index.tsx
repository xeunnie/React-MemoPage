import { useState } from 'react';
import { InputAdornment } from '@mui/material';

import AddButton from 'src/components/AddButton';
import useTodo from 'src/hooks/myhooks/useTodo';
import useTodoList from 'src/hooks/myhooks/useTodoList';

import MultiFunctionButton from './components/ListItem';
import { ContentsArea, InputContainer, ListContainer, StyledInput } from './contentsStyle';
import { Background, Header, Title } from './layoutStyle';

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
      <Header>
        <Title> Todo List </Title>
      </Header>
      <InputContainer>
        <StyledInput startAdornment={<InputAdornment position="start" />} placeholder="Happy Days" value={useTodoHook.todo} onChange={useTodoHook.onChange} />
        <AddButton onClickAdd={() => onClickAdd} click="Add" />
      </InputContainer>
      <ContentsArea>
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
      </ContentsArea>
    </Background>
  );
}
