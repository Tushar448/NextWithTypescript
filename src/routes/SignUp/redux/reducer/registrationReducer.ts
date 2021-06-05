import { Reducer } from "redux";

import { RegistrationState } from "../SignUpState";
import { RegistrationAction } from "../action/types";
import {
    REGISTRATION_RESOLVED,
    REGISTRATION_REJECTED,
    REGISTRATION_RESET
} from "../action/registrationAction";

const defaultRegistrationState: RegistrationState = {
  isRegistrationError: false
};

export const registrationReducer: Reducer<RegistrationState, RegistrationAction> = (
  registrationState = defaultRegistrationState,
  action
) => {
  switch (action.type) {
    case REGISTRATION_RESOLVED:
      return { registrationData: action.payload, isRegistrationError: false };
    case REGISTRATION_REJECTED:
      return { isRegistrationError: true };
    case REGISTRATION_RESET:
      return { registrationData: undefined, isRegistrationError: false };

    default:
      return registrationState;
  }
};
