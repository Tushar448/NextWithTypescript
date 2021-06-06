import { takeEvery, put, call } from 'redux-saga/effects';
import {
  fetchTokenActionCreator,
  tokenRejectedActionCreator,
  tokenResolvedActionCreator,
  FetchTokenActionCreatorType,
} from '../../action/loginaction';

import { getTokenContentDetails } from './service';
import { TokenResponse } from '../../../TokenResponse';

export function* fetchTokenFlow() {
  yield takeEvery(
    fetchTokenActionCreator,
    function* getTokenContentInfoActionCreatorFn(
      action: FetchTokenActionCreatorType
    ) {
      try {
        const data: TokenResponse = yield call(
          getTokenContentDetails,
          action?.payload
        );
        sessionStorage.setItem("id", "1")
        yield put(tokenResolvedActionCreator(data));
      } catch (e) {
        yield put(tokenRejectedActionCreator(e));
      }
    }
  );
}
