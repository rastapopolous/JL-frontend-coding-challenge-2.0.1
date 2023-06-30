import { useContext } from 'react';
import ErrorContext from './errorContext';

const ErrorAlert = () => {
  const { contextDisplayErrorMsg, contextToggleDisplayError } = useContext(ErrorContext);

  return (
    <div>
    { contextDisplayErrorMsg === true &&
      <div className="h-16 flex flex-row justify-between items-center pl-5 pr-5 border-1 border-red-200 rounded-xl font-bold text-xl text-red-400 bg-red-100 border-red-150">
          <div className="">{'Oops there was a problem!'}</div>
          <div className="text-[2.25rem] font-normal hover:cursor-pointer"
            onClick={()=>contextToggleDisplayError(false)}> 
            &#215;
          </div>
      </div>
    }
    </div>
  );
};

export default ErrorAlert;