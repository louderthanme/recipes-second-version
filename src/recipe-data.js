import { v4 as uuidv4 } from 'uuid';


const recipes = [
   {
    ownerUid: "PXhGH3KPq2dBkX4vsJkJkT476OT2",
    title: "Classic Chocolate Chip Cookies",
    ingredients: [
      { name: "all-purpose flour", quantity: "2 1/4", unit: "cups" },
      { name: "baking soda", quantity: "1", unit: "teaspoon" },
      { name: "salt", quantity: "1", unit: "teaspoon" },
      { name: "unsalted butter", quantity: "1", unit: "cup" },
      { name: "granulated sugar", quantity: "3/4", unit: "cup" },
      { name: "brown sugar", quantity: "3/4", unit: "cup" },
      { name: "vanilla extract", quantity: "1", unit: "teaspoon" },
      { name: "large eggs", quantity: "2", unit: "" },
      { name: "chocolate chips", quantity: "2", unit: "cups" }
    ],
    time: {
      prep: [15, "minutes"],
      cook: [10, "minutes"]
    },
    imageUrl: "http://res.cloudinary.com/recipeb00k/image/upload/v1693927572/ico5eurursodimaxuyik.jpg",
    instructions: [
      { id: "1", step: "Preheat your oven to 375°F (190°C). Line a baking sheet with parchment paper." },
      { id: "2", step: "In a medium bowl, whisk together the all-purpose flour, baking soda, and salt. Set aside." },
      { id: "3", step: "In a large bowl, beat the unsalted butter, granulated sugar, brown sugar, and vanilla extract until creamy." },
      { id: "4", step: "Add the eggs one at a time, beating well after each addition." },
      { id: "5", step: "Gradually add the flour mixture to the wet ingredients, mixing just until combined." },
      { id: "6", step: "Stir in the chocolate chips." },
      { id: "7", step: "Drop rounded tablespoons of dough onto the prepared baking sheet." },
      { id: "8", step: "Bake for 9-11 minutes or until the cookies are golden brown." },
      { id: "9", step: "Remove from the oven and allow to cool on the baking sheet for a few minutes before transferring to a wire rack to cool completely." }
    ]
  },
  
  
];


export default recipes