import { takeEvery, put, call } from 'redux-saga/effects';
import {
    fetchRegistrationActionCreator,
    registrationResolvedActionCreator,
    registrationRejectedActionCreator,
  FetchRegistrationActionCreatorType,
} from '../../action/registrationAction';
import { RegistrationResult } from "../../../RegistrationResult";

import { getRegistrationDetails } from './registartionService';

export function* fetchRegistrationFlow() {
  yield takeEvery(
    fetchRegistrationActionCreator,
    function* gfetchRegistrationActionCreatorFn(
      action: FetchRegistrationActionCreatorType
    ) {
      try {
        const data: RegistrationResult = yield call(
          getRegistrationDetails,
          action.payload
        );
        yield put(registrationResolvedActionCreator(data));
      } catch (e) {
        yield put(registrationRejectedActionCreator(e));
      }
    }
  );
}
