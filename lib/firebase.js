import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCI4Jw9dyUGiCVi5GB73j2_YU53tUZ7Z7k",
  authDomain: "hitechupvc-web.firebaseapp.com",
  projectId: "hitechupvc-web",
  storageBucket: "hitechupvc-web.firebasestorage.app",
  messagingSenderId: "353306523965",
  appId: "1:353306523965:web:766e42bc576dcf3e10ad54",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
import { collection, getDocs, addDoc, setDoc, doc } from "firebase/firestore";

// READ
export const getCollection = async (name) => {
  const snapshot = await getDocs(collection(db, name));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// WRITE (create)
export const addToCollection = async (name, data) => {
  await addDoc(collection(db, name), data);
};

// WRITE (update)
export const setDocument = async (collectionName, id, data) => {
  await setDoc(doc(db, collectionName, id), data);
};
