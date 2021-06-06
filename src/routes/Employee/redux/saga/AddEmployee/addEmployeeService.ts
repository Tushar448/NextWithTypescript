import axios from "axios";

import { AddEmployeeResult } from "../../../AddEmployeeResult";

export async function addEmployeeDetails(params: any) {
  const { data } = await axios.post<AddEmployeeResult>(
    "http://localhost:9500/employee/add", params
  );

  return data;
}
