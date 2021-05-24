import { TokenResponse } from "../../TokenResponse";

export const FETCH_TOKEN = "Login/fetchToken";
export const TOKEN_RESOLVED = "Login/tokenResolved";
export const TOKEN_REJECTED = "Login/tokenRejected";
export const TOKEN_RESET = "Login/loginInfoClearData";

export function fetchTokenActionCreator(formDetails: {
  username: string;
  password: string;
}) {
  return {
    type: FETCH_TOKEN,
    payload: formDetails
  } as const;
}
fetchTokenActionCreator.toString = () => FETCH_TOKEN;

export type FetchTokenActionCreatorType = ReturnType<
  typeof fetchTokenActionCreator
>;

export function tokenResolvedActionCreator(result: TokenResponse) {
  return {
    type: TOKEN_RESOLVED,
    payload: result
  } as const;
}

export function tokenRejectedActionCreator(error: boolean) {
  return {
    type: TOKEN_REJECTED,
    payload: error
  } as const;
}

export function clearTokenData() {
  return { type: TOKEN_RESET } as const;
}
