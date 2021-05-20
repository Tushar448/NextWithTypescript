import { Reducer } from "redux";

import { HomeState } from "../HomeState";
import { HomeAction } from "../action/types";

import { homeCategoryReducer } from "./homeCategory";

export const homeReducer: Reducer<HomeState, HomeAction> = (
  state,
  action
) => {
  return {
    homeCategoryState: homeCategoryReducer(state && state.homeCategoryState, action),
  };
};
