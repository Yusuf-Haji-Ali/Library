import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvf0_hqEgswQd_KkAU2xrb7xIW1Ub88Nw",
  authDomain: "e-commerce-library.firebaseapp.com",
  projectId: "e-commerce-library",
  storageBucket: "e-commerce-library.appspot.com",
  messagingSenderId: "706526880381",
  appId: "1:706526880381:web:d35655b49987c340380714",
};

// init firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();
const auth = getAuth();

// collection ref
const colRef = collection(db, "books");

// get real-time collection data
export const fetchBooksData = async () => {
  try {
    const snapshot = await getDocs(colRef);
    const booksData = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return booksData;
  } catch (error) {
    throw new Error("Error fetching books data: " + error);
  }
};
