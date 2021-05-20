import { takeEvery, put, call } from "redux-saga/effects";

import {
    getHomeCategoryInfo as getHomeCategoryInfoActionCreator,
  getHomeCategoryInfoResolved,
  getHomeCategoryInfoRejected
} from "../../action/homeCategory";

import { getHomeCategoryDetails } from "./homeCategoryService";

export function* fetchHomeCategoryFlow() {
  yield takeEvery(
    getHomeCategoryInfoActionCreator,
    function* getHomeCategoryInfoActionCreatorFn() {
      try {
        const data: any = yield call(
            getHomeCategoryDetails
        );
        yield put(getHomeCategoryInfoResolved(data));
      } catch (e) {
        yield put(getHomeCategoryInfoRejected(e));
      }
    }
  );
}
