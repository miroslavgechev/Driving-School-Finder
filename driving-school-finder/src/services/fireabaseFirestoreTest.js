import { initializeApp } from 'firebase/app';

import firebaseConfig from 'config/firebaseConfig';

import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  query,
  where,
} from 'firebase/firestore';

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

import { schoolMock } from 'dbTemp';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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

export const getSchoolByName = async (name) => {
  const q = query(collection(db, 'schools'), where('name', '==', name));

  const querySnapshot = await getDocs(q);
  const school = querySnapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id,
  }))[0];

  return school;
};

export const addSchool = async () => await addDoc(collection(db, 'schools'), schoolMock);
