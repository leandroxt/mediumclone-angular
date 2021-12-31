import { Action, createReducer, on } from '@ngrx/store';

import { AuthStateInterface } from 'src/app/auth/types/authState.interface';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from 'src/app/auth/store/actions/register.action';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  isLogged: null,
  validationError: null,
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationError: null,
    })
  ),
  on(
    registerSuccessAction,
    (state, { currentUser }): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLogged: true,
      currentUser,
    })
  ),
  on(
    registerFailureAction,
    (state, { errors }): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationError: errors,
    })
  )
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
