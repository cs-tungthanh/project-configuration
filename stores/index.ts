import StateProjectStore from './stateProject';

/**
 * Example:
 * Define an object type and init value for this object: objectStore
 * When you want to use this state just call
 *  - const objectValue = useObservable(objectStore.model);
 * To update value: objectStore.method()
 */

export { useObservable } from './useObservable';

export const stateProjectStore = new StateProjectStore();
