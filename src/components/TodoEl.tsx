import  { Todo } from "../lib/todos-lib";
import { HiCheck } from "react-icons/hi2";
import { useTodos } from "@/hooks/useTodos";
import { useState } from 'react';
import { requestUpdateTodo} from '../lib/todos-lib';


type toDoElProps = {
  index: number, 
  oneTodo: Todo
}
type toggleDoDone = (completed: boolean) => void;

const TodoEl = (props: toDoElProps) => {
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
  console.log('ONETODO', todos[0]);
  
  const [completedStatus, toggleCompletedStatus] = useState<boolean>(false);


  const toggleDoDone = async(doDone: boolean) => {
    const toggleCompleted: boolean = !doDone;
    const updatedTodo: Todo = {...todos[index], completed: toggleCompleted}
    await requestUpdateTodo(updatedTodo);
    mutate();
    // mutate({ ...todos, todos[index]: updatedTodo });
  }
  // const styles = {
  //   {needTo: 'w-7 h-7  mr-2 rounded-full border-2 border-stone-300',
  //   didit: `w-8 h-8 flex justify-center items-center mr-2 rounded-full  bg-green-600`
  // }
 
  return (
    <div className= "flex flex-row justify-start items-center h-20 font-medium">
      {  completed === false ?
        <div 
          className="w-7 h-7  mr-2 rounded-full border-2 border-stone-300"
          onClick={()=>toggleDoDone(completed)}
        />
        :
        <div className="w-8 h-8 flex justify-center items-center mr-2 rounded-full  bg-green-600"
          onClick={()=>toggleDoDone(completed)}
        >
          {/* <HiCheck color ="white" size="1.25rem" /> */}
          {completed === true && <HiCheck color="white" size="1.25rem"/>}
        </div>
      }
      {title}

    </div>
  );
};

export default TodoEl;