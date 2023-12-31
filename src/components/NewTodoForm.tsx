import { useState} from 'react';
import { requestCreateTodo } from '../lib/todos-lib';
import { useContext } from 'react';
import ErrorContext from './errorContext';

type handleChange  = (e: React.ChangeEvent<HTMLInputElement>) => void;
type handleSubmit = (toDoInput: string) => void;

const NewTodoForm = () => {

  const { contextDisplayErrorMsg, contextToggleDisplayError } = useContext(ErrorContext);
  const [toDoInput, updateToDoInput] = useState<string>('');

  const handleChange: handleChange = e => {
    updateToDoInput(e.target.value);
  };

  const handleSubmit = (newTitle: string) => {
    if (newTitle.includes('mock-error')) {
      contextToggleDisplayError(true);
    } 
      else {
        requestCreateTodo({title: newTitle});
        contextToggleDisplayError(false);
      };
  };
  
  const emptyInput: boolean = toDoInput === '' ? true : false;

  return (
    <form className="flex flex-col space-y-2 rounded-xl border border-stone-200 bg-stone-50 p-4 sm:flex-row sm:space-x-2 sm:space-y-0">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Add a task"
          value={ toDoInput }
          onChange={ handleChange }
          className="w-full rounded border border-stone-200 bg-white px-4 py-3 text-base transition-opacity focus:border-red-300 focus:ring-1 focus:ring-red-300 focus-visible:outline-none disabled:opacity-50"
        />
      </div>
      <button
        type="submit"
        onClick={()=>handleSubmit(toDoInput) }
        disabled={ emptyInput }
        className="min-w-[128px] rounded border border-red-600 bg-red-500 px-2 text-base font-medium leading-10 text-white hover:bg-red-600 focus-visible:outline-2  focus-visible:outline-offset-4 focus-visible:outline-blue-300 disabled:border-transparent disabled:bg-gray-200"
      >
        Add
      </button>
    </form>
  );
};

export default NewTodoForm;
