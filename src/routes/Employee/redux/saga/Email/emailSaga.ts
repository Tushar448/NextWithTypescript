import { takeEvery, put, call } from 'redux-saga/effects';
import {
    fetchEmailActionCreator,
    emailResolvedActionCreator,
    emailListRejectedActionCreator,
} from '../../action/emailAction';
import { EmailResult } from "../../../EmailResult";

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
