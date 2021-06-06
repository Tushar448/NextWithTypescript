import { HomeState } from "../routes/Home/redux/HomeState";
import {LoginState} from '../routes/Login/redux/LoginState';
import {SignUpState} from '../routes/SignUp/redux/SignUpState';
import {EmployeeState} from '../routes/Employee/redux/EmployeeState';

export interface ShowPlusState {
  homeRoute: HomeState;
  loginRoute: LoginState
  signUpRoute: SignUpState
  employeeRoute: EmployeeState
}
