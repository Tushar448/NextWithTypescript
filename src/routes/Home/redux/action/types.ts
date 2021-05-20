import { DynamicActionTypes } from "../../../../redux/DynamicActionTypes";

type HomeCategoryActionTypes = typeof import("./homeCategory");

export type HomeAction = DynamicActionTypes<
HomeCategoryActionTypes
>;
