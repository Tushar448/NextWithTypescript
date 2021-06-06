import http from '../../../../../common/token-interceptor';

import { EmployeeListResult } from "../../../EmployeeListResult";

export async function getEmployeeListDetails() {
  const { data } = await http.get<EmployeeListResult[]>(
    "http://localhost:9500/employee/list"
  );

  return data;
}
