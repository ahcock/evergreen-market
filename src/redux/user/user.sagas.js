import { takeLatest, put, all, call } from 'redux-saga/effects';
import userActionTypes from './user.types';
import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from '../../firebase/firebase.utils';

import { googleSignInSuccess, googleSignInFailure } from './user.actions';

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider); // popup에서 로그인이 성공하면 받을 응답
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    //put은 리덕스 사가로 빠져있던 로직을 다시 Redux-flow안으로 집어 넣는다. 한마디로 dispatch.
    yield put(
      googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}
