export const includeHiToState = (createStore) => {
    return (rootReducer, preloadedState, enhancers) => {
        const store = createStore(rootReducer, preloadedState, enhancers);

        const  newGetState = () => ({
            ...store.getState(),
            newCounter: `Hi counter ${store.getState().counter.count}`
        })

        return  { ...store, getState: newGetState  }
    }
}