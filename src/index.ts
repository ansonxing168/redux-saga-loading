import { put } from "redux-saga/effects"
const NAMESPACE = 'loading';
const START = '@@REDUX_SAGA_LOADING/START'
const STOP = '@@REDUX_SAGA_LOADING/STOP'

function createReduxSagaLoading(opts: any = {}) {
    const namespace = opts.namespace || NAMESPACE;
    const initialState = {
        models: {}
    };
    const reduxReducers = {
        [namespace](state: any = initialState, action: any) {
            const {
                model
            } = action
            switch (action.type) {
                case START:
                    return {
                        models: {
                            ...state.models,
                            [model]: true
                        }
                    };
                case STOP:
                    return {
                        models: {
                            ...state.models,
                            [model]: false
                        }
                    };
                default:
                    return state;
            }
        }
    }
    return {
        reduxReducers
    };
}

const startLoading = (model: string) => put({
    type: START,
    model
})
const stopLoading = (model: string) => put({
    type: STOP,
    model
})

export {
    createReduxSagaLoading,
    startLoading,
    stopLoading
}