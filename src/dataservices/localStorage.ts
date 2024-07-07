import { TodoState } from "./Todo/types";

// Function to save state to localStorage
export const saveState = (state: TodoState): void => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('todosState', serializedState);
    } catch (err) {
      console.error('Error saving state to localStorage:', err);
    }
  };
  
  // Function to load state from localStorage
  export const loadState = (): TodoState | undefined => {
    try {
      const serializedState = localStorage.getItem('todosState');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState) as TodoState;
    } catch (err) {
      console.error('Error loading state from localStorage:', err);
      return undefined;
    }
  };