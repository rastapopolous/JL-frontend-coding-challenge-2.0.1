import  { Todo } from "../lib/todos-lib";
import { HiCheck } from "react-icons/hi2";
import { IconContext } from "react-icons";

const TodoEl = (props: Todo) => {
  const { oneTodo: {
    id,
    title,
    completed,
    priority
  }} = props;
  console.log('Completed? :', completed);
  return (
    <div className="flex flex-row justify-start items-center h-20">
      {  completed === false ?
        <div className="w-8 h-8  mr-2 rounded-full border-2 border-stone-300"/>
        :
        <div className="w-8 h-8 flex justify-center items-center mr-2 rounded-full  bg-green-600">
          {/* <HiCheck color ="white" size="1.25rem" /> */}
          <HiCheck color="white" size="1.25rem"/>
        </div>
      }
      {title}

    </div>
  );
};

export default TodoEl;