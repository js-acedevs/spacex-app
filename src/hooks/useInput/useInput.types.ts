// react
import { ChangeEvent, Dispatch, SetStateAction } from 'react';

export interface useInputReturnTypes {
  value: string;
  typing: boolean;
  handleSetTyping: Dispatch<SetStateAction<boolean>>;
  handleSetValue: Dispatch<SetStateAction<string>>;
  handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
