import React from 'react';
import { act, renderHook } from '@testing-library/react-hooks';

import { usePartialState } from '../src/index';

describe('usePartialState tests', () => {
  type CompexObject = { index: number; value: string };
  const initalObj: CompexObject = { index: 1, value: 'initial value' };

  it('check initialization', () => {
    const useStateMock = jest.spyOn(React, 'useState');
    const useCallbackMock = jest.spyOn(React, 'useCallback');
    renderHook(() => usePartialState<CompexObject>());

    expect(useStateMock).toHaveBeenCalledTimes(1);
    expect(useCallbackMock).toHaveBeenCalledTimes(1);

    useStateMock.mockRestore();
    useCallbackMock.mockRestore();
  });

  it('check setState', () => {
    const newObj: CompexObject = { index: 2, value: 'new value' };
    const { result } = renderHook(() => usePartialState(initalObj));

    expect(result.current[0]).toBe(initalObj);

    act(() => {
      result.current[1](newObj);
    });

    expect(result.current[0]).toBe(newObj);
  });

  describe('check partialSetState', () => {
    it('initial object is defined', () => {
      const newValue = 'update value';
      const expectedObj: CompexObject = { ...initalObj, value: newValue };
      const { result } = renderHook(() => usePartialState(initalObj));

      expect(result.current[0]).toBe(initalObj);

      act(() => {
        result.current[2]({ value: newValue });
      });

      expect(result.current[0]).toStrictEqual(expectedObj);
    });

    it('initial object is undefined', () => {
      const newValue = 'update value';
      const partialUpdate: Partial<CompexObject> = { value: newValue };
      const { result } = renderHook(() => usePartialState<CompexObject>());

      expect(result.current[0]).toBeUndefined();

      act(() => {
        result.current[2](partialUpdate);
      });

      expect(result.current[0]).toStrictEqual(partialUpdate);
    });
  });
});
