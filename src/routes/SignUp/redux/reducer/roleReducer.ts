import { Reducer } from "redux";

import { RoleState } from "../SignUpState";
import { RegistrationAction } from "../action/types";
import {
    ROLE_RESOLVED,
    ROLE_REJECTED,
    ROLE_RESET
} from "../action/roleAction";

const defaultRoleState: RoleState = {
  isRoleError: false
};

export const roleReducer: Reducer<RoleState, RegistrationAction> = (
  roleState = defaultRoleState,
  action
) => {
  switch (action.type) {
    case ROLE_RESOLVED:
      return { roleData: action.payload, isRoleError: false };
    case ROLE_REJECTED:
      return { isRoleError: true };
    case ROLE_RESET:
      return { roleData: undefined, isRoleError: false };

    default:
      return roleState;
  }
};
