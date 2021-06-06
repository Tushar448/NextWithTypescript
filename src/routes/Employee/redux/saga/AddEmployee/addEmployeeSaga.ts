import { takeEvery, put, call } from 'redux-saga/effects';
import {
    addEmployeeActionCreator,
    employeeAddResolvedActionCreator,
    employeeAddRejectedActionCreator,
} from '../../action/addEmployeeAction';
import { AddEmployeeResult } from "../../../AddEmployeeResult";

import { addEmployeeDetails } from './addEmployeeService';

export function* addEmployeeFlow() {
  yield takeEvery(
    addEmployeeActionCreator,
    function* addEmployeeActionCreatorFn(action
    ) {
      try {
        const data: AddEmployeeResult = yield call(
            addEmployeeDetails, action.payload
        );
        yield put(employeeAddResolvedActionCreator(data));
      } catch (e) {
        yield put(employeeAddRejectedActionCreator(e));
      }
    }
  );
}