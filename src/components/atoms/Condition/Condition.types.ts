// react
import { ReactElement } from 'react';

// interfaces
export interface TernaryProps {
  condition: boolean;
  fallback?: ReactElement;
}

export interface IfProps {
  condition: boolean;
}
