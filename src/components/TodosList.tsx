
import { useTodos } from "@/hooks/useTodos";
import  { Todo } from "../lib/todos-lib";
import TodoEl from "./TodoEl";

const TodoList  = () => {

  const { todos } = useTodos();

  return (
    <div>
      {todos.map((oneTodo: Todo, index: number) => {
        return( 
          <>
            <TodoEl
              key={oneTodo.id} 
              oneTodo={oneTodo}
              index={index}
            />
          </>
        )
      })}
    </div>
  )
}

export default TodoList;