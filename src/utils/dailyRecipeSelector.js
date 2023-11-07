import { useEffect, useState } from 'react';

/* Custom hook to select a daily recipe from a list of recipes. */
const useDailyRecipeSelector = (recipes) => {
    // State for the selected recipe
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    // State for the current date in string format
    const [currentDateString, setCurrentDateString] = useState("");

    // Effect hook to update the selected recipe and date string when recipes change
    useEffect(() => {
        if (recipes && recipes.length > 0) {
            // Create a new date object for today
            const currentDate = new Date();
            // Array of days, used to map the day number to a day name
            const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            // Get today's day of the week as a string
            const dayOfWeekString = daysOfWeek[currentDate.getDay()];
            
            // Array of months, used to map the month number to a month name
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            // Get the current month as a string
            const monthString = months[currentDate.getMonth()];
            
            // Get today's date and determine the correct suffix for the day
            const day = currentDate.getDate();
            let daySuffix = 'th'; // Default suffix
            if (day % 10 === 1 && day !== 11) daySuffix = 'st';
            else if (day % 10 === 2 && day !== 12) daySuffix = 'nd';
            else if (day % 10 === 3 && day !== 13) daySuffix = 'rd';
            const dayWithSuffix = `${day}${daySuffix}`; // Combine day with its suffix
            
            // Get the current year
            const year = currentDate.getFullYear();
            
            // Construct the formatted current date string
            const currentDateString = `${dayOfWeekString}, ${monthString} ${dayWithSuffix}, ${year}`;
            // Calculate the index for the recipe based on the current day
            const recipeIndex = currentDate.getDate() % recipes.length;
            
            // Ensure the index is positive
            const positiveIndex = recipeIndex >= 0 ? recipeIndex : recipeIndex + recipes.length;

            // Select the recipe at the calculated index
            const selectedRecipe = recipes[positiveIndex];
            // Update state with the selected recipe and the current date string
            setSelectedRecipe(selectedRecipe);
            setCurrentDateString(currentDateString);
        } else {
            // If no recipes are available, set default states
            setSelectedRecipe({ title: "No Recipe Available" });
            setCurrentDateString("");
        }
    }, [recipes]); // This effect runs whenever the recipes array changes

    // Return the selected recipe and current date string
    return { selectedRecipe, currentDateString };
};

// Export the custom hook
export default useDailyRecipeSelector;
