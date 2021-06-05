import { DynamicActionTypes } from "../../../../redux/DynamicActionTypes";

type RegistartionTypes = typeof import("./registrationAction");
type RoleTypes = typeof import("./roleAction");

export type RegistrationAction = DynamicActionTypes<
RegistartionTypes &  RoleTypes
>;
