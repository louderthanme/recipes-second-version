import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyA5A6zuSbiRfVUTD2AxkxZSyyFRjJUf5Y8",
    authDomain: "recipes-second-version.firebaseapp.com",
    projectId: "recipes-second-version",
    storageBucket: "recipes-second-version.appspot.com",
    messagingSenderId: "71725641206",
    appId: "1:71725641206:web:a7507594770df750ac6bd7",
    measurementId: "G-0ZWJJWSNCJ"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(); // Initialize Firestore

export const fetchRecipes = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'recipes'));
      return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error('Error fetching recipes:', error);
      return [];
    }
}
export const uploadRecipes = async (recipes) => {
  try {
    await Promise.all(
      recipes.map(async (recipe) => {
        await addDoc(collection(db, 'recipes'), recipe);
        console.log(`Recipe "${recipe.title}" uploaded to Firestore successfully!`);
      })
    );
  } catch (error) {
    console.error('Error uploading recipes to Firestore:', error);
  }
};
  
  