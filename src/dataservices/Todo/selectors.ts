// src/dataservices/Todo/selectors.ts
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../reduxtoolkit/store';
import { TodoState } from './types';

const selectTodoState = (state: RootState): TodoState => state.todos;

export const selectTodos = createSelector(
  selectTodoState,
  (state: TodoState) => state.todos
);

export const selectFilteredTodos = createSelector(
  selectTodoState,
  (state: TodoState) => {
    if (state.filter === 'ALL') {
      return state.todos;
    }
    return state.todos.filter(todo =>
      state.filter === 'COMPLETED' ? todo.completed : !todo.completed
    );
  }
);

export const selectSearchTerm = createSelector(
  selectTodoState,
  (state: TodoState) => state.searchTerm
);

export const selectFilteredAndSearchedTodos = createSelector(
  selectFilteredTodos,
  selectSearchTerm,
  (todos, searchTerm) => {
    if (!searchTerm) {
      return todos;
    }
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
);
