export const NAME = 'AUTH';

export const SIGN_IN = `${NAME}/SIGN_IN`;
export const SIGN_IN_SUCCESS = `${NAME}/SIGN_IN_SUCCESS`;
export const SIGN_IN_FAIL = `${NAME}/SIGN_IN_FAIL`;

export const signIn = credentials => ({
  type: SIGN_IN,
  credentials,
});

export const signInSuccess = token => ({
  type: SIGN_IN_SUCCESS,
  token,
});

export const signInFail = error => ({
  type: SIGN_IN_FAIL,
  error,
});
