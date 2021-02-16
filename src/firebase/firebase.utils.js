import firebase from 'firebase/app';
import 'firebase/firestore'; //for the database
import 'firebase/auth';
// 위에 임포트한 firebase 키워드를 통해, 임포트 된 firestore, auth에 다 접근 할 수 있다.

const config = {
  apiKey: 'AIzaSyDZL9lqzhhD2MdK1p9v3Cbifv09tmLnZAY',
  authDomain: 'evergreen-market.firebaseapp.com',
  projectId: 'evergreen-market',
  storageBucket: 'evergreen-market.appspot.com',
  messagingSenderId: '1009969789865',
  appId: '1:1009969789865:web:dd83b7eb97b254731622b8',
  measurementId: 'G-JK25KNMS9P',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`); //Auth 응답.uid
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log('creating user error', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider); // 지금은 구글만 쓰지만, 다양한 popup이 존재, 트위터, 페북 등등

export default firebase; // 혹시 firebase 라이브러리 자체가 필요할 때를 대비해서
