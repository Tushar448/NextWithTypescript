import { takeEvery, put, call } from 'redux-saga/effects';
import {
    fetchRoleActionCreator,
    roleResolvedActionCreator,
    roleRejectedActionCreator,
} from '../../action/roleAction';
import { RoleResult } from "../../../RoleResult";

import { getRoleDetails } from './roleService';

export function* fetchRoleFlow() {
  yield takeEvery(
    fetchRoleActionCreator,
    function* getfetchRoleActionCreatorFn(
    ) {
      try {
        const data: RoleResult[] = yield call(
            getRoleDetails
        );
        yield put(roleResolvedActionCreator(data));
      } catch (e) {
        yield put(roleRejectedActionCreator(e));
      }
    }
  );
}
