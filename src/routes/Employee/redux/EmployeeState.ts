import { EmployeeListResult } from "../EmployeeListResult";
import {AddEmployeeResult} from '../AddEmployeeResult';
import { EmailResult } from "../EmailResult";
import { AddEmailResult } from "../AddEmailResult";

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

export interface AddEmailState {
    isEmailAddError: boolean;
    emailAddData?: AddEmailResult;
}
export interface EmployeeState {
    employeeListState: EmployeeListState;
    addEmployeeState: AddEmployeeState;
    emailState: EmailState;
    addEmailState: AddEmailState
}