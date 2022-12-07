import { useState } from 'react';
import { InputAdornment } from '@mui/material';

import AddButton from 'src/components/AddButton';

import MultiFunctionButton from './components/ListItem/index';
import { ContentsArea, InputContainer, ListContainer, StyledInput } from './contentsStyle';
import { Background, Header, Title } from './layoutStyle';
import useTodo from '../../hooks/myhooks/useTodo';
import useTodoList from '../../hooks/myhooks/useTodoList';

export default function MyPage() {
  const useTodoHook = useTodo();
  const useTodoListingHook = useTodoList();

  const onClickAdd = () => {
    useTodoListingHook.addTodo(useTodoHook.todo);
    console.log('addworking');
  };

  const [editData, setEditData] = useState(0);
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
