import { initializeApp } from 'firebase/app';

import firebaseConfig from 'config/firebaseConfig';
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  limit,
} from 'firebase/firestore';

import { matchSchoolsWithRatings, sortDesc } from 'utils/schools';
import { COLLECTIONS } from 'CONSTANTS';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//CustomUserData is used for storing additional data for the user
export const setCustomUserData = async (uid, { role, firstName, lastName }) => {
  try {
    await setDoc(doc(db, COLLECTIONS.users, uid), {
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
    const docRef = doc(db, COLLECTIONS.users, uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateCustomUserData = async (uid, { firstName, lastName }) => {
  const docRef = doc(db, COLLECTIONS.users, uid);

  try {
    await updateDoc(docRef, { firstName, lastName });
  } catch (error) {
    throw new Error(error);
  }
};

//School related services
export const getSchoolByOwnerUid = async (ownerUid) => {
  try {
    const q = query(
      collection(db, COLLECTIONS.schools),
      where('ownerUid', '==', ownerUid)
    );

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

export const getSchoolById = async (schoolId) => {
  try {
    const docRef = doc(db, COLLECTIONS.schools, schoolId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    }

  } catch (error) {
    throw new Error(error);
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

export const getAllSchools = async () => {
  //Function needs to change for more than 200 schools and make the filtering on the backend
  try {
    const schoolsCol = collection(db, COLLECTIONS.schools);
    const q = query(schoolsCol, limit(200));
    const schoolsSnapshot = await getDocs(q);
    const schoolsList = schoolsSnapshot.docs.map(doc => doc.data());
    return Object.values(schoolsList);
  } catch (error) {
    throw Error(error);
  }
};

export const getAllSchoolsWithRatingsSorted = async () => {
  try {
    const schools = await getAllSchools();
    const ratings = await getAllRatings();

    const schoolsWithRatings = matchSchoolsWithRatings(schools, ratings);
    const schoolsWithRatingsSorted = sortDesc(schoolsWithRatings, 'reviewsCount');

    return schoolsWithRatingsSorted;
  } catch (error) {
    throw Error(error);
  }
};

export const addSchool = async (school) => {
  try {
    await setDoc(doc(db, COLLECTIONS.schools, school.ownerUid), school);

  } catch (error) {
    throw Error(error);
  }
};

export const deleteSchoolBySchoolId = async (schoolId) => {
  const schoolDoc = doc(db, COLLECTIONS.schools, schoolId);
  try {
    await deleteDoc(schoolDoc);
  } catch (error) {
    throw Error(error);
  }
};

//School Reviews related services
export const addEmptyRatingsDirectoryIfNotExist = async (schoolUid) => {
  //Intentionally leaving out existing reviews and ratings, 
  //so user cannot just reenter the school and delete all reviews
  const docRef = doc(db, COLLECTIONS.ratings, schoolUid);
  const docSnap = await getDoc(docRef);

  try {
    if (docSnap.exists()) return;
    await setDoc(docRef, {});
  } catch (error) {
    throw new Error(error);
  }
};

export const getReviewsBySchoolUid = async (schoolUid) => {
  try {
    const q = query(
      collection(db, COLLECTIONS.allReviews),
      where('schoolId', '==', schoolUid)
    );
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

export const getReviewsByUserId = async (userUid) => {

  try {
    const q = query(
      collection(db, COLLECTIONS.allReviews),
      where('userId', '==', userUid)
    );

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
          review.schoolName = school?.name
            ||
            (review.schoolName && `${review.schoolName} (неактивна)`)
            || 'Автошколата е неактивна';

          return review;
        }));

    return reviews;
  } catch (error) {
    throw new Error(error);
  }
};

export const addReviewToSchool = async (schoolUid, review) => {
  const allReviewsCollection = collection(db, COLLECTIONS.allReviews);

  try {
    await addDoc(allReviewsCollection, review);

    await updateSchoolRating(schoolUid);

  } catch (error) {
    throw Error(error);
  }
};

export const updateReviewByReviewId = async (reviewId, updatedReview) => {
  const reviewDoc = doc(db, COLLECTIONS.allReviews, reviewId);

  try {
    await updateDoc(reviewDoc, updatedReview);

    await updateSchoolRating(updatedReview.schoolId);

  } catch (error) {
    throw Error(error);
  }
};

export const deleteReviewByReviewId = async (reviewId, schoolId) => {
  const reviewDoc = doc(db, COLLECTIONS.allReviews, reviewId);

  try {
    await deleteDoc(reviewDoc);

    await updateSchoolRating(schoolId);

  } catch (error) {
    throw Error(error);
  }
};

//School Rating related services
export const getRatingsBySchoolUid = async (schoolUid) => {

  const docRef = doc(db, COLLECTIONS.ratings, schoolUid);
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

export const getAllRatings = async () => {
  //Function needs to change for more than 200 schools and make the filtering on the backend
  try {
    const ratingsCol = collection(db, COLLECTIONS.ratings);
    const q = query(ratingsCol, limit(200));
    const ratingsSnapshot = await getDocs(q);

    const ratingsList = ratingsSnapshot.docs.map(doc => ({
      ...doc.data(),
      schoolId: doc.id,
    }));
    return Object.values(ratingsList);
  } catch (error) {
    throw Error(error);
  }
};

export const updateSchoolRating = async (schoolUid) => {
  const docRef = doc(db, COLLECTIONS.ratings, schoolUid);

  try {
    const existingReviews = await getReviewsBySchoolUid(schoolUid);

    const reviewsCount = Object.keys(existingReviews).length;
    const ratingScore = Object
      .values(existingReviews)
      .reduce((acc, cur) => acc + Number(cur.rating), 0) / reviewsCount;

    await updateDoc(docRef, {
      ratingScore,
      reviewsCount,
    }, { merge: true });

  } catch (error) {
    throw Error(error);
  }
};

//Others
export const checkIfUserCanEdit = async (userUid, schoolUid) => {

  try {
    const q = query(
      collection(db, COLLECTIONS.allReviews),
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

export const getFaq = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, COLLECTIONS.faq));
    const faq = querySnapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
    }));
    return faq;

  } catch (error) {
    throw new Error(error);
  }
};
