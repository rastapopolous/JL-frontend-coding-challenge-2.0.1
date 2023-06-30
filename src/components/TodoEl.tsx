import  { Todo } from "../lib/todos-lib";
import { HiCheck, HiOutlineTrash } from "react-icons/hi2";
import { useTodos } from "@/hooks/useTodos";
import { useState } from 'react';
import { requestUpdateTodo, requestDeleteTodo} from '../lib/todos-lib';
import { deleteTodo } from "@/mocks/db/todos";


type todoElProps = {
  index: number, 
  oneTodo: Todo
};
type toggleDoDone = (completed: boolean) => void;
type deleteTodo = (id: string) => void;

console.log('Rerendering me!')
const TodoEl = (props: todoElProps) => {
  const {
    index, 
    oneTodo: {
      id,
      title,
      completed,
      priority
    }
  } = props;


  const { todos, mutate } = useTodos();
 
  const toggleDoDone = async(doDone: boolean) => {
    const toggleCompleted: boolean = !doDone;
    const updatedTodo: Todo = {...todos[index], completed: toggleCompleted}
    await requestUpdateTodo(updatedTodo);
    mutate();
  };
 
  const deleteTodo = async(id: string) => {
    await requestDeleteTodo(id);
    mutate();
  };

  return (
    <div>
        {/* This is the original outer white div h-20 */}
      <div className="h-20 flex justify-center items-center" >
        
        {/* this is the inner div gray on hover*/}
        {/* it needs to flex justify children at both ends and matching border radius w outer input div */}
        {/* hover is slightly lighter gray than the input one */}
        <div className= "h-[85%] w-[100%] flex flex-row justify-between items-center rounded-xl text-white hover:bg-stone-50 hover:text-stone-300 hover:cursor-pointer">
          
          {/* this is the div countainer that holds checkbox & name  */}
          <div className=" flex flex-row justify-between items-center pl-[1.5%] font-medium" 
               onClick={()=>toggleDoDone(completed)}
          >
            { completed === false ?
              <div 
                className="w-7 h-7  mr-2 rounded-full border-2 border-stone-300"
              />
              :
              <div className="w-7 h-7 flex justify-center items-center mr-2 rounded-full  bg-green-600"
              >
                {completed === true && <HiCheck color="white" size="1.25rem"/>}
              </div>
            }
            <div className="text-stone-800">
              {title}
            </div>  
          </div>
          <div className="w-[5%] hover:text-red-600"
               onClick={()=>deleteTodo(id)}
          >
            <HiOutlineTrash size="1.75rem" />
          </div> 
        </div>

        
      </div> 
      <div className="w-[96%] ml-[2%] border border-stone-100"/>
    </div>
  );
};

export default TodoEl;