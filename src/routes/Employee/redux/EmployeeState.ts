import { EmployeeListResult } from "../EmployeeListResult";
import {AddEmployeeResult} from '../AddEmployeeResult';
import { EmailResult } from "../EmailResult";

export interface EmployeeListState {
    isEmployeeListError: boolean;
    employeeListData?: EmployeeListResult[]
}

export interface AddEmployeeState {
    isAddEmployeeError: boolean;
    addEmployeeData?:AddEmployeeResult;
}

export interface EmailState {
    isEmailError: boolean;
    emaildata?: EmailResult[];
}

export interface EmployeeState {
    employeeListState: EmployeeListState;
    addEmployeeState: AddEmployeeState;
    emailState: EmailState
}