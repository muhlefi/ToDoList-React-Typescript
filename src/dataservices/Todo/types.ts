import { Todo } from "../../types/Todo";

export interface TodoState {
    todos: Todo[];
    filter: string;
    searchTerm: string;
  }