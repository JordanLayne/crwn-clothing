import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import{getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAEeLhWSwaZAbgnEBVqf8TUHXRKxNxSn3o",
  authDomain: "crown-clothing-db-14e14.firebaseapp.com",
  projectId: "crown-clothing-db-14e14",
  storageBucket: "crown-clothing-db-14e14.appspot.com",
  messagingSenderId: "130805242571",
  appId: "1:130805242571:web:fe203a4eef3b285045194e",
};
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth)=> {
const userDocRef = doc(db,'users',userAuth.uid)
const userSnapshot = await getDoc(userDocRef)
if(!userSnapshot.exists()){
    const{displayName,email}=userAuth;
    const createdAt=new Date()
    try{
        await setDoc(userDocRef,{
            displayName,email,createdAt
        })
    } catch (error){
        console.log(error)
    }

}
return userDocRef
}