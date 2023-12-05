import { initializeApp } from 'firebase/app';

import firebaseConfig from 'config/firebaseConfig';

import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  addDoc,
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

export const addEmptyRatingsDirectory = async (schoolUid) => {
  const docRef = doc(db, 'ratings', schoolUid);
  try {
    await setDoc(docRef, {});
  } catch (error) {
    throw new Error(error);
  }
};

export const addSchool = async (school) => await setDoc(doc(db, 'schools', school.ownerUid), school);

export const updateSchoolRating = async (schoolUid) => {
  const docRef = doc(db, 'ratings', schoolUid);

  try {
    const existingReviews = await getReviewsBySchoolUid(schoolUid);

    const reviewsCount = Object.keys(existingReviews).length;
    const ratingScore = Object.values(existingReviews).reduce((acc, cur) => acc + Number(cur.rating), 0) / reviewsCount;

    await updateDoc(docRef, {
      ratingScore,
      reviewsCount,
    }, { merge: true });

  } catch (error) {
    throw Error(error);
  }
};

export const getReviewsBySchoolUid = async (schoolUid) => {
  try {
    const q = query(collection(db, 'allReviews'), where('schoolId', '==', schoolUid));
    const querySnapshot = await getDocs(q);
    let reviews = [];
    querySnapshot.forEach((doc) => {
      reviews.push(doc.data());
    });

    return reviews;
  } catch (error) {
    throw Error(error);
  }
};

export const getRatingsBySchoolUid = async (schoolUid) => {

  const docRef = doc(db, 'ratings', schoolUid);
  try {
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      throw new Error('Не е намерена директория за рейтинги за тази автошкола');
    }
  } catch (error) {
    throw Error(error);
  }
};

export const addReviewToSchool = async (schoolUid, userUid, review) => {
  const allReviewsCollection = collection(db, 'allReviews');

  try {
    await addDoc(allReviewsCollection, review);

    await updateSchoolRating(schoolUid);

  } catch (error) {
    throw Error(error);
  }
};

export const checkIfUserCanEdit = async (userUid, schoolUid) => {

  try {
    const q = query(
      collection(db, 'allReviews'),
      where('userId', '==', userUid),
      where('schoolId', '==', schoolUid)
    );

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return true;
    } else {
      return false;
    }

  } catch (error) {
    throw new Error(error);
  }

};

export const getReviewsByUserId = async (userUid) => {
  try {
    const q = query(collection(db, 'allReviews'), where('userId', '==', userUid));
    const querySnapshot = await getDocs(q);
    let reviews = [];
    querySnapshot.forEach((doc) => {
      const review = doc.data();
      review.id = doc.id;
      reviews.push(review);
    });

    reviews = await Promise.all(
      reviews.map(
        async review => {
          const school = await getSchoolById(review.schoolId);
          review.schoolName = school.name;
          return review;
        }));

    return reviews;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateReviewByReviewId = async (reviewId, updatedReview) => {
  const reviewDoc = doc(db, 'allReviews', reviewId);

  try {
    await updateDoc(reviewDoc, updatedReview);

    await updateSchoolRating(updatedReview.schoolId);

  } catch (error) {
    throw Error(error);
  }
};

export const deleteReviewByReviewId = async (reviewId, schoolId) => {
  const reviewDoc = doc(db, 'allReviews', reviewId);

  try {
    await deleteDoc(reviewDoc);

    await updateSchoolRating(schoolId);

  } catch (error) {
    throw Error(error);
  }
};

//TODO NEEDS FIX
export const getSchools = async () => {
  const schoolsCol = collection(db, 'schools');
  const schoolsSnapshot = await getDocs(schoolsCol);
  const schoolsList = schoolsSnapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id,
  }));
  return schoolsList;
};

//TODO NEEDS FIX
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