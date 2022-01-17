// react
import { FC, ReactElement } from 'react';

// types
import { TernaryProps } from './Condition.types';

export const Ternary: FC<TernaryProps> = ({ fallback, children, condition }): ReactElement =>
  condition ? <>{children}</> : <>{fallback}</>;
