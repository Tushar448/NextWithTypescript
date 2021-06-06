import axios from "axios";

import { EmployeeListResult } from "../../../EmployeeListResult";

export async function getEmployeeListDetails() {
  const { data } = await axios.get<EmployeeListResult[]>(
    "http://localhost:9500/employee/list"
  );

  return data;
}
