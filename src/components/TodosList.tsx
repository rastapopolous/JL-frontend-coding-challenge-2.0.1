
import { useTodos } from "@/hooks/useTodos";
import  { Todo} from "../lib/todos-lib";
import TodoEl from "./TodoEl";

type todoListProps = {
  listTitle: string,
  todoArray: Todo[],
}

const TodosList  = (props: todoListProps) => {
  const {
    listTitle, 
    todoArray
  } =props;

  const numOfTodos: number = todoArray.length;
 

  return (
    <div>
      <div className=" h-20 flex flex-row justify-start items-center pl-[1.5%] font-semibold text-2xl text-stone-700" >
        {listTitle}
        <div className="w-9 h-9 flex justify-center items-center ml-4 rounded-full text-white font-semibold text-base bg-stone-700">
          {numOfTodos}
        </div>
      </div>
      <div className="w-[96%] ml-[2%] border border-stone-100"/>
      {todoArray.map((oneTodo: Todo, index: number) => {
        return ( 
            <TodoEl
              key={oneTodo.id} 
              oneTodo={oneTodo}
              index={index}
            />
        )
      })}
    </div>
  );
};

export default TodosList;