import http from '../../../../../common/token-interceptor';

import { AddEmailResult } from "../../../AddEmailResult";

export async function addEmailDetails(formDetail: {email: string}) {
  const { data } = await http.post<AddEmailResult>(
    "http://localhost:9500/email/add", formDetail
  );

  return data;
}
