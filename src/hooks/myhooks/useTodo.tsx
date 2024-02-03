import { useState } from 'react';

export default function useTodo() {
  const [todo, setTodo] = useState('');
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.currentTarget.value);
  };
  return { todo, onChange };
}
