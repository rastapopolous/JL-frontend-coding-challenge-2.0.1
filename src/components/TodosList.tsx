
import { useTodos } from "@/hooks/useTodos";
import  { Todo } from "../lib/todos-lib";
import TodoEl from "./TodoEl";
// const checkCircle = 

const TodoList  = () => {

  const { todos } = useTodos();

  return (
    <div>
      {todos.map((oneTodo: Todo) => {
        return(
          <>
            <TodoEl
              key={oneTodo.id} 
              oneTodo={oneTodo}
            />
            <div className="border border-stone-100"/>
          </>
        )
      })}
    </div>
  )
}

export default TodoList;