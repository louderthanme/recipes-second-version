import { useEffect, useState } from 'react';

const useDailyRecipeSelector = (recipes) => {
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [currentDateString, setCurrentDateString] = useState("");

    useEffect(() => {
        if (recipes && recipes.length > 0) {
            const currentDate = new Date();
            const currentDateString = currentDate.toISOString().split('T')[0];
            const recipeIndex = currentDate.getDate() % recipes.length;

            // Handle the case where recipeIndex is negative
            const positiveIndex = recipeIndex >= 0 ? recipeIndex : recipeIndex + recipes.length;

            const selectedRecipe = recipes[positiveIndex];
            setSelectedRecipe(selectedRecipe);
            setCurrentDateString(currentDateString);
        } else {
            // Handle the case where recipes is empty
            setSelectedRecipe({ title: "No Recipe Available" });
            setCurrentDateString("");
        }
    }, [recipes]);

    console.log("selectedRecipe", selectedRecipe);

    return { selectedRecipe, currentDateString };
};

export default useDailyRecipeSelector;
