import axios from "axios";

import { RegistrationResult } from "../../../RegistrationResult";
import {RegistrationPayload} from '../../../RegistartionPayload';

export async function getRegistrationDetails(param: RegistrationPayload) {
  const { data } = await axios.post<RegistrationResult>(
    "http://localhost:9500/registration", param
  );

  return data;
}
