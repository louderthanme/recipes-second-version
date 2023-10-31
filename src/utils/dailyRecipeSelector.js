import { useEffect, useState } from 'react';

const useDailyRecipeSelector = (recipes) => {
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [currentDateString, setCurrentDateString] = useState("");

    useEffect(() => {
        if (recipes && recipes.length > 0) {
            const currentDate = new Date();
            const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const dayOfWeekString = daysOfWeek[currentDate.getDay()];
            
            // Get the month
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const monthString = months[currentDate.getMonth()];
            
            // Get the day with its suffix
            const day = currentDate.getDate();
            let daySuffix = 'th';
            
            if (day % 10 === 1 && day !== 11) {
                daySuffix = 'st';
            } else if (day % 10 === 2 && day !== 12) {
                daySuffix = 'nd';
            } else if (day % 10 === 3 && day !== 13) {
                daySuffix = 'rd';
            }
            
            const dayWithSuffix = `${day}${daySuffix}`;
            
            // Get the year
            const year = currentDate.getFullYear();
            
            // Construct the formatted date string
            const currentDateString = `${dayOfWeekString}, ${monthString} ${dayWithSuffix}, ${year}`;
            const recipeIndex = currentDate.getDate() % recipes.length;

            // Handle the case where recipeIndex is negative
            const positiveIndex = recipeIndex >= 0 ? recipeIndex : recipeIndex + recipes.length;

            const selectedRecipe = recipes[positiveIndex + 2 ];
            setSelectedRecipe(selectedRecipe);
            setCurrentDateString(currentDateString);
        } else {
            // Handle the case where recipes is empty
            setSelectedRecipe({ title: "No Recipe Available" });
            setCurrentDateString("");
        }
    }, [recipes]);


    return { selectedRecipe, currentDateString };
};

export default useDailyRecipeSelector;
