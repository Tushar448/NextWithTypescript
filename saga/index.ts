import { fork } from "redux-saga/effects";

import {fetchHomeCategoryFlow} from '../src/routes/Home/redux/saga/HomeCategory/homeCategorySaga';

export function* root() {
  yield fork(fetchHomeCategoryFlow);

}
