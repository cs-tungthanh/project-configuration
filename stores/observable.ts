type Listener<T> = (val: T) => void;
type Unsubscriber = () => void;

export default class Observable<T> {
    private _listeners: Array<Listener<T>> = [];

    private _val: T;

    constructor(val: T) {
        this._val = val;
    }

    get(): T {
        return this._val;
    }

    set(val: T): void {
        if (this._val !== val) {
            this._val = val;
            this._listeners.forEach((l) => l(val));
        }
    }

    subscribe(listener: Listener<T>): Unsubscriber {
        this._listeners.push(listener);
        return (): void => {
            this._listeners = this._listeners.filter((l) => l !== listener);
        };
    }
}
