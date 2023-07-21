import { uploadRecipes } from './utils/firebase-utils.js';
import recipes from '../src/recipe-data.js'

uploadRecipes(recipes); // Upload recipes to Firestore
