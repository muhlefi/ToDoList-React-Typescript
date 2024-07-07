import { createAction } from '@reduxjs/toolkit';

export const addTodo = createAction<string>('ADD_TODO');
export const toggleTodo = createAction<number>('TOGGLE_TODO');
export const removeTodo = createAction<number>('REMOVE_TODO');
export const markCompleted = createAction<number>('MARK_COMPLETED');
export const markIncomplete = createAction<number>('MARK_INCOMPLETE');
export const filterTodos = createAction<string>('FILTER_TODOS');
export const markAllCompleted = createAction('MARK_ALL_COMPLETED');
export const updateSearchTerm = createAction<string>('UPDATE_SEARCH_TERM');
