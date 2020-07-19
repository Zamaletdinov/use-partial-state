[![View on NPM](http://img.shields.io/npm/v/use-partial-state.svg)](https://www.npmjs.com/package/use-partial-state)
[![Build Status](https://travis-ci.com/Zamaletdinov/use-partial-state.svg?branch=master)](https://travis-ci.com/Zamaletdinov/use-partial-state)
[![Dependencies Status](https://david-dm.org/Zamaletdinov/use-partial-state/status.svg)](https://david-dm.org/Zamaletdinov/use-partial-state)

# use-partial-state

This library was built on top of React's useState hook that allows to ease partial state updates

## Usage

```ts
import { usePartialState } from 'use-partial-state';

type ComplexObject = { index: number; value: string };
const initialValue: ComplexObject = { index: 1, value: 'initial value' };
const newValue: ComplexObject = { index: 2, value: 'new value' };
const partialUpdate: Partial<ComplexObject> = { value: 'updated value' };

const [complexObject, setComplexObject, updateComplexObject] = usePartialState<ComplexObject>(initialValue);
console.log(complexObject);
// { index: 1, value: 'initial value' }

setComplexObject(newValue);
console.log(complexObject);
// { index: 2, value: 'new value' }

updateComplexObject(partialUpdate);
console.log(complexObject);
// { index: 2, value: 'updated value' }
```

If the `initialValue` or previous state is undefined then partial update value will be used as final one:

```ts
import { usePartialState } from 'use-partial-state';

type ComplexObject = { index: number; value: string };
const partialUpdate: Partial<ComplexObject> = { value: 'updated value' };

const [complexObject, setComplexObject, updateComplexObject] = usePartialState<ComplexObject>();

updateComplexObject(partialUpdate);
console.log(complexObject);
// { value: 'updated value' }
```
