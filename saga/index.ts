import { fork } from "redux-saga/effects";

import {fetchHomeCategoryFlow} from '../src/routes/Home/redux/saga/HomeCategory/homeCategorySaga';
import {fetchForgotPasswordFlow} from '../src/routes/Login/redux/saga/ForgotPassword/forgotPasswordSaga';
import {fetchTokenFlow} from '../src/routes/Login/redux/saga/Login/loginsaga';

export function* root() {
  yield fork(fetchHomeCategoryFlow);
  yield fork(fetchForgotPasswordFlow)
  yield fork(fetchTokenFlow)

}
