export interface Todo {
    text: string;
    completed: boolean;
  }
  
  export interface TodoItemProps {
    index: number;
    todo: Todo;
  }
  
  export interface TodoViewProps {
    newTodoText: string;
    searchTerm: string;
    setNewTodoText: (value: string) => void;
    handleAddTodoClick: () => void;
    handleSearchChange: (value: string) => void;
  }
  