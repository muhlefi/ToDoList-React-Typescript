import { FC, memo } from "react";
import { Box, Heading, Flex, Button } from "@radix-ui/themes";
import { BsSearch, BsPlus } from "react-icons/bs";
import FilterButtonsView from "../Todo/FilterButtons/FilterButtons";
import TodoListView from "../Todo/TodoList/TodoList";

interface TodoViewProps {
  newTodoText: string;
  searchTerm: string;
  setNewTodoText: (value: string) => void;
  handleAddTodoClick: () => void;
  handleSearchChange: (value: string) => void;
}

const TodoView: FC<TodoViewProps> = ({ newTodoText, searchTerm, setNewTodoText, handleAddTodoClick, handleSearchChange }) => (
  <Box maxWidth="75%" mx="auto" mt="8" p="4" className="bg-gray-100 rounded">
    <Heading align="center" my="4">
      Todo List
    </Heading>
    <Flex align="center" mb="4">
      <input id="addTodoInput" className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" type="text" placeholder="Add Todo" value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)} />
      <Button ml="4" color="blue" className="hover:bg-blue-600 p-2" onClick={handleAddTodoClick}>
        <BsPlus color="white" size={20} />
      </Button>
    </Flex>

    <Flex justify="between" align="center">
      <FilterButtonsView />
      <Flex align="center" my="4">
        <input className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" type="text" placeholder="Search Todos" value={searchTerm} onChange={(e) => handleSearchChange(e.target.value)} />
        <Button ml="4" color="blue" className="hover:bg-blue-600 p-2">
          <BsSearch size={20} />
        </Button>
      </Flex>
    </Flex>

    <TodoListView />
  </Box>
);

export default memo(TodoView);
