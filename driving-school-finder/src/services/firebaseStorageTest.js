import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import firebaseConfig from 'config/firebaseConfig';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the storage service
const storage = getStorage(app);

export const uploadSchoolLogo = async (file) => {

  // Create a storage reference
  const storageRef = ref(storage, 'school/id-num/logo');

  // Upload the file
  const snapshot = await uploadBytes(storageRef, file);
  console.log('Uploaded a blob or file!');
  console.log(snapshot.ref);
};

export const downloadFile = async (filePath) => {
  const storageRef = ref(storage, filePath);

  try {
    const url = await getDownloadURL(storageRef);
    console.log('File available at', url);
    return url;
  } catch (error) {
    console.error('Error downloading file:', error);
  }
};