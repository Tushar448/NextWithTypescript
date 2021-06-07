import { takeEvery, put, call, takeLatest } from 'redux-saga/effects';
import {
    fetchEmployeeActionCreator,
    employeeListResolvedActionCreator,
    employeeListRejectedActionCreator,
} from '../../action/employeeListAction';
import { EmployeeListResult } from "../../../EmployeeListResult";
import {EMPLOYEE_ADD_RESOLVED} from '../../action/addEmployeeAction';

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


function* workeronAddEmployeeSuccess() {
  try {
    const data: EmployeeListResult[] = yield call(
        getEmployeeListDetails
    );
    yield put(employeeListResolvedActionCreator(data));
  } catch (e) {
    yield put(employeeListRejectedActionCreator(e));
  }
}

export function* watchAddEmployeeSuccess() {
  yield takeLatest([EMPLOYEE_ADD_RESOLVED], workeronAddEmployeeSuccess);
}