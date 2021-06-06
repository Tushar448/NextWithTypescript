import axios from "axios";

import { EmployeeList } from "../../../EmployeeListResult";

export async function getEmployeeListDetails() {
  const { data } = await axios.get<EmployeeList[]>(
    "http://localhost:9500/employee/list"
  );

  return data;
}
