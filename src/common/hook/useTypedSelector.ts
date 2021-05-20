import { useSelector, TypedUseSelectorHook } from "react-redux";

import { ShowPlusState } from "../../redux/ShopPlusState";

export const useTypedSelector: TypedUseSelectorHook<ShowPlusState> = useSelector;
