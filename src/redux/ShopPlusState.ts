import { HomeState } from "../routes/Home/redux/HomeState";
import {LoginState} from '../routes/Login/redux/LoginState';
import {SignUpState} from '../routes/SignUp/redux/SignUpState';

export interface ShowPlusState {
  homeRoute: HomeState;
  loginRoute: LoginState
  signUpRoute: SignUpState
}
