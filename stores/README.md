```
App.js

export { useObservable } from './useObservable';


const App = ():JSX.Element => {
    const {} = useObservable(stateProjectStore.model);

    // when you want to update this state
    stateProjectStore.updateLayout(newVal);
}

```