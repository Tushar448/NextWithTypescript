import axios from "axios";

import { AddEmployeeResult } from "../../../AddEmployeeResult";
import {AddEmployeePayload} from "../../../AddEmployeePayload"

export async function addEmployeeDetails(params: AddEmployeePayload) {
  const { data } = await axios.post<AddEmployeeResult>(
    "http://localhost:9500/employee/add", params
  );

  return data;
}
