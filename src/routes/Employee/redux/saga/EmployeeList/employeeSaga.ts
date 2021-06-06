import { takeEvery, put, call } from 'redux-saga/effects';
import {
    fetchEmployeeActionCreator,
    employeeListResolvedActionCreator,
    employeeListRejectedActionCreator,
} from '../../action/employeeListAction';
import { EmployeeList } from "../../../EmployeeListResult";

import { getEmployeeListDetails } from './employeeService';

export function* fetchEmployeeListFlow() {
  yield takeEvery(
    fetchEmployeeActionCreator,
    function* fetchEmployeeActionCreatorFn(
    ) {
      try {
        const data: EmployeeList[] = yield call(
            getEmployeeListDetails
        );
        yield put(employeeListResolvedActionCreator(data));
      } catch (e) {
        yield put(employeeListRejectedActionCreator(e));
      }
    }
  );
}
