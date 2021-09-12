import { createContext } from 'react';
import { IAuthContext } from '../types/types';

export const authContext = createContext<IAuthContext>({} as IAuthContext);
