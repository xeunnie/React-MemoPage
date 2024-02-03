import { useState } from 'react';

type TodoDataSetModel = { todo: string };
export default function useTodoData() {
  const fetchedData = window.localStorage.getItem('todo');
  const [todoList, setTodoList] = useState(fetchedData ? (JSON.parse(fetchedData) as TodoDataSetModel[]) : []);

  const addTodo = (inputTodo: string) => {
    const newTodoData = { todo: inputTodo };
    const oldTodoList = [...todoList];
    oldTodoList.push(newTodoData);
    setTodoList(oldTodoList);
    window.localStorage.setItem('todo', JSON.stringify(oldTodoList));
  };

  const deleteTodo = (selectedindex: number) => {
    const oldTodoList = [...todoList];
    const filteredList = oldTodoList.filter((_, index) => index !== selectedindex);
    setTodoList(filteredList);
    window.localStorage.setItem('todo', JSON.stringify(todoList));
  };

  const editTodo = (inputEditTodo: string, selectedindex: number) => {
    const newTodoData = { todo: inputEditTodo };
    const oldTodoList = [...todoList];
    oldTodoList.splice(selectedindex, 1, newTodoData);
    setTodoList(oldTodoList);
    window.localStorage.setItem('todo', JSON.stringify(todoList));
  };

  return { todoList, addTodo, deleteTodo, editTodo };
}
