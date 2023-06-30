import { HiOutlineClipboardDocumentCheck as Icon } from "react-icons/hi2";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodosList";
import { useTodos } from "@/hooks/useTodos";
import { Todo } from "@/lib/todos-lib";


const Header = () => (
  <header className="flex flex-row items-center space-x-2">
    <Icon className="h-10 w-10" />
    <h1 className="font-serif text-3xl font-medium">To-Do List</h1>
  </header>
);

const TodosHome = () => {
  const { todos } = useTodos();
  const undoneTodos: Todo[] = todos.filter(todo => todo.completed === false);
  const doneTodos: Todo[] = todos.filter(todo => todo.completed === true);
  
  return (
    <div className="space-y-6">
      <Header />
      <NewTodoForm />
      <TodoList 
        listTitle={'Incomplete'}
        todoArray={undoneTodos}
      />
      <TodoList
         listTitle={'Complete'}
         todoArray={doneTodos}
      />
    </div>
  );
};

export default TodosHome;
 