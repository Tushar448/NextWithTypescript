import http from '../../../../../common/token-interceptor';

import { AddEmployeeResult } from "../../../AddEmployeeResult";
import {AddEmployeePayload} from "../../../AddEmployeePayload"

export async function addEmployeeDetails(params: AddEmployeePayload) {
  const { data } = await http.post<AddEmployeeResult>(
    "http://localhost:9500/employee/add", params
  );

  return data;
}
