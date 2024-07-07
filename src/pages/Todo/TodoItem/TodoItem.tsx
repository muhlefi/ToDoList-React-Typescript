import { FC, memo } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo, markCompleted, markIncomplete } from '../../../dataservices/Todo/actions';
import TodoItemView from './TodoItem.view';
import { TodoItemProps } from './TodoItem.types';

const TodoItem: FC<TodoItemProps> = ({ index, todo }) => {
  const dispatch = useDispatch();

  const handleToggleTodo = () => {
    dispatch(toggleTodo(index));
  };

  const handleRemoveTodo = () => {
    if (window.confirm('Are you sure you want to delete this todo?')) {
      dispatch(removeTodo(index));
    }
  };

  const handleMarkCompleted = () => {
    dispatch(markCompleted(index));
  };

  const handleMarkIncomplete = () => {
    dispatch(markIncomplete(index));
  };

  return (
    <TodoItemView
      todo={todo}
      onToggleTodo={handleToggleTodo}
      onRemoveTodo={handleRemoveTodo}
      onMarkCompleted={handleMarkCompleted}
      onMarkIncomplete={handleMarkIncomplete}
    />
  );
};

export default memo(TodoItem);
