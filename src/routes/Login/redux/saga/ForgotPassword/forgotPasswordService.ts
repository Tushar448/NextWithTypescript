import axios from "axios";

import { ForgotPasswordResult } from "../../../ForgotPasswordResult";
import { ForgotPasswordPayload } from "../../../ForgotPasswordPayload";

export async function getForgotPasswordDetails(param: ForgotPasswordPayload) {
  const { data } = await axios.get<ForgotPasswordResult>(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  return data;
}
