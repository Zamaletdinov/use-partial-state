import { Dispatch, SetStateAction } from 'react';
/**
 * Returns a stateful value, and a functions to set and update it.
 */
export declare function usePartialState<S>(initialValue: S): [S, Dispatch<SetStateAction<S>>, (updated: Partial<S>) => void];
export declare function usePartialState<S = undefined>(initialValue?: S): [S | undefined, Dispatch<SetStateAction<S | undefined>>, (updated: Partial<S>) => void];
