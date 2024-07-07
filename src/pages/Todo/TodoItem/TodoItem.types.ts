import { Todo } from "../../../types/Todo";

export interface TodoItemProps {
    todo: Todo;
    index: number;
  }

export  interface TodoItemViewProps {
    todo: Todo;
    onToggleTodo: () => void;
    onRemoveTodo: () => void;
    onMarkCompleted: () => void;
    onMarkIncomplete: () => void;
  }