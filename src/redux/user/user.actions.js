import userActionTypes from './user.types';

export const setCurrentUser = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});

//여기는 payload가 필요없다. 그저 SignIn이 시작됐다는 것을 알릴 뿐
export const googleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START,
});

export const googleSignInSuccess = (user) => ({
  type: userActionTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: user,
});

export const googleSignInFailure = (error) => ({
  type: userActionTypes.GOOOGLE_SIGN_IN_FAILURE,
  payload: error,
});

// Email 로그인을 위해서는 email과 password가 필요
export const emailSignInStart = (emailAndPassword) => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START,
  payload: emailAndPassword,
});

export const emailSignInSuccess = (user) => ({
  type: userActionTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: user,
});

export const emailSignInFailure = (error) => ({
  type: userActionTypes.GOOOGLE_SIGN_IN_FAILURE,
  payload: error,
});
