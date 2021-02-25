import userActionTypes from './user.types';

const INNITIAL_STATE = { currentUser: null, error: null };

const userReducer = (state = INNITIAL_STATE, action) => {
  switch (action.type) {
    // 이렇게 case stack이 가능하다
    case userActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        //로그인이 성공하면 error를 클리어 한다
        error: null,
      };

    case userActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };

    case userActionTypes.SIGN_IN_FAILURE:
    case userActionTypes.SIGN_OUT_FAILURE:
    case userActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
