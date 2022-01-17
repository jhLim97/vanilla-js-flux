const CreateStore = (initState, reducer) => {
    let state = initState;
    let observers = [];

    const frozenState = {};
    Object.keys(state).forEach((key) => {
        Object.defineProperty(frozenState, key, {
            get: () => state[key],
        });
    });

    const getState = () => {
        return frozenState;
    };

    const setState = (newState) => {
        const isStateChange = () => {
            return JSON.stringify(state) !== JSON.stringify(newState);
        };

        if (!isStateChange()) return;
        state = { ...state, ...newState };
        notify();
    };

    const notify = () => {
        observers.forEach((observer) => observer());
    };

    const dispatch = (action) => {
        const newState = reducer(state, action);
        setState(newState);
    };

    const subscribe = (observer) => {
        observers = [...observers, observer];
    };

    const unsubscribe = (targetObserver) => {
        observers = observers.filter((observer) => observer !== targetObserver);
    };

    return {
        getState,
        dispatch,
        subscribe,
        unsubscribe,
    };
};

export default CreateStore;
