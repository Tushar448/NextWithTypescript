import { Reducer, Action } from "redux";

import { ShowPlusState } from "../ShopPlusState";

import { homeReducer } from "../../routes/Home/redux/reducer";
import {loginReducer} from '../../routes/Login/redux/reducer';
import {signUpReducer} from '../../routes/SignUp/redux/reducer';
import {employeeReducer} from '../../routes/Employee/redux/reducer';

export const rootReducers: Reducer<ShowPlusState, Action> = (growState, action) => {
  return {
    homeRoute: homeReducer(
      growState && growState.homeRoute,
      action
    ),
    loginRoute: loginReducer(growState && growState.loginRoute, action),
    signUpRoute: signUpReducer(growState && growState.signUpRoute, action),
    employeeRoute: employeeReducer(growState && growState.employeeRoute, action)
  };
};
