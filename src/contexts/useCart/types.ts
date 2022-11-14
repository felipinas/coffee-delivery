import { ReactNode } from 'react';

import { CoffeeData } from '../../components/CoffeeCard/types';

export interface CartContextData {
  coffees: CoffeeData[];
}

export interface CartProviderProps {
  children: ReactNode;
}
