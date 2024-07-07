import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoState } from './types';
import { Todo } from '../../types/Todo';
import { saveState, loadState } from '../localStorage';

import {
  addTodo,
  toggleTodo,
  removeTodo,
  markCompleted,
  markIncomplete,
  filterTodos,
  markAllCompleted,
  updateSearchTerm
} from './actions';

// Function to load state from localStorage
const initialState: TodoState = loadState() ?? {
  todos: [],
  filter: 'ALL',
  searchTerm: '',
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addTodo, (state, action: PayloadAction<string>) => {
        const newTodo: Todo = { text: action.payload, completed: false };
        state.todos.push(newTodo);
        saveState(state);
      })
      .addCase(toggleTodo, (state, action: PayloadAction<number>) => {
        const todo = state.todos[action.payload];
        if (todo) {
          todo.completed = !todo.completed;
          saveState(state);
        }
      })
      .addCase(removeTodo, (state, action: PayloadAction<number>) => {
        state.todos.splice(action.payload, 1);
        saveState(state);
      })
      .addCase(markCompleted, (state, action: PayloadAction<number>) => {
        const todo = state.todos[action.payload];
        if (todo) {
          todo.completed = true;
          saveState(state);
        }
      })
      .addCase(markIncomplete, (state, action: PayloadAction<number>) => {
        const todo = state.todos[action.payload];
        if (todo) {
          todo.completed = false;
          saveState(state);
        }
      })
      .addCase(filterTodos, (state, action: PayloadAction<string>) => {
        state.filter = action.payload;
        saveState(state);
      })
      .addCase(markAllCompleted, (state) => {
        state.todos.forEach((todo) => {
          todo.completed = true;
        });
        saveState(state);
      })
      .addCase(updateSearchTerm, (state, action: PayloadAction<string>) => {
        state.searchTerm = action.payload;
        saveState(state);
      });
  },
});

export default todoSlice.reducer;
