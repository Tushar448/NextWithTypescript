import http from '../../../../../common/token-interceptor';

import { EmailResult } from "../../../EmailResult";

export async function getEmailListDetails() {
  const { data } = await http.get<EmailResult[]>(
    "http://localhost:9500/employee/email"
  );

  return data;
}
