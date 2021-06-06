import { takeEvery, put, call } from 'redux-saga/effects';
import {
    fetchEmployeeActionCreator,
    employeeListResolvedActionCreator,
    employeeListRejectedActionCreator,
} from '../../action/employeeListAction';
import { EmployeeListResult } from "../../../EmployeeListResult";

import { getEmployeeListDetails } from './employeeService';

export function* fetchEmployeeListFlow() {
  yield takeEvery(
    fetchEmployeeActionCreator,
    function* fetchEmployeeActionCreatorFn(
    ) {
      try {
        const data: EmployeeListResult[] = yield call(
            getEmployeeListDetails
        );
        yield put(employeeListResolvedActionCreator(data));
      } catch (e) {
        yield put(employeeListRejectedActionCreator(e));
      }
    }
  );
}
