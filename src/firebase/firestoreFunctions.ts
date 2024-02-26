import * as firestore from 'firebase/firestore'
import { getCurrentUser, db } from './firebase'

const getCurrentUserData = async () => {
    const currentUID =  getCurrentUser().uid;
    // const q = firestore.query(
    //     firestore.collection(database, "users"),
    //     firestore.where("uid", "==", currentUID)
    // );
    const docRef = firestore.doc(db, "users", currentUID);
    const doc = await firestore.getDoc(docRef);
    return doc.data();
}

const updateCurrentUserData = async (data: any) => {
    const currentUID =  getCurrentUser().uid;
    const docRef = firestore.doc(db, "users", currentUID);
    const res = await firestore.setDoc(docRef, data);
    return res;
}

export {getCurrentUserData, updateCurrentUserData}

