// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage"
import {v4} from "uuid"

const firebaseConfig = {
  apiKey: "AIzaSyBJTHXxHU8s9LPOAyKaRlhda5WO3ff3u7s",
  authDomain: "uploadfotos-706e0.firebaseapp.com",
  projectId: "uploadfotos-706e0",
  storageBucket: "uploadfotos-706e0.appspot.com",
  messagingSenderId: "286503577809",
  appId: "1:286503577809:web:e6ac045efe540920dc7df0"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

export async function uploadle(file) {
    const storageRef = ref(storage,v4())
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef)
    return url
}