import { FC, memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reduxtoolkit/store';
import { addTodo, updateSearchTerm } from '../../dataservices/Todo/actions';
import TodoView from './Todo.view';

const Todo: FC = () => {
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState('');
  const searchTerm = useSelector((state: RootState) => state.todos.searchTerm);

  const handleAddTodo = (text: string) => {
    dispatch(addTodo(text));
  };

  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== '') {
      handleAddTodo(newTodoText.trim());
      setNewTodoText('');
    }
  };

  const handleSearchChange = (value: string) => {
    dispatch(updateSearchTerm(value));
  };

  return (
    <TodoView
      newTodoText={newTodoText}
      searchTerm={searchTerm}
      setNewTodoText={setNewTodoText}
      handleAddTodoClick={handleAddTodoClick}
      handleSearchChange={handleSearchChange}
    />
  );
};

export default memo(Todo);
