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

export const addCollectionAndDocument = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc(); // doc()에 인자를 줄수 있음, 없을시  firebase에서 자동생성
    batch.set(newDocRef, obj);
  });

  return await batch.commit(); // return Promise
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transfornedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transfornedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// redux-persist가 하던일을 reudx-saga로 옮기기 위해, currentUser를 체크하는 로직
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider); // 지금은 구글만 쓰지만, 다양한 popup이 존재, 트위터, 페북 등등

export default firebase; // 혹시 firebase 라이브러리 자체가 필요할 때를 대비해서
