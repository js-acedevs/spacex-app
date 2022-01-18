// react
import { FC, ReactElement } from 'react';

// types
import { IfProps } from './Condition.types';

export const If: FC<IfProps> = ({ children, condition }): ReactElement | null =>
  condition ? <>{children}</> : null;
