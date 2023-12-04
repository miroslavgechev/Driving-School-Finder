import { initializeApp } from 'firebase/app';

import firebaseConfig from 'config/firebaseConfig';

import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  getDoc,
  updateDoc,
  doc,
  query,
  where,
} from 'firebase/firestore';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const setCustomUserData = async (uid, { role, firstName, lastName }) => {
  try {
    await setDoc(doc(db, 'users', uid), {
      role,
      firstName,
      lastName,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getCustomUserData = async (uid) => {
  try {
    const docRef = doc(db, 'users', uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateCustomUserData = async (uid, { firstName, lastName }) => {
  const docRef = doc(db, 'users', uid);
  try {
    await updateDoc(docRef, { firstName, lastName });
  } catch (error) {
    throw new Error(error);
  }
};

// Get a list of schools from the database
export const getSchools = async () => {
  const schoolsCol = collection(db, 'schools');
  const schoolsSnapshot = await getDocs(schoolsCol);
  const schoolsList = schoolsSnapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id,
  }));
  return schoolsList;
};

export const getSpecificFieldOfAllSchools = async () => {
  const schoolsCol = collection(db, 'schools');
  const schoolsSnapshot = await getDocs(schoolsCol);
  const schoolsList = schoolsSnapshot.docs.map(doc => {
    const data = doc.data();
    return {
      name: data.name,
      description: data.description,
    };
  });
  return schoolsList;
};

export const getSchoolByOwnerUid = async (ownerUid) => {
  try {
    const q = query(collection(db, 'schools'), where('ownerUid', '==', ownerUid));

    const querySnapshot = await getDocs(q);
    const school = querySnapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id,
    }))[0];

    return school;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getSchoolByOwnerUidAndSchoolId = async (ownerUid, schoolId) => {
  try {
    const school = await getSchoolByOwnerUid(ownerUid);

    if (school && school.id === schoolId) {
      return school;
    } else {
      return undefined;
    }

  } catch (error) {
    throw new Error(error.message);
  }
};

export const getSchoolById = async (schoolId) => {
  try {
    const docRef = doc(db, 'schools', schoolId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    }

  } catch (error) {
    throw new Error(error);
  }
};

export const addSchool = async (school) => await setDoc(doc(db, 'schools', school.ownerUid), school);

