import { FC, memo } from 'react';
import { FaToggleOn, FaToggleOff, FaTrash, FaCheck, FaTimes } from 'react-icons/fa';
import { Flex, Text, Button } from '@radix-ui/themes';
import { TodoItemViewProps } from './TodoItem.types';



const TodoItemView: FC<TodoItemViewProps> = ({ todo, onToggleTodo, onRemoveTodo, onMarkCompleted, onMarkIncomplete }) => (
    <Flex justify="between" py="2" gap="4" className="border-b-2">
      <Flex align="center">
        <Text size="3" className={`mr-4 ${todo.completed ? 'line-through text-gray-500' : 'text-gray-500'}`}>
          {todo.text}
        </Text>
      </Flex>
      <Flex gap="3">
        <Button size="3" color="blue" onClick={onToggleTodo}>
          {todo.completed ? <FaToggleOn color="white" /> : <FaToggleOff color="white" />}
        </Button>
        <Button size="3" color="red" onClick={onRemoveTodo}>
          <FaTrash color="white" />
        </Button>
        {!todo.completed && (
          <Button size="3" color="green" onClick={onMarkCompleted}>
            <FaCheck color="white" />
          </Button>
        )}
        {todo.completed && (
          <Button size="3" color="amber" onClick={onMarkIncomplete}>
            <FaTimes color="white" />
          </Button>
        )}
      </Flex>
    </Flex>
  );

export default memo(TodoItemView);
