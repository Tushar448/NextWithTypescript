import { Reducer } from "redux";

import { HomeCategoryState } from "../HomeState";
import { HomeAction } from "../action/types";

import  {HOME_CATEGORIES_RESOLVED ,HOME_CATEGORIES_ERROR ,HOME_CATEGORIES_CLEAR } from '../action/homeCategory'
const defaultAgentMasterInfoState: HomeCategoryState = {
  isHomeCategoryError: false
};

export const homeCategoryReducer: Reducer<HomeCategoryState, HomeAction> = (
  agentMasterInfoState = defaultAgentMasterInfoState,
  action
) => {
  switch (action.type) {
    case HOME_CATEGORIES_RESOLVED:
      return { homeCategoryData: action.payload, isHomeCategoryError: false };
    case HOME_CATEGORIES_ERROR:
      return { isHomeCategoryError: true };
    case HOME_CATEGORIES_CLEAR:
      return { homeCategoryData: undefined, isHomeCategoryError: false };
    default:
      return agentMasterInfoState;
  }
};
