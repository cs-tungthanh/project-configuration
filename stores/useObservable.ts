import { useEffect, useState } from 'react';
import Observable from './observable';

export function useObservable<T>(observable: Observable<T>) : T {
    const [val, setVal] = useState(observable.get());

    useEffect(() => observable.subscribe(setVal), [observable]);

    return val;
}
