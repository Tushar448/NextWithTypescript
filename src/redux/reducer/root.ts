import { Reducer, Action } from "redux";

import { ShowPlusState } from "../ShopPlusState";

import { homeReducer } from "../../routes/Home/redux/reducer";


export const rootReducers: Reducer<ShowPlusState, Action> = (growState, action) => {
  return {
    homeRoute: homeReducer(
      growState && growState.homeRoute,
      action
    )
  };
};
