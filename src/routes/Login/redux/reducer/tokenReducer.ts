import { Reducer } from "redux";

import { TokenState } from "../LoginState";
import { LoginAction } from "../action/type";
import {
  TOKEN_RESOLVED,
  TOKEN_REJECTED,
  TOKEN_RESET
} from "../action/loginaction";

const defaultTokenContentState: TokenState = {
  hasTokenError: false
};

export const tokenReducer: Reducer<TokenState, LoginAction> = (
  tokenContentState = defaultTokenContentState,
  action
) => {
  switch (action.type) {
    case TOKEN_RESOLVED:
      return { token: action.payload, hasTokenError: false };
    case TOKEN_REJECTED:
      return { hasTokenError: true };
    case TOKEN_RESET:
      return { token: undefined, hasTokenError: false };

    default:
      return tokenContentState;
  }
};
