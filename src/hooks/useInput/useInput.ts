// react
import { ChangeEvent, useState } from 'react';

// types
import { useInputReturnTypes } from './useInput.types';

export const useInput = (): useInputReturnTypes => {
  // local state
  const [value, setValue] = useState<string>('');
  const [typing, setTyping] = useState<boolean>(false);

  // handlers
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value.trim());
    !typing && setTyping(!typing);
  };

  return { value, typing, handleOnChange, handleSetValue: setValue, handleSetTyping: setTyping };
};
