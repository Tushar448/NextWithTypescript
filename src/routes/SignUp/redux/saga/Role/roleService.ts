import axios from "axios";

import { RoleResult } from "../../../RoleResult";

export async function getRoleDetails() {
  const { data } = await axios.get<RoleResult[]>(
    "http://localhost:9500//role"
  );

  return data;
}
