import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  setDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
  addDoc
} from 'firebase/firestore/lite';

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  updateProfile,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';


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
export const auth = getAuth(app);

export const flushDatabase = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'recipes'));

    // Delete each document one by one
    const deletePromises = querySnapshot.docs.map((doc) => deleteDoc(doc.ref));
    await Promise.all(deletePromises);

    console.log('Database flushed successfully!');
  } catch (error) {
    console.error('Error flushing database:', error);
  }
};

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
    // First, flush the database before uploading new recipes
    await flushDatabase();

    // Now, upload the new recipes
    await Promise.all(
      recipes.map(async (recipe) => {
        await addDoc(collection(db, 'recipes'), recipe);
        console.log(`Recipe "${recipe.title}" uploaded to Firestore successfully!`);
      })
    );

    console.log('Recipes uploaded successfully!');
  } catch (error) {
    console.error('Error uploading recipes to Firestore:', error);
  }
};

export const uploadRecipeToFirestore = async (recipe) => {
  try {
    const docRef = await addDoc(collection(db, 'recipes'), recipe);
    console.log(`Recipe "${recipe.title}" uploaded to Firestore successfully with ID: ${docRef.id}`);
    return docRef.id; // Return the document reference
  } catch (error) {
    console.error('Error uploading recipe to Firestore:', error);
    throw error;
  }
};



export const updateRecipeInFirestore = async (id, recipeData) => {
  try {
    const recipeRef = doc(db, 'recipes', id);
    await updateDoc(recipeRef, recipeData);
    console.log(`Recipe "${recipeData.title}" updated to Firestore successfully!`);
  } catch (error) {
    console.error('Error updating recipe to Firestore:', error);
  }
}


export const deleteRecipeFromFirestore = async (recipe) => {
  try {
    const recipeRef = doc(db, 'recipes', recipe.id);
    await deleteDoc(recipeRef);
    console.log(`Recipe "${recipe.title}" deleted from Firestore successfully!`);
  } catch (error) {
    console.error('Error deleting recipe from Firestore:', error);
  }
};

export const signUpWithEmailAndPassword = async (auth, email, password, displayName) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    
    if (user && displayName) {
      await updateProfile(user, {
        displayName: displayName
      });
      console.log('User display name set:', displayName);
    }

    console.log('User created successfully:', user);
    return user;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}

export const signInUserWithEmailAndPassword = async (auth, email, password) => {
  if(!email || !password) {
    return;
  }
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  console.log('User signed in successfully:', userCredential);
  return userCredential;
};


export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

export const signOutUser = async () => await signOut(auth);
