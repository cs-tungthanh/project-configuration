import Observable from '../observable';

const initialStore: IStateProjectModel = {
    dummy: 'hello',
    layout: [],
};

interface IStateProjectModel {
    dummy: string;
    layout: number[];
}

class StateProjectStore {
    readonly model = new Observable<IStateProjectModel>(initialStore);

    updateLayout = (newLayout: number[]): void => {
        const oldVal = this.model.get();
        this.model.set({ ...oldVal, layout: [...newLayout] });
    };
}

export default StateProjectStore;
