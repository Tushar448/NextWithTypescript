import { takeEvery, put, call } from "redux-saga/effects";
import {
  forgotPasswordActionCreator,
  forgotPasswordActionCreatorRejected,
  forgotPasswordResolvedActionCreator,
  ForgotPasswordActionCreatorType
} from "../../action/forgotPassword";

import { getForgotPasswordDetails } from "./forgotPasswordService";
import { ForgotPasswordResult } from "../../../ForgotPasswordResult";

export function* fetchForgotPasswordFlow() {
  yield takeEvery(
    forgotPasswordActionCreator,
    function* forgotPasswordActionCreatorFn(
      action: ForgotPasswordActionCreatorType
    ) {
      try {
        const data: ForgotPasswordResult = yield call(
          getForgotPasswordDetails,
          action.payload
        );
        yield put(forgotPasswordResolvedActionCreator(data));
      } catch (e) {
        yield put(forgotPasswordActionCreatorRejected(e));
      }
    }
  );
}
