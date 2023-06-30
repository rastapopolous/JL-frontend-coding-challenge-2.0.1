import { HiOutlineClipboardDocumentCheck as Icon } from "react-icons/hi2";
import NewTodoForm from "./NewTodoForm";
import TodosList from "./TodosList";
import ErrorAlert from "./ErrorAlert"
import { useTodos } from "@/hooks/useTodos";
import { Todo } from "@/lib/todos-lib";
import ErrorContext from "./errorContext";
import { useState } from 'react';


const Header = () => (
  <header className="flex flex-row items-center space-x-2">
    <Icon className="h-10 w-10" />
    <h1 className="font-serif text-3xl font-medium">To-Do List</h1>
  </header>
);

const TodosHome = ()=> {
  
  const { todos } = useTodos();
  
  const undoneTodos: Todo[] = todos.filter(todo => todo.completed === false);
  const doneTodos: Todo[] = todos.filter(todo => todo.completed === true);
  
  const [contextDisplayErrorMsg, contextToggleDisplayError ] =  useState<boolean>(false);
    
    return (
     //ErrorContext maintains state for error message between page reloads
      <ErrorContext.Provider
      value={{
        contextDisplayErrorMsg, 
        contextToggleDisplayError
      }}>

        <div className="space-y-6">
          <ErrorAlert />
          <Header />
          <NewTodoForm />
          <TodosList 
            listTitle={'Incomplete'}
            todoArray={undoneTodos}
          />
          <TodosList
            listTitle={'Complete'}
            todoArray={doneTodos}
          />
        </div>

      </ErrorContext.Provider>
    );
};

export default TodosHome;
 