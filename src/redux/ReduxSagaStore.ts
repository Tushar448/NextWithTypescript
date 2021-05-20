import {Store} from 'redux';
import  {SagaMiddleware, Task} from "redux-saga";

export interface ReduxSagaStore extends Store {
    sagaMiddleware?: SagaMiddleware;
    sagaTask?: Task
}