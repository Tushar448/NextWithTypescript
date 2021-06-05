import { RoleResult } from "../../RoleResult";

export const FETCH_ROLE = "Registration/fetchRole";
export const ROLE_RESOLVED = "Registration/roleResolved";
export const ROLE_REJECTED = "Registration/roleRejected";
export const ROLE_RESET = "Registration/roleClearData";

export function fetchRoleActionCreator() {
  return {
    type: FETCH_ROLE
  } as const;
}
fetchRoleActionCreator.toString = () => FETCH_ROLE;

export function roleResolvedActionCreator(result: RoleResult[]) {
  return {
    type: ROLE_RESOLVED,
    payload: result
  } as const;
}

export function roleRejectedActionCreator(error: boolean) {
  return {
    type: ROLE_REJECTED,
    payload: error
  } as const;
}

export function clearRoleData() {
  return { type: ROLE_RESET } as const;
}
