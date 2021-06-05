import { fork } from "redux-saga/effects";

import {fetchHomeCategoryFlow} from '../src/routes/Home/redux/saga/HomeCategory/homeCategorySaga';
import {fetchForgotPasswordFlow} from '../src/routes/Login/redux/saga/ForgotPassword/forgotPasswordSaga';
import {fetchTokenFlow} from '../src/routes/Login/redux/saga/Login/loginsaga';
import {fetchRegistrationFlow} from '../src/routes/SignUp/redux/saga/Registartion/registartionSaga';
import {fetchRoleFlow} from '../src/routes/SignUp/redux/saga/Role/roleSaga';

export function* root() {
  yield fork(fetchHomeCategoryFlow);
  yield fork(fetchForgotPasswordFlow)
  yield fork(fetchTokenFlow)
  yield fork(fetchRegistrationFlow)
  yield fork(fetchRoleFlow)
}
