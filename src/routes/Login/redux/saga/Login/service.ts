import axios from "axios";

import { TokenResponse } from "../../../TokenResponse";
export async function getTokenContentDetails(formDetails: {
  username: string;
  password: string;
}) {
  const { data } = await axios.get<TokenResponse>(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  return data;
}
