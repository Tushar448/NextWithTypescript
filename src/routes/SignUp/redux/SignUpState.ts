
import { RegistrationResult } from "../RegistrationResult";
import { RoleResult } from "../RoleResult";


export interface RegistrationState {
    isRegistrationError: boolean;
    registrationData?: RegistrationResult
}

export interface RoleState {
    isRoleError: boolean;
    roleData?: RoleResult[];
}

export interface SignUpState {
registrationState: RegistrationState;
roleState: RoleState
}