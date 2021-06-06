import { EmployeeListResult } from "../EmployeeListResult";
import {AddEmployeeResult} from '../AddEmployeeResult';

export interface EmployeeListState {
    isEmployeeListError: boolean;
    employeeListData?: EmployeeListResult[]
}

export interface AddEmployeeState {
    isAddEmployeeError: boolean;
    addEmployeeData?:AddEmployeeResult;
}

export interface EmployeeState {
    employeeListState: EmployeeListState;
    addEmployeeState: AddEmployeeState;
}