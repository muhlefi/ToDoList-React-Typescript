import { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import TodoListView from './TodoList.view';
import { RootState } from '../../../reduxtoolkit/store';
import { selectFilteredAndSearchedTodos } from '../../../dataservices/Todo/selectors';

const TodoList: FC = () => {
  const filteredTodos = useSelector((state: RootState) => selectFilteredAndSearchedTodos(state));

  console.log('Filtered Todos:', filteredTodos);

  return <TodoListView filteredTodos={filteredTodos} />;
};

export default memo(TodoList);
