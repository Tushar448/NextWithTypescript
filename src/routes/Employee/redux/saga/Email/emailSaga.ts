import { takeEvery, put, call, takeLatest } from 'redux-saga/effects';
import {
    fetchEmailActionCreator,
    emailResolvedActionCreator,
    emailListRejectedActionCreator,
} from '../../action/emailAction';
import { EmailResult } from "../../../EmailResult";
import {ADD_EMAIL_RESOLVED} from '../../action/addEmailAction';

import { getEmailListDetails } from './emailService';

export function* fetchEmailListFlow() {
  yield takeEvery(
    fetchEmailActionCreator,
    function* fetchEmailActionCreatorFn(
    ) {
      try {
        const data: EmailResult[] = yield call(
            getEmailListDetails
        );
        yield put(emailResolvedActionCreator(data));
      } catch (e) {
        yield put(emailListRejectedActionCreator(e));
      }
    }
  );
}


function* workeronAddEmailSuccess() {
  try {
    const data: EmailResult[] = yield call(
        getEmailListDetails
    );
    yield put(emailResolvedActionCreator(data));
  } catch (e) {
    yield put(emailListRejectedActionCreator(e));
  }
}

export function* watchAddEmailSuccess() {
  yield takeLatest([ADD_EMAIL_RESOLVED], workeronAddEmailSuccess);
}