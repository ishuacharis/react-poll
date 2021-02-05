export const sayHiOnDispatch = (createStore) => {
    return (rootReducer, preloadedState, enhancers) => {
        const store = createStore(rootReducer, preloadedState, enhancers);

        function newDispatch(action) {
            const result  = store.dispatch(action)
            console.log(`Hi dispatch value ${action.value}`)
            return result;
        }

        return  { ...store, dispatch: newDispatch  }
    }
}
