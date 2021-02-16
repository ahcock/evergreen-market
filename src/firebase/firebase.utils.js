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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider); // 지금은 구글만 쓰지만, 다양한 popup이 존재, 트위터, 페북 등등

export default firebase;
