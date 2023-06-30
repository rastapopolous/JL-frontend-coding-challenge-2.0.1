import { createContext } from 'react';

type errorContextTypes = {
  contextDisplayErrorMsg: boolean;
  contextToggleDisplayError: (value: boolean) => void;
};

const ErrorContext = createContext<errorContextTypes>({
  contextDisplayErrorMsg: false,
  contextToggleDisplayError: () => {},
});

export default ErrorContext;