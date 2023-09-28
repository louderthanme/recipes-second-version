import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  setDoc,
  getDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
  addDoc,
  deleteField,
  query,
  where,
} from 'firebase/firestore/lite';

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  updateProfile,
  signInWithEmailAndPassword,
  signOut, 
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyADhdTtYG1vcZ1J3moLF7Y1H-14VzdPRIo",
  authDomain: "recipes-8e041.firebaseapp.com",
  projectId: "recipes-8e041",
  storageBucket: "recipes-8e041.appspot.com",
  messagingSenderId: "317539405043",
  appId: "1:317539405043:web:6ed215d8441e1ee1657b86",
  measurementId: "G-EWYNP7VSG9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(); // Initialize Firestore
export const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});


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

export const fetchRecipesByUser = async (user) => {
  const userId = user.uid;
  try {
    const q = query(collection(db, 'recipes'), where('ownerUid', '==', userId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
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

export const fetchRecipeByIdFromFirestore = async (id) => {
  try {
      const recipeRef = doc(db, 'recipes', id);
      const recipeDoc = await getDoc(recipeRef);
      console.log("Fetched recipe data from Firestore:", recipeDoc.data());

      if (!recipeDoc.exists()) {
          throw new Error(`Recipe with ID ${id} does not exist!`);
      }

      return { id: recipeDoc.id, ...recipeDoc.data() };
  } catch (error) {
      console.error('Error fetching recipe by ID:', error);
      throw error; // Forward the error so you can catch it elsewhere
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

    // Check if imageUrl exists and is set to null, if so delete the field
    if ('imageUrl' in recipeData && recipeData.imageUrl === null) {
      recipeData = { ...recipeData, imageUrl: deleteField() };  // Use deleteField() to remove the field
    }
    console.log(`Updating recipe in Firestore with ID: ${id}, Data: `, recipeData);
    await updateDoc(recipeRef, recipeData);
    console.log(`Recipe "${recipeData.title}" updated to Firestore successfully!`);
  } catch (error) {
    console.error('Error updating recipe to Firestore:', error);
  }
};



export const deleteRecipeFromFirestore = async (recipe) => {
  console.log(recipe.id)
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
    
    if (user) {
      // If there's a displayName provided, update it.
      if (displayName) {
        await updateProfile(user, {
          displayName: displayName
        });
        console.log('User display name set:', displayName);
      }
      
      // Store the date of creation in Firebase Firestore
      const creationDate = new Date().toISOString();  // Current date and time in ISO format
      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, {
        creationDate: creationDate
      }, { merge: true });  // The merge: true ensures we don't overwrite existing user data
      
      console.log('User created successfully with creation date:', user, creationDate);
    }

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

export const signInWithGoogle = async () => {
  try {
    const userCredential = await signInWithPopup(auth, googleProvider);
    console.log('User signed in with Google successfully:', userCredential);

    const isNewUser = userCredential._tokenResponse.isNewUser;

    console.log("Is New User?", isNewUser);

      
    if(isNewUser) {

      console.log('This is a new user!');
      // Store the date of creation in Firebase Firestore or Realtime Database
      const creationDate = new Date().toISOString();  // Current date and time in ISO format
      const userRef = doc(db, 'users', userCredential.user.uid);
      await setDoc(userRef, {
        creationDate: creationDate
      }, { merge: true }); // The merge: true ensures we don't overwrite existing user data
    } else {
      console.log('This is a returning user!');
    }

    return userCredential;
  } catch (error) {
    console.error('Error signing in with Google:', error);
    throw error;
  }
};


export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

export const signOutUser = async () => await signOut(auth);
