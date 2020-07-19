import { Dispatch, SetStateAction, useCallback, useState } from 'react';

/**
 * Returns a stateful value, and a functions to set and update it.
 */
export function usePartialState<S>(initialValue: S): [S, Dispatch<SetStateAction<S>>, (updated: Partial<S>) => void];
export function usePartialState<S = undefined>(
  initialValue?: S
): [S | undefined, Dispatch<SetStateAction<S | undefined>>, (updated: Partial<S>) => void];
export function usePartialState<S>(
  initialValue?: S
): [S | undefined, Dispatch<SetStateAction<S | undefined>>, (updated: Partial<S>) => void] {
  const [state, setState] = useState(initialValue);

  const partialSetState = useCallback((updated: Partial<S>) => {
    setState(prev => {
      return prev ? { ...prev, ...updated } : ({ ...updated } as S);
    });
  }, []);

  return [state, setState, partialSetState];
}
