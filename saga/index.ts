import { fork } from "redux-saga/effects";

import {fetchHomeCategoryFlow} from '../src/routes/Home/redux/saga/HomeCategory/homeCategorySaga';
import {fetchForgotPasswordFlow} from '../src/routes/Login/redux/saga/ForgotPassword/forgotPasswordSaga';
import {fetchTokenFlow} from '../src/routes/Login/redux/saga/Login/loginsaga';
import {fetchRegistrationFlow} from '../src/routes/SignUp/redux/saga/Registartion/registartionSaga';
import {fetchRoleFlow} from '../src/routes/SignUp/redux/saga/Role/roleSaga';
import {fetchEmployeeListFlow, watchAddEmployeeSuccess} from '../src/routes/Employee/redux/saga/EmployeeList/employeeSaga';
import {addEmployeeFlow} from '../src/routes/Employee/redux/saga/AddEmployee/addEmployeeSaga';
import {fetchEmailListFlow, watchAddEmailSuccess} from '../src/routes/Employee/redux/saga/Email/emailSaga';
import {addEmailFlow} from '../src/routes/Employee/redux/saga/AddEmail/addEmailSaga';

export function* root() {
  yield fork(fetchHomeCategoryFlow);
  yield fork(fetchForgotPasswordFlow);
  yield fork(fetchTokenFlow);
  yield fork(fetchRegistrationFlow);
  yield fork(fetchRoleFlow);
  yield fork(fetchEmployeeListFlow);
  yield fork(addEmployeeFlow);
  yield fork(fetchEmailListFlow);
  yield fork(watchAddEmployeeSuccess);
  yield fork(addEmailFlow);
  yield fork(watchAddEmailSuccess);
}
