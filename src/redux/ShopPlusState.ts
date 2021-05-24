import { HomeState } from "../routes/Home/redux/HomeState";
import {LoginState} from '../routes/Login/redux/LoginState';

export interface ShowPlusState {
  homeRoute: HomeState;
  loginRoute: LoginState
}
