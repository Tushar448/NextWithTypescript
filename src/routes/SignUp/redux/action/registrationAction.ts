import { RegistrationResult } from "../../RegistrationResult";
import {RegistrationPayload} from '../../RegistartionPayload';

export const FETCH_REGISTRATION = "Registration/fetchToken";
export const REGISTRATION_RESOLVED = "Registration/registrationResolved";
export const REGISTRATION_REJECTED = "Registration/registrationRejected";
export const REGISTRATION_RESET = "Registration/registrationClearData";

export function fetchRegistrationActionCreator(params: RegistrationPayload) {
  return {
    type: FETCH_REGISTRATION,
    payload: params
  } as const;
}
fetchRegistrationActionCreator.toString = () => FETCH_REGISTRATION;

export type FetchRegistrationActionCreatorType = ReturnType<
  typeof fetchRegistrationActionCreator
>;

export function registrationResolvedActionCreator(result: RegistrationResult) {
  return {
    type: REGISTRATION_RESOLVED,
    payload: result
  } as const;
}

export function registrationRejectedActionCreator(error: boolean) {
  return {
    type: REGISTRATION_REJECTED,
    payload: error
  } as const;
}

export function clearRegistrationData() {
  return { type: REGISTRATION_RESET } as const;
}
