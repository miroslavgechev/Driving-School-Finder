import { initializeApp } from 'firebase/app';
import { collection, getDocs, doc, getFirestore } from 'firebase/firestore';
import { updateDoc } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyBnlKt46khfli-IfrzjGf6tXCxYn3YVhuM",
    authDomain: "driving-school-finder.firebaseapp.com",
    projectId: "driving-school-finder",
    storageBucket: "driving-school-finder.appspot.com",
    messagingSenderId: "777170324804",
    appId: "1:777170324804:web:039ae9240594f4402e1b11"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export async function addDrivingSchool() {
    const object = {
        "name": "Test School 3",
        "logoUrl": "someLogo",
        "address": {
            "city": "Sofia",
            "region": "Sredets",
            "street": "17 Center Str.",
            "coordinates": {
                "lng": 30,
                "lat": 30
            }
        }
    }

    const docRef = await db.collection('schools').doc('new school').set(object)
    console.log("Document written with ID: ", docRef.id);
    console.log(docRef);
    // getDrivingSchools();
}

export async function getDrivingSchools() {
    const drivingSchoolsCol = collection(db, 'schools');
    const drivingSchoolsSnapshot = await getDocs(drivingSchoolsCol);
    const drivingSchoolsList = drivingSchoolsSnapshot.docs.map(doc => doc.data());
    console.log(drivingSchoolsList);
}


export async function updateDrivingSchool() {
    const schoolRef = doc(db, 'schools', 'testSchool2');

    try {
        await updateDoc(schoolRef, { city: "Troyan" });
        console.log("Update successful");
    } catch (error) {
        console.error("Error updating the document:", error);
        throw error; // or handle it in another manner
    }

}