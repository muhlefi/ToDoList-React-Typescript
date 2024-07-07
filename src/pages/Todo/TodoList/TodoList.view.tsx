import { FC, memo } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { Box, Em } from '@radix-ui/themes';
import { TodoListViewProps } from './TodoList.types';



const TodoListView: FC<TodoListViewProps> = ({ filteredTodos }) => (
    <Box className='flex flex-col'>
      <Box my='2' className="text-sm">
        <Em>All Your Notes Here...</Em>
      </Box>
      {filteredTodos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </Box>
  );

export default memo(TodoListView);
