import { takeEvery, put, call } from 'redux-saga/effects';
import {
    addEmailActionCreator,
    emailAddResolvedActionCreator,
    emailAddRejectedActionCreator,
} from '../../action/addEmailAction';
import { AddEmailResult } from "../../../AddEmailResult";

import { addEmailDetails } from './addEmailService';

export function* addEmailFlow() {
  yield takeEvery(
    addEmailActionCreator,
    function* addEmailActionCreatorFn(action
    ) {
      try {
        const data: AddEmailResult = yield call(
            addEmailDetails, action.payload
        );
        yield put(emailAddResolvedActionCreator(data));
      } catch (e) {
        yield put(emailAddRejectedActionCreator(e));
      }
    }
  );
}