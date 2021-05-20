import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware, {SagaMiddleware} from "redux-saga";
import {MakeStoreOptions} from 'next-redux-wrapper';

import {root} from "../../saga";
import {middleware} from '../../saga/middleWare'
import {rootReducers} from "./reducer/root";
import {ReduxSagaStore} from './ReduxSagaStore'
import {ShowPlusState} from './ShopPlusState';

export function configureStore(initialState: ShowPlusState, {isServer}: MakeStoreOptions) {
    let sagaMiddleWare: SagaMiddleware;
    let composeEnhancers: typeof compose;

    if(!isServer) {
        const reduxDevToolComposer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
        composeEnhancers= (reduxDevToolComposer && reduxDevToolComposer({trace: true})) || compose
        sagaMiddleWare = middleware;
    } else {
        sagaMiddleWare= createSagaMiddleware();
        composeEnhancers= compose;
    }

  const store: ReduxSagaStore = createStore(rootReducers,  initialState, composeEnhancers(
    applyMiddleware(sagaMiddleWare)
  ));

  store.sagaTask = sagaMiddleWare.run(root);
  store.sagaMiddleware = sagaMiddleWare;

  return store;
}
