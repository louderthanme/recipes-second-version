import { v4 as uuidv4 } from 'uuid';


const recipes = [
  {
    ownerUid: "0OzjQN80hvdKxPaAEPJPGatT2JP2", 
    title: "Classic Chocolate Chip Cookies",
    ingredients: [
      { name: "all-purpose flour", quantity: "2 1/4", unit: "cup(s)" },
      { name: "baking soda", quantity: "1", unit: "teaspoon(s)" },
      { name: "salt", quantity: "1", unit: "teaspoon(s)" },
      { name: "unsalted butter", quantity: "1", unit: "cup(s)" },
      { name: "granulated sugar", quantity: "3/4", unit: "cup(s)" },
      { name: "brown sugar", quantity: "3/4", unit: "cup(s)" },
      { name: "vanilla extract", quantity: "1", unit: "teaspoon(s)" },
      { name: "large eggs", quantity: "2", unit: "" },
      { name: "chocolate chips", quantity: "2", unit: "cup(s)" }
    ],
    time: {
      prep: ["0", "15"], //hours, minutes
      cook: ["0", "15"]
    },
    imageUrls: [
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693927572/ico5eurursodimaxuyik.jpg",
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693927572/ico5eurursodimaxuyik.jpg",
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693927572/ico5eurursodimaxuyik.jpg"
    ],
    instructions: [
      { id: "1", step: "Preheat your oven to 375°F (190°C). Line a baking sheet with parchment paper." },
      { id: "2", step: "In a medium bowl, whisk together the all-purpose flour, baking soda, and salt. Set aside." },
      { id: "3", step: "In a large bowl, beat the unsalted butter, granulated sugar, brown sugar, and vanilla extract until creamy." },
      { id: "4", step: "Add the eggs one at a time, beating well after each addition." },
      { id: "5", step: "Gradually add the flour mixture to the wet ingredients, mixing just until combined." },
      { id: "6", step: "Stir in the chocolate chips." },
      { id: "7", step: "Drop rounded tablespoon(s)s of dough onto the prepared baking sheet." },
      { id: "8", step: "Bake for 9-11 minutes or until the cookies are golden brown." },
      { id: "9", step: "Remove from the oven and allow to cool on the baking sheet for a few minutes before transferring to a wire rack to cool completely." }
    ],
    tags: ["dessert", "cookies", "chocolate", "baking", "sweet", "oven-baked"]
  },
  {
    ownerUid: "0OzjQN80hvdKxPaAEPJPGatT2JP2",
    title: "Classic Spaghetti Carbonara",
    ingredients: [
      { name: "spaghetti", quantity: "400", unit: "gram(s)" },
      { name: "guanciale or pancetta", quantity: "150", unit: "gram(s)" },
      { name: "pecorino cheese", quantity: "1", unit: "cup(s)" },
      { name: "large eggs", quantity: "4", unit: "" },
      { name: "freshly ground black pepper", quantity: "1", unit: "teaspoon(s)" },
      { name: "salt", quantity: "to taste", unit: "" }
    ],
    time: {
      prep: ["0", "15"], //hours, minutes
      cook: ["0", "15"]
    },
    imageUrls: [
      "https://res.cloudinary.com/recipeb00k/image/upload/v1693928473/csctgn8gbmh9dtdioewg.jpg",
      "https://res.cloudinary.com/recipeb00k/image/upload/v1693928473/csctgn8gbmh9dtdioewg.jpg",
      "https://res.cloudinary.com/recipeb00k/image/upload/v1693928473/csctgn8gbmh9dtdioewg.jpg"
    ],
    instructions: [
      { id: "1", step: "Bring a large pot of salted water to boil for the spaghetti." },
      { id: "2", step: "In a separate large skillet over medium heat, cook the guanciale or pancetta until it becomes crispy. Remove from heat and set aside." },
      { id: "3", step: "In a bowl, whisk together the eggs, pecorino cheese, and freshly ground black pepper." },
      { id: "4", step: "Cook the spaghetti in the boiling water until al dente. Reserve about a cup(s) of pasta cooking water and then drain the spaghetti." },
      { id: "5", step: "Add the drained spaghetti to the skillet with the guanciale or pancetta. Toss to combine." },
      { id: "6", step: "Remove the skillet from heat, and quickly mix in the egg and cheese mixture. Stir rapidly to avoid scrambling the eggs." },
      { id: "7", step: "If the sauce is too thick, add a little reserved pasta cooking water to reach your desired consistency." },
      { id: "8", step: "Serve immediately with additional pecorino cheese and black pepper on top." }
    ],
    tags: ["pasta", "Italian", "carbonara", "main course", "spaghetti", "guanciale", "pecorino", "egg-based"]
  },
  {
    ownerUid: "0OzjQN80hvdKxPaAEPJPGatT2JP2",
    title: "Vegan Coconut Curry",
    ingredients: [
      { name: "coconut oil", quantity: "2", unit: "tablespoon(s)" },
      { name: "onion", quantity: "1", unit: "medium" },
      { name: "garlic cloves", quantity: "4", unit: "" },
      { name: "ginger", quantity: "1", unit: "inch" },
      { name: "curry powder", quantity: "2", unit: "tablespoon(s)" },
      { name: "chickpeas", quantity: "1", unit: "can (15 oz)" },
      { name: "coconut milk", quantity: "400", unit: "milliliter(s)" },
      { name: "salt", quantity: "to taste", unit: "" },
      { name: "pepper", quantity: "to taste", unit: "" },
      { name: "spinach", quantity: "2", unit: "cup(s)" }
    ],
    time: {
      prep: ["0", "15"], //hours, minutes
      cook: ["0", "15"]
    },
    imageUrls: [
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693929261/ansetnt1oldafetdadcb.jpg",
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693929261/ansetnt1oldafetdadcb.jpg",
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693929261/ansetnt1oldafetdadcb.jpg"
    ],
    instructions: [
      { id: "1", step: "Heat coconut oil in a large pot over medium heat." },
      { id: "2", step: "Dice the onion, mince the garlic, and grate the ginger. Add them to the pot and sauté until the onion is translucent." },
      { id: "3", step: "Add the curry powder to the pot and stir well to combine with the onion mixture." },
      { id: "4", step: "Drain and rinse the chickpeas, then add them to the pot. Stir to coat them with the curry mixture." },
      { id: "5", step: "Pour in the coconut milk and bring the mixture to a gentle boil. Reduce heat and simmer for 10 minutes." },
      { id: "6", step: "Taste and adjust seasoning with salt and pepper as needed." },
      { id: "7", step: "Add the spinach to the pot and stir until wilted." },
      { id: "8", step: "Serve hot, ideally over rice or with bread." }
    ],
    tags: ["vegan", "curry", "coconut", "chickpeas", "spinach", "gluten-free", "dinner", "main course"]
  },
  {
    ownerUid: "0OzjQN80hvdKxPaAEPJPGatT2JP2",
    title: "Chicken Marsala",
    ingredients: [
      { name: "chicken breasts", quantity: "4", unit: "" },
      { name: "all-purpose flour", quantity: "1", unit: "cup(s)" },
      { name: "salt", quantity: "1", unit: "teaspoon(s)" },
      { name: "black pepper", quantity: "1/2", unit: "teaspoon(s)" },
      { name: "olive oil", quantity: "2", unit: "tablespoon(s)" },
      { name: "butter", quantity: "2", unit: "tablespoon(s)" },
      { name: "Marsala wine", quantity: "3/4", unit: "cup(s)" },
      { name: "chicken stock", quantity: "3/4", unit: "cup(s)" },
      { name: "mushrooms", quantity: "8", unit: "oz" },
      { name: "garlic", quantity: "2", unit: "cloves" },
      { name: "parsley", quantity: "1", unit: "tablespoon(s)" }
    ],
    time: {
      prep: ["0", "15"], //hours, minutes
      cook: ["0", "15"]
    },
    imageUrls: [
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693929704/nvhhgbhpev54lmvivn7o.jpg",
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693929704/nvhhgbhpev54lmvivn7o.jpg",
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693929704/nvhhgbhpev54lmvivn7o.jpg"
    ],
    instructions: [
      { id: "1", step: "Place chicken breasts between sheets of plastic wrap and pound them to an even thickness of about 1/2 inch." },
      { id: "2", step: "In a shallow dish, combine flour, salt, and pepper. Dredge each chicken breast in the mixture, shaking off excess." },
      { id: "3", step: "Heat olive oil and 1 tablespoon(s) of butter in a large skillet over medium-high heat. Add the chicken and cook for about 4 minutes per side, or until browned. Remove chicken and set aside." },
      { id: "4", step: "In the same skillet, add the remaining butter and mushrooms. Cook until the mushrooms are browned." },
      { id: "5", step: "Add minced garlic to the skillet and sauté for about 1 minute." },
      { id: "6", step: "Pour in Marsala wine and chicken stock, bringing the mixture to a boil. Reduce heat and simmer for 10 minutes, or until the sauce is reduced by half." },
      { id: "7", step: "Return the chicken to the skillet, and simmer in the sauce for 3-5 minutes, or until the chicken is cooked through." },
      { id: "8", step: "Garnish with chopped parsley before serving." }
    ],
    tags: ["chicken", "marsala", "wine", "mushrooms", "Italian", "main course", "dinner"]
  },
  {
    ownerUid: "0OzjQN80hvdKxPaAEPJPGatT2JP2",
    title: "Vegetable Stir-Fry",
    ingredients: [
      { name: "carrot", quantity: "1", unit: "" },
      { name: "bell pepper", quantity: "1", unit: "" },
      { name: "broccoli", quantity: "1", unit: "cup(s)" },
      { name: "snap peas", quantity: "1", unit: "cup(s)" },
      { name: "soy sauce", quantity: "1/4", unit: "cup(s)" },
      { name: "sesame oil", quantity: "2", unit: "tablespoon(s)" },
      { name: "garlic", quantity: "4", unit: "gram(s)" },
      { name: "ginger", quantity: "10", unit: "gram(s)" },
      { name: "cornstarch", quantity: "1", unit: "tablespoon(s)" },
      { name: "water", quantity: "1/4", unit: "cup(s)" }
    ],
    time: {
      prep: ["0", "15"], //hours, minutes
      cook: ["0", "15"]
    },
    imageUrls: [
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693930060/t09wpseys6zgdgl7l0zl.jpg",
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693930060/t09wpseys6zgdgl7l0zl.jpg",
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693930060/t09wpseys6zgdgl7l0zl.jpg"
    ],
    instructions: [
      { id: "1", step: "Prepare all the vegetables by cutting them into bite-sized pieces." },
      { id: "2", step: "In a small bowl, mix together the soy sauce, sesame oil, minced garlic, and grated ginger." },
      { id: "3", step: "In another small bowl, make a slurry by mixing the cornstarch and water." },
      { id: "4", step: "Heat a wok or large skillet over high heat. Once hot, add 1 tablespoon(s) of sesame oil." },
      { id: "5", step: "Add the prepared vegetables to the wok and stir-fry for 5-7 minutes or until tender-crisp." },
      { id: "6", step: "Pour the soy sauce mixture over the vegetables and stir well to combine." },
      { id: "7", step: "Add the cornstarch slurry to the wok and continue to stir. Cook for another 2-3 minutes until the sauce thickens." },
      { id: "8", step: "Serve immediately over rice or noodles." }
    ],
    tags: ["vegetable", "stir-fry", "Asian", "main course", "vegan", "dinner", "vegetarian"]
  },
  {
    ownerUid: "0OzjQN80hvdKxPaAEPJPGatT2JP2",
    title: "Banana Bread",
    ingredients: [
      { name: "ripe bananas", quantity: "3", unit: "" },
      { name: "all-purpose flour", quantity: "1 1/2", unit: "cup(s)" },
      { name: "sugar", quantity: "3/4", unit: "cup(s)" },
      { name: "unsalted butter", quantity: "1/2", unit: "cup(s)" },
      { name: "eggs", quantity: "2", unit: "" },
      { name: "vanilla extract", quantity: "1", unit: "teaspoon(s)" },
      { name: "baking soda", quantity: "1", unit: "teaspoon(s)" },
      { name: "salt", quantity: "1/4", unit: "teaspoon(s)" },
      { name: "chopped walnuts", quantity: "1/2", unit: "cup(s)" }
    ],
    time: {
      prep: ["0", "15"], //hours, minutes
      cook: ["0", "15"]
    },
    imageUrls: [
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693930169/dl6owvop8pvpus61yywu.webp",
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693930169/dl6owvop8pvpus61yywu.webp",
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693930169/dl6owvop8pvpus61yywu.webp"
    ],
    instructions: [
      { id: "1", step: "Preheat your oven to 350°F (175°C). Grease a 9x5-inch loaf pan." },
      { id: "2", step: "In a large mixing bowl, mash the ripe bananas until smooth." },
      { id: "3", step: "Melt the unsalted butter and add it to the mashed bananas." },
      { id: "4", step: "Beat in the sugar, eggs, and vanilla extract." },
      { id: "5", step: "In a separate bowl, combine the all-purpose flour, baking soda, and salt." },
      { id: "6", step: "Gently fold the dry ingredients into the wet mixture until just combined. Do not overmix." },
      { id: "7", step: "Fold in the chopped walnuts." },
      { id: "8", step: "Pour the batter into the prepared loaf pan and smooth the top with a spatula." },
      { id: "9", step: "Bake for 60 minutes, or until a toothpick inserted into the center comes out clean." },
      { id: "10", step: "Allow the banana bread to cool in the pan for 10 minutes before transferring it to a wire rack to cool completely." }
    ],
    tags: ["banana", "bread", "dessert", "sweet", "breakfast", "snack", "walnuts"]
  },
  {
    ownerUid: "0OzjQN80hvdKxPaAEPJPGatT2JP2",
    title: "Mango and Chili-Glazed Chicken Tacos",
    ingredients: [
      { name: "chicken breasts", quantity: "2", unit: "pieces" },
      { name: "mango", quantity: "1", unit: "whole" },
      { name: "chili sauce", quantity: "1/4", unit: "cup(s)" },
      { name: "tortillas", quantity: "6", unit: "pieces" },
      { name: "red onion", quantity: "1", unit: "whole" },
      { name: "lime", quantity: "1", unit: "whole" },
      { name: "fresh cilantro", quantity: "1/4", unit: "cup(s)" },
      { name: "olive oil", quantity: "2", unit: "tablespoon(s)" },
      { name: "salt", quantity: "1", unit: "teaspoon(s)" }, 
      { name: "black pepper", quantity: "1/2", unit: "teaspoon(s)" } 
    ],
    time: {
      prep: ["0", "15"], //hours, minutes
      cook: ["0", "15"]
    },
    imageUrls: [
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693930387/xqraombcrfwikep1cajf.jpg",
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693930387/xqraombcrfwikep1cajf.jpg",
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693930387/xqraombcrfwikep1cajf.jpg"
    ],
    instructions: [
      { id: "1", step: "Marinate chicken breasts with half of the chili sauce, juice of half a lime, salt, and pepper. Let sit for at least 15 minutes." },
      { id: "2", step: "Peel and dice the mango, and chop the red onion and cilantro." },
      { id: "3", step: "In a skillet, heat 1 tablespoon(s) of olive oil over medium heat. Add the marinated chicken and cook until done, about 6-8 minutes per side depending on thickness. Remove and let rest for a few minutes before slicing." },
      { id: "4", step: "In the same skillet, add the remaining olive oil and sauté the red onion until translucent." },
      { id: "5", step: "Add the diced mango and remaining chili sauce to the skillet. Cook for about 2-3 minutes, stirring occasionally." },
      { id: "6", step: "Slice the cooked chicken into strips and add to the mango-chili mixture. Stir well to combine." },
      { id: "7", step: "Warm the tortillas in a separate skillet or directly over an open flame until pliable." },
      { id: "8", step: "Assemble the tacos: Place some of the chicken-mango mixture on each tortilla. Top with fresh cilantro and a squeeze of lime juice." }
    ],
    tags: ["mango", "chicken", "tacos", "chili", "spicy", "main course", "mexican"]
  }
  ,
  {
    ownerUid: "0OzjQN80hvdKxPaAEPJPGatT2JP2",
    title: "Blueberry and Mint Iced Tea",
    ingredients: [
      { name: "water", quantity: "4", unit: "cup(s)" },
      { name: "black tea bags", quantity: "2", unit: "pieces" },
      { name: "blueberries", quantity: "1", unit: "cup(s)" },
      { name: "fresh mint leaves", quantity: "12", unit: "leaves" }, // Opted for the higher end of the range provided
      { name: "sugar", quantity: "1/2", unit: "cup(s)" },
      { name: "ice cubes", quantity: "1", unit: "cup(s)" }, // Assuming 1 cup(s) of ice cubes for plausibility
      { name: "lemon slices", quantity: "2", unit: "slices" }, // Assuming 2 slices for garnish
      { name: "mint sprigs", quantity: "2", unit: "sprigs" } // Assuming 2 sprigs for garnish
    ],
    time: {
      prep: ["0", "15"], //hours, minutes
      cook: ["0", "15"]
    },
    imageUrls: [
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693930707/xg4yjy83j82lfaatzrzj.jpg",
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693930707/xg4yjy83j82lfaatzrzj.jpg",
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693930707/xg4yjy83j82lfaatzrzj.jpg"
    ],
    instructions: [
      { id: "1", step: "In a saucepan, bring 4 cup(s) of water to a boil. Once boiling, remove from heat and add the tea bags. Allow to steep for 5 minutes." },
      { id: "2", step: "While the tea is steeping, prepare a simple syrup by combining the sugar and 1/2 cup(s) of water in a small saucepan. Stir over low heat until the sugar is fully dissolved." },
      { id: "3", step: "Add the blueberries and mint leaves to the simple syrup. Simmer for an additional 5 minutes, muddling the blueberries and mint with a spoon to release their flavors." },
      { id: "4", step: "Remove the tea bags from the steeped tea and discard. Combine the tea with the blueberry-mint simple syrup in a large pitcher." },
      { id: "5", step: "Allow the mixture to cool to room temperature before transferring to the refrigerator to chill." },
      { id: "6", step: "Serve the iced tea over ice cubes, garnished with lemon slices and mint sprigs." }
    ],
    tags: ["blueberry", "mint", "iced tea", "drink", "refreshing", "summer"]
  },
  {
    ownerUid: "0OzjQN80hvdKxPaAEPJPGatT2JP2",
    title: "Vegetarian Sushi Bowl",
    ingredients: [
      { name: "sushi rice", quantity: "1", unit: "cup(s)" },
      { name: "water", quantity: "1 1/2", unit: "cup(s)" },
      { name: "rice vinegar", quantity: "2", unit: "tablespoon(s)" },
      { name: "sugar", quantity: "1", unit: "tablespoon(s)" },
      { name: "avocado", quantity: "1", unit: "piece" },
      { name: "cucumber", quantity: "1", unit: "piece" },
      { name: "carrot", quantity: "1", unit: "piece" },
      { name: "edamame", quantity: "1", unit: "cup(s)" },
      { name: "nori sheets", quantity: "2", unit: "sheets" },
      { name: "soy sauce", quantity: "2", unit: "tablespoon(s)" }, // Assuming 2 tablespoon(s) for serving
      { name: "sesame seeds", quantity: "1", unit: "teaspoon(s)" } // Assuming 1 teaspoon(s) for garnish
    ],
    time: {
      prep: ["0", "15"], //hours, minutes
      cook: ["0", "15"]
    },
    imageUrls: [
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693930867/yfy9mb17xeqmrouf5w7b.jpg",
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693930867/yfy9mb17xeqmrouf5w7b.jpg",
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693930867/yfy9mb17xeqmrouf5w7b.jpg"
    ],
    instructions: [
      { id: "1", step: "Rinse the sushi rice until the water runs clear. Combine with 1 1/2 cup(s) of water in a saucepan. Bring to a boil, then reduce heat to low, cover, and simmer for 20 minutes." },
      { id: "2", step: "In a small bowl, mix together the rice vinegar and sugar until the sugar dissolves. Stir this into the cooked rice and set aside to cool." },
      { id: "3", step: "Dice the avocado, thinly slice the cucumber and carrot, and prepare the edamame according to package instructions." },
      { id: "4", step: "Cut the nori sheets into thin strips." },
      { id: "5", step: "To assemble, divide the rice among bowls. Top with avocado, cucumber, carrot, edamame, and nori strips." },
      { id: "6", step: "Drizzle with soy sauce and garnish with sesame seeds before serving." }
    ],
    tags: ["vegetarian", "sushi bowl", "Japanese", "healthy", "rice", "avocado", "nori"]
  },
  {
    ownerUid: "0OzjQN80hvdKxPaAEPJPGatT2JP2",
    title: "Pumpkin Spice Latte",
    ingredients: [
      { name: "brewed coffee", quantity: "1", unit: "cup(s)" },
      { name: "milk", quantity: "1", unit: "cup(s)" },
      { name: "pumpkin puree", quantity: "2", unit: "tablespoon(s)" },
      { name: "sugar", quantity: "2", unit: "tablespoon(s)" },
      { name: "vanilla extract", quantity: "1", unit: "teaspoon(s)" },
      { name: "pumpkin spice", quantity: "1/2", unit: "teaspoon(s)" },
      { name: "whipped cream", quantity: "2", unit: "tablespoon(s)" }, // Assuming 2 tablespoon(s) for topping
      { name: "cinnamon stick", quantity: "10", unit: "gram(s)" } // Assuming 1 stick for garnish
    ],
    time: {
      prep: ["0", "15"], //hours, minutes
      cook: ["0", "15"]
    },
    imageUrls: [
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693931123/fu3hcxxyg9yia1ry3dul.webp",
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693931123/fu3hcxxyg9yia1ry3dul.webp",
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693931123/fu3hcxxyg9yia1ry3dul.webp"
    ],
    instructions: [
      { id: "1", step: "In a saucepan, combine the milk, pumpkin puree, sugar, and pumpkin spice. Heat over medium heat, stirring constantly, until hot but not boiling." },
      { id: "2", step: "Remove the saucepan from heat and whisk in the vanilla extract." },
      { id: "3", step: "Brew a cup(s) of your favorite coffee." },
      { id: "4", step: "Pour the hot coffee into a mug, followed by the pumpkin spice milk mixture. Stir to combine." },
      { id: "5", step: "Top with whipped cream and garnish with a cinnamon stick, if desired." }
    ],
    tags: ["pumpkin spice", "latte", "coffee", "autumn", "beverage", "caffeine", "pumpkin"]
  },
  {
    ownerUid: "0OzjQN80hvdKxPaAEPJPGatT2JP2",
    title: "Lemon Garlic Roast Chicken",
    ingredients: [
      { name: "chicken", quantity: "4", unit: "pound(s)" },
      { name: "lemons", quantity: "2", unit: "lemons" },
      { name: "garlic cloves", quantity: "6", unit: "cloves" },
      { name: "olive oil", quantity: "1/4", unit: "cup(s)" },
      { name: "rosemary", quantity: "2", unit: "sprigs" },
      { name: "thyme", quantity: "2", unit: "sprigs" },
      { name: "salt", quantity: "1/2", unit: "teaspoon(s)" }, // Estimated the quantity for taste
      { name: "black pepper", quantity: "1/4", unit: "teaspoon(s)" } // Estimated the quantity for taste
    ],
    time: {
      prep: ["0", "15"], //hours, minutes
      cook: ["1", "30"] // Adjusted to match the combined cooking times in the instructions.
    },
    imageUrls: [
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693932220/tilwa9kidxhmadfe4mfc.webp",
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693932220/tilwa9kidxhmadfe4mfc.webp",
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693932220/tilwa9kidxhmadfe4mfc.webp"
    ],
    instructions: [
      { id: "1", step: "Preheat your oven to 425°F (220°C). Place a rack inside a roasting pan." },
      { id: "2", step: "Rinse the chicken inside and out, then pat dry with paper towels." },
      { id: "3", step: "In a bowl, mix together the olive oil, juice of one lemon, minced garlic, salt, and pepper." },
      { id: "4", step: "Rub the olive oil mixture all over the chicken, including the cavity, and under the skin of the breast." },
      { id: "5", step: "Stuff the chicken cavity with rosemary, thyme, and the remaining lemon cut into wedges." },
      { id: "6", step: "Place the chicken on the rack in the roasting pan. Tie the legs together with kitchen twine and tuck the wing tips under the body." },
      { id: "7", step: "Roast the chicken in the preheated oven for about 1.5 hours, or until the internal temperature reaches 165°F (74°C). Baste the chicken with pan juices every 30 minutes." },
      { id: "8", step: "Once done, remove the chicken from the oven and let it rest for 10 minutes before carving." }
    ],
    tags: ["chicken", "roast", "lemon", "garlic", "main dish", "herbs"]
  },
  {
    ownerUid: "0OzjQN80hvdKxPaAEPJPGatT2JP2",
    title: "Vegan Coconut Curry",
    ingredients: [
      { name: "coconut oil", quantity: "2", unit: "tablespoon(s)" },
      { name: "onion", quantity: "1", unit: "onion" },
      { name: "garlic cloves", quantity: "3", unit: "cloves" },
      { name: "ginger", quantity: "1", unit: "inch" },
      { name: "curry powder", quantity: "2", unit: "tablespoon(s)" },
      { name: "turmeric", quantity: "1", unit: "teaspoon(s)" },
      { name: "canned chickpeas", quantity: "1", unit: "cup(s)" },
      { name: "canned coconut milk", quantity: "500", unit: "milliliter(s)" },
      { name: "vegetable broth", quantity: "2", unit: "cup(s)" },
      { name: "spinach", quantity: "2", unit: "cup(s)" },
      { name: "salt", quantity: "1/2", unit: "teaspoon(s)" }, // Estimated the quantity for taste
      { name: "black pepper", quantity: "1/4", unit: "teaspoon(s)" } // Estimated the quantity for taste
    ],
    time: {
      prep: ["0", "15"], //hours, minutes
      cook: ["0", "40"] // Adjusted to match the combined cooking times in the instructions.
    },
    imageUrls: [
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693932317/qjfoadxs8d4viyhlv5kp.jpg",
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693932317/qjfoadxs8d4viyhlv5kp.jpg",
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693932317/qjfoadxs8d4viyhlv5kp.jpg"
    ],
    instructions: [
      { id: "1", step: "Heat the coconut oil in a large pot over medium heat." },
      { id: "2", step: "Dice the onion, mince the garlic and ginger, and add them to the pot. Sauté for 5 minutes until the onion is translucent." },
      { id: "3", step: "Add curry powder and turmeric to the pot and stir well to combine." },
      { id: "4", step: "Rinse and drain the chickpeas, then add them to the pot along with the coconut milk and vegetable broth." },
      { id: "5", step: "Bring to a boil, then reduce heat to low, cover, and simmer for 20 minutes." },
      { id: "6", step: "Wash the spinach and stir it into the pot until wilted. Season with salt and pepper to taste." },
      { id: "7", step: "Serve hot, garnished with a sprinkle of extra curry powder or a dollop of coconut cream, if desired." }
    ],
    tags: ["vegan", "curry", "coconut", "main dish", "chickpeas", "spinach", "spicy"]
  },  
  {
    ownerUid: "0OzjQN80hvdKxPaAEPJPGatT2JP2",
    title: "Blueberry Pancakes",
    ingredients: [
      { name: "all-purpose flour", quantity: "1", unit: "cup(s)" },
      { name: "sugar", quantity: "2", unit: "tablespoon(s)" },
      { name: "baking powder", quantity: "2", unit: "teaspoon(s)" },
      { name: "salt", quantity: "1/4", unit: "teaspoon(s)" },
      { name: "milk", quantity: "3/4", unit: "cup(s)" },
      { name: "egg", quantity: "1", unit: "egg" },
      { name: "unsalted butter", quantity: "2", unit: "tablespoon(s)" },
      { name: "blueberries", quantity: "1", unit: "cup(s)" },
      { name: "additional butter", quantity: "as needed", unit: "tablespoon(s)" } // Changed "for greasing" to "as needed"
    ],
    time: {
      prep: ["0", "15"], //hours, minutes
      cook: ["0", "15"]
    },
    imageUrls: [
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693932404/b7nkeefmq6eh4nokx2xj.jpg",
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693932404/b7nkeefmq6eh4nokx2xj.jpg",
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693932404/b7nkeefmq6eh4nokx2xj.jpg"
    ],
    instructions: [
      { id: "1", step: "In a large bowl, mix together the flour, sugar, baking powder, and salt." },
      { id: "2", step: "In another bowl, whisk together the milk, egg, and melted butter." },
      { id: "3", step: "Combine the wet and dry ingredients, stirring just until the batter comes together. Gently fold in the blueberries." },
      { id: "4", step: "Heat a non-stick skillet or griddle over medium heat and lightly grease with additional butter." },
      { id: "5", step: "Pour 1/4 cup(s) of batter onto the skillet for each pancake. Cook until bubbles form on the surface, then flip and cook until golden brown on the other side." },
      { id: "6", step: "Serve immediately, topped with additional blueberries, butter, and your choice of syrup." }
    ],
    tags: ["breakfast", "pancakes", "blueberries", "dessert", "sweet", "vegetarian"]
  },
  {
    ownerUid: "0OzjQN80hvdKxPaAEPJPGatT2JP2",
    title: "Homemade Sushi Rolls",
    ingredients: [
      { name: "sushi rice", quantity: "2", unit: "cup(s)" },
      { name: "water", quantity: "2 1/2", unit: "cup(s)" },
      { name: "rice vinegar", quantity: "1/4", unit: "cup(s)" },
      { name: "sugar", quantity: "1", unit: "tablespoon(s)" },
      { name: "salt", quantity: "1/2", unit: "teaspoon(s)" },
      { name: "nori sheets", quantity: "4", unit: "sheets" },
      { name: "cucumber", quantity: "1", unit: "cucumber" },
      { name: "avocado", quantity: "1", unit: "avocado" },
      { name: "smoked salmon", quantity: "1/2", unit: "pound(s)" },
      { name: "soy sauce", quantity: "as needed", unit: "tablespoon(s)" }, // Changed "for dipping" to "as needed"
      { name: "wasabi", quantity: "as needed", unit: "tablespoon(s)" }    // Changed "for dipping" to "as needed"
    ],
    time: {
      prep: ["0", "15"], //hours, minutes
      cook: ["0", "15"]
    },
    imageUrls: [
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693932501/ni0buqrcmpb3mnqmtzgf.jpg",
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693932501/ni0buqrcmpb3mnqmtzgf.jpg",
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693932501/ni0buqrcmpb3mnqmtzgf.jpg"
    ],
    instructions: [
      { id: "1", step: "Rinse the sushi rice under cold water until the water runs clear. Combine with 2 1/2 cup(s) water and bring to a boil. Reduce heat to low, cover, and cook for 20 minutes. Let it sit, covered, for an additional 10 minutes." },
      { id: "2", step: "Combine rice vinegar, sugar, and salt in a small saucepan. Heat until the sugar dissolves. Fold this mixture into the cooked rice until well combined. Let the rice cool to room temperature." },
      { id: "3", step: "Cut the cucumber, avocado, and smoked salmon into thin strips." },
      { id: "4", step: "Place a nori sheet, shiny side down, on a bamboo sushi rolling mat. Wet your fingers to prevent the rice from sticking and evenly spread a layer of rice over the nori, leaving a small margin at the top." },
      { id: "5", step: "Arrange strips of cucumber, avocado, and smoked salmon horizontally on the rice." },
      { id: "6", step: "Using the bamboo mat as a guide, tightly roll the nori around the fillings. Seal the edge with a little water." },
      { id: "7", step: "Slice the roll into 6-8 pieces using a sharp, wet knife." },
      { id: "8", step: "Serve with soy sauce and wasabi." }
    ],
    tags: ["sushi", "japanese", "fish", "dinner", "seafood", "rolls"]
  },  
  {
    ownerUid: "0OzjQN80hvdKxPaAEPJPGatT2JP2",
    title: "Vegan Chocolate Avocado Smoothie",
    ingredients: [
      { name: "avocado", quantity: "1", unit: "avocado" },
      { name: "banana", quantity: "1", unit: "banana" },
      { name: "unsweetened cocoa powder", quantity: "2", unit: "tablespoon(s)" },
      { name: "almond milk", quantity: "1", unit: "cup(s)" },
      { name: "maple syrup", quantity: "2", unit: "tablespoon(s)" },
      { name: "vanilla extract", quantity: "1", unit: "teaspoon(s)" },
      { name: "ice cubes", quantity: "1", unit: "cup(s)" }
    ],
    time: {
      prep: ["0", "15"], //hours, minutes
      cook: ["0", "15"]
    },
    imageUrls: [
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693932617/oqkqhaicmy2g4irawyyg.jpg",
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693932617/oqkqhaicmy2g4irawyyg.jpg",
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693932617/oqkqhaicmy2g4irawyyg.jpg"
    ],
    instructions: [
      { id: "1", step: "Cut the avocado in half, remove the pit, and scoop out the flesh." },
      { id: "2", step: "Peel the banana and break it into smaller pieces." },
      { id: "3", step: "Place the avocado, banana, unsweetened cocoa powder, almond milk, maple syrup, and vanilla extract in a blender." },
      { id: "4", step: "Blend on high until smooth and creamy, adding ice cubes to achieve your desired consistency." },
      { id: "5", step: "Taste and adjust sweetness by adding more maple syrup if needed." },
      { id: "6", step: "Pour into glasses and serve immediately." }
    ],
    tags: ["vegan", "smoothie", "chocolate", "avocado", "breakfast", "healthy", "drink"]
  },  
  {
    ownerUid: "0OzjQN80hvdKxPaAEPJPGatT2JP2",
    title: "Zucchini Noodles with Pesto",
    ingredients: [
      { name: "zucchinis", quantity: "3", unit: "zucchinis" },
      { name: "basil leaves", quantity: "2", unit: "cup(s)" },
      { name: "pine nuts", quantity: "1/4", unit: "cup(s)" },
      { name: "garlic cloves", quantity: "2", unit: "cloves" },
      { name: "Parmesan cheese", quantity: "1/2", unit: "cup(s)" },
      { name: "olive oil", quantity: "1/2", unit: "cup(s)" },
      { name: "salt", quantity: "1/2", unit: "teaspoon(s)" },
      { name: "black pepper", quantity: "1/4", unit: "teaspoon(s)" }
    ],
    time: {
      prep: ["0", "15"], //hours, minutes
      cook: ["0", "15"]
    },
    imageUrls: [
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693932702/y0marsyxi0mvusuzja21.jpg",
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693932702/y0marsyxi0mvusuzja21.jpg",
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693932702/y0marsyxi0mvusuzja21.jpg"
    ],
    instructions: [
      { id: "1", step: "Use a spiralizer to turn the zucchinis into noodles. Set aside." },
      { id: "2", step: "In a food processor, combine the basil leaves, pine nuts, garlic cloves, and Parmesan cheese." },
      { id: "3", step: "Process until finely chopped, then slowly add the olive oil while the food processor is running. Season with 1/2 teaspoon of salt and 1/4 teaspoon of black pepper." },
      { id: "4", step: "In a large skillet over medium heat, toss the zucchini noodles for about 3-5 minutes, or until slightly softened." },
      { id: "5", step: "Add the prepared pesto to the zucchini noodles and toss to combine." },
      { id: "6", step: "Serve immediately, garnished with additional Parmesan cheese if desired." }
    ],
    tags: ["vegetarian", "pesto", "zucchini", "noodles", "gluten-free", "main course"]
  },  
  {
    ownerUid: "0OzjQN80hvdKxPaAEPJPGatT2JP2",
    title: "Vegan Lentil Soup",
    ingredients: [
      { name: "olive oil", quantity: "2", unit: "tablespoon(s)" },
      { name: "onion", quantity: "1", unit: "onion" },
      { name: "garlic cloves", quantity: "3", unit: "cloves" },
      { name: "carrots", quantity: "2", unit: "carrots" },
      { name: "celery stalks", quantity: "2", unit: "stalks" },
      { name: "green lentils", quantity: "1", unit: "cup(s)" },
      { name: "vegetable broth", quantity: "6", unit: "cup(s)" },
      { name: "cumin", quantity: "1", unit: "teaspoon(s)" },
      { name: "coriander", quantity: "1", unit: "teaspoon(s)" },
      { name: "salt", quantity: "1", unit: "teaspoon(s)" },
      { name: "black pepper", quantity: "2", unit: "gram(s)" },
      { name: "spinach leaves", quantity: "2", unit: "cup(s)" }
    ],
    time: {
      prep: ["0", "15"], //hours, minutes
      cook: ["0", "45"]
    },
    imageUrls: [
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693932879/holw872kf2vfrefpqwes.jpg",
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693932702/y0marsyxi0mvusuzja21.jpg",
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693932702/y0marsyxi0mvusuzja21.jpg"
    ],
    instructions: [
      { id: "1", step: "Heat the olive oil in a large pot over medium heat." },
      { id: "2", step: "Add the chopped onion and garlic and sauté until translucent." },
      { id: "3", step: "Add the chopped carrots and celery and cook for another 5 minutes." },
      { id: "4", step: "Stir in the lentils, vegetable broth, cumin, and coriander. Bring to a boil." },
      { id: "5", step: "Reduce heat to low, cover, and simmer for about 30 minutes, or until the lentils are tender." },
      { id: "6", step: "Season with 1 teaspoon of salt and 2 grams of black pepper." },
      { id: "7", step: "Stir in the spinach leaves and cook until wilted." },
      { id: "8", step: "Serve hot, optionally garnished with extra olive oil or a lemon wedge." }
    ],
    tags: ["vegan", "soup", "lentil", "gluten-free", "main course"]
  },  
  {
    ownerUid: "0OzjQN80hvdKxPaAEPJPGatT2JP2",
    title: "Gluten-Free Almond Cookies",
    ingredients: [
      { name: "almond flour", quantity: "2", unit: "cup(s)" },
      { name: "baking powder", quantity: "1/2", unit: "teaspoon(s)" },
      { name: "salt", quantity: "1/4", unit: "teaspoon(s)" },
      { name: "coconut oil", quantity: "1/3", unit: "cup(s)" },
      { name: "maple syrup", quantity: "1/3", unit: "cup(s)" },
      { name: "vanilla extract", quantity: "1", unit: "teaspoon(s)" },
      { name: "slivered almonds", quantity: "1/4", unit: "cup(s)" }
    ],
    time: {
      prep: ["0", "15"], //hours, minutes
      cook: ["0", "12"]
    },
    imageUrls: [
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693932998/ciflrn3svw1e1m8pr21r.jpg",
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693932998/ciflrn3svw1e1m8pr21r.jpg",
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693932998/ciflrn3svw1e1m8pr21r.jpg"
    ],
    instructions: [
      { id: "1", step: "Preheat the oven to 350°F (175°C). Line a baking sheet with parchment paper." },
      { id: "2", step: "In a medium bowl, mix together the almond flour, baking powder, and salt." },
      { id: "3", step: "In a separate bowl, combine the melted coconut oil, maple syrup, and vanilla extract." },
      { id: "4", step: "Add the wet ingredients to the dry ingredients and mix until a dough forms." },
      { id: "5", step: "Form small balls of dough and place them on the baking sheet. Flatten each ball slightly with the back of a spoon." },
      { id: "6", step: "Sprinkle slivered almonds on top of each cookie." },
      { id: "7", step: "Bake for 12 minutes or until the edges are slightly golden." },
      { id: "8", step: "Let the cookies cool on the baking sheet for 10 minutes before transferring them to a wire rack to cool completely." }
    ],
    tags: ["gluten-free", "cookies", "almond", "dessert", "baked"]
  },
  {
    ownerUid: "0OzjQN80hvdKxPaAEPJPGatT2JP2",
    title: "Spicy Mango Salsa",
    ingredients: [
      { name: "ripe mango", quantity: "2", unit: "" },
      { name: "red onion", quantity: "1", unit: "" },
      { name: "jalapeño", quantity: "1", unit: "" },
      { name: "cilantro", quantity: "1/4", unit: "cup(s)" },
      { name: "lime", quantity: "1", unit: "" },
      { name: "salt", quantity: "1/4", unit: "teaspoon(s)" }, // assuming that 1 gram of salt is roughly equal to 1/4 teaspoon
      { name: "black pepper", quantity: "1/8", unit: "teaspoon(s)" } // replaced 'to taste' with an estimate
    ],
    time: {
      prep: ["0", "15"], //hours, minutes
      cook: ["0", "0"]  // adjusted to reflect that there's no cooking involved
    },
    imageUrls: [
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693933116/oatzexydbrrqmtkf2o53.jpg",
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693933116/oatzexydbrrqmtkf2o53.jpg",
      "http://res.cloudinary.com/recipeb00k/image/upload/v1693933116/oatzexydbrrqmtkf2o53.jpg"
    ],
    instructions: [
      { id: "1", step: "Peel and dice the mangoes into small cubes." },
      { id: "2", step: "Finely chop the red onion." },
      { id: "3", step: "Remove the seeds from the jalapeño and finely chop it. For a spicier salsa, you can leave some seeds in." },
      { id: "4", step: "Chop the cilantro leaves." },
      { id: "5", step: "In a large bowl, combine the mango, red onion, jalapeño, and cilantro." },
      { id: "6", step: "Squeeze the juice of one lime over the mixture." },
      { id: "7", step: "Season with salt and black pepper." },
      { id: "8", step: "Mix well and serve immediately, or refrigerate for up to 24 hours to let the flavors meld." }
    ],
    tags: ["salsa", "mango", "spicy", "side", "fresh"]
  },
  {
    ownerUid: "0OzjQN80hvdKxPaAEPJPGatT2JP2",
    title: "Classic Caesar Salad",
    ingredients: [
      { name: "romaine lettuce", quantity: "1", unit: "head" },
      { name: "garlic clove", quantity: "1", unit: "" },
      { name: "olive oil", quantity: "1/4", unit: "cup(s)" },
      { name: "lemon", quantity: "1", unit: "" },
      { name: "anchovy paste", quantity: "1", unit: "teaspoon(s)" },
      { name: "egg yolk", quantity: "1", unit: "" },
      { name: "parmesan cheese", quantity: "1/2", unit: "cup(s)" },
      { name: "salt", quantity: "1/4", unit: "teaspoon(s)" },
      { name: "black pepper", quantity: "1/8", unit: "teaspoon(s)" },
      { name: "croutons", quantity: "1", unit: "cup(s)" }
    ],
    time: {
      prep: ["0", "20"],
      cook: ["0", "0"]
    },
    imageUrls: [
                "https://res.cloudinary.com/recipeb00k/image/upload/v1696526637/Caesar_2_bz6tbw.jpg",
                "https://res.cloudinary.com/recipeb00k/image/upload/v1696526633/Caesar_1_x0x1lt.jpg"
               ],
    instructions: [
      { id: "1", step: "Wash and chop the romaine lettuce." },
      { id: "2", step: "In a bowl, whisk together garlic, lemon juice, anchovy paste, and egg yolk." },
      { id: "3", step: "While whisking, slowly add olive oil until emulsified." },
      { id: "4", step: "Stir in half of the parmesan cheese." },
      { id: "5", step: "Season with salt and black pepper." },
      { id: "6", step: "Toss the lettuce with the dressing." },
      { id: "7", step: "Garnish with remaining parmesan cheese and croutons." },
      { id: "8", step: "Serve immediately." }
    ],
    tags: ["salad", "caesar", "classic", "starter", "fresh"]
  },
  {
    ownerUid: "B7JgxRpvITfg7e0XAAXe2XX6KaF2",
    title: "Chocolate Mousse",
    ingredients: [
      { name: "dark chocolate", quantity: "200", unit: "gram(s)" },
      { name: "egg whites", quantity: "4", unit: "" },
      { name: "granulated sugar", quantity: "50", unit: "gram(s)" },
      { name: "heavy cream", quantity: "1", unit: "cup(s)" },
      { name: "vanilla extract", quantity: "1", unit: "teaspoon(s)" }
    ],
    time: {
      prep: ["0", "30"],
      cook: ["0", "0"]
    },
    imageUrls: [
                "https://res.cloudinary.com/recipeb00k/image/upload/v1696526423/Mousse_2_htu225.jpg", 
                "https://res.cloudinary.com/recipeb00k/image/upload/v1696526423/Mousse_1_emv6x6.jpg"
              ],
    instructions: [
      { id: "1", step: "Melt the dark chocolate over a double boiler or in a microwave." },
      { id: "2", step: "Whip the heavy cream with vanilla extract until soft peaks form." },
      { id: "3", step: "In another bowl, whip the egg whites until foamy." },
      { id: "4", step: "Gradually add the sugar to the egg whites, whipping until stiff peaks form." },
      { id: "5", step: "Fold the melted chocolate into the whipped cream." },
      { id: "6", step: "Then gently fold in the egg white mixture until well combined." },
      { id: "7", step: "Pour the mousse into individual bowls or glasses." },
      { id: "8", step: "Refrigerate for at least 4 hours, or overnight." },
      { id: "9", step: "Serve chilled." }
    ],
    tags: ["dessert", "chocolate", "mousse", "sweet", "creamy"]
  },
  {
    ownerUid: "0OzjQN80hvdKxPaAEPJPGatT2JP2",
    title: "Vegetable Stir-Fry with Tofu",
    ingredients: [
      { name: "firm tofu", quantity: "1", unit: "block" },
      { name: "soy sauce", quantity: "3", unit: "tablespoon(s)" },
      { name: "sesame oil", quantity: "2", unit: "tablespoon(s)" },
      { name: "garlic", quantity: "2", unit: "cloves" },
      { name: "broccoli", quantity: "1", unit: "cup(s)" },
      { name: "red bell pepper", quantity: "1", unit: "" },
      { name: "carrot", quantity: "1", unit: "" },
      { name: "zucchini", quantity: "1", unit: "" },
      { name: "ginger", quantity: "1", unit: "teaspoon(s)" },
      { name: "green onions", quantity: "2", unit: "" }
    ],
    time: {
      prep: ["0", "15"],
      cook: ["0", "15"]
    },
    imageUrls: [
      "https://res.cloudinary.com/recipeb00k/image/upload/v1696526859/OIP_uqyzub.jpg",
      "https://res.cloudinary.com/recipeb00k/image/upload/v1696526863/VStirFry_ypl51q.jpg"
     ],
    instructions: [
      { id: "1", step: "Cut the tofu into bite-sized cubes." },
      { id: "2", step: "In a bowl, mix together soy sauce, sesame oil, and grated ginger." },
      { id: "3", step: "Heat a pan over medium heat and add a tablespoon of oil." },
      { id: "4", step: "Add garlic and sauté until fragrant." },
      { id: "5", step: "Add the tofu cubes and cook until golden brown on all sides." },
      { id: "6", step: "Remove tofu and set aside." },
      { id: "7", step: "In the same pan, add the vegetables and stir-fry until they begin to soften." },
      { id: "8", step: "Return the tofu to the pan and pour over the sauce." },
      { id: "9", step: "Stir well to combine and cook for another 2-3 minutes." },
      { id: "10", step: "Garnish with sliced green onions before serving." }
    ],
    tags: ["main", "vegetarian", "stir-fry", "asian", "tofu"]
  },
  {
    ownerUid: "B7JgxRpvITfg7e0XAAXe2XX6KaF2",
    title: "Lemon Iced Tea",
    ingredients: [
      { name: "black tea bags", quantity: "2", unit: "" },
      { name: "water", quantity: "4", unit: "cup(s)" },
      { name: "sugar", quantity: "1/2", unit: "cup(s)" },
      { name: "lemon", quantity: "1", unit: "" }
    ],
    time: {
      prep: ["0", "5"],
      cook: ["0", "5"]
    },
    imageUrls: [
                "https://res.cloudinary.com/recipeb00k/image/upload/v1696527094/Lemon-Iced-Tea-Recipe-1024x683_igw6hj.jpg",
               ],
    instructions: [
      { id: "1", step: "Boil 2 cups of water in a pan." },
      { id: "2", step: "Add the tea bags and let steep for 5 minutes." },
      { id: "3", step: "Remove the tea bags and discard." },
      { id: "4", step: "Stir in the sugar until fully dissolved." },
      { id: "5", step: "Squeeze the juice of the lemon into the tea." },
      { id: "6", step: "Transfer to a pitcher and add the remaining 2 cups of cold water." },
      { id: "7", step: "Refrigerate until chilled." },
      { id: "8", step: "Serve with ice cubes and lemon slices." }
    ],
    tags: ["drink", "beverage", "lemon", "tea", "refreshing"]
  },
  {
    ownerUid: "0OzjQN80hvdKxPaAEPJPGatT2JP2",
    title: "Chicken Tikka Masala",
    ingredients: [
      { name: "boneless chicken", quantity: "500", unit: "gram(s)" },
      { name: "yogurt", quantity: "1", unit: "cup(s)" },
      { name: "tomato puree", quantity: "1", unit: "cup(s)" },
      { name: "onion", quantity: "1", unit: "" },
      { name: "garlic cloves", quantity: "3", unit: "" },
      { name: "ginger", quantity: "1", unit: "inch" },
      { name: "garam masala", quantity: "1", unit: "teaspoon(s)" },
      { name: "turmeric powder", quantity: "1/2", unit: "teaspoon(s)" },
      { name: "red chili powder", quantity: "1", unit: "teaspoon(s)" },
      { name: "heavy cream", quantity: "1/4", unit: "cup(s)" },
      { name: "salt", quantity: "1", unit: "teaspoon(s)" },
      { name: "oil", quantity: "2", unit: "tablespoon(s)" }
    ],
    time: {
      prep: ["0", "20"],
      cook: ["0", "40"]
    },
    imageUrls: ["https://res.cloudinary.com/recipeb00k/image/upload/v1696527379/R_okqocl.jpg"],
    instructions: [
      { id: "1", step: "Marinate the chicken pieces in yogurt, half the garam masala, half the red chili powder, and a pinch of salt for at least 2 hours or overnight." },
      { id: "2", step: "Heat oil in a pan and fry the chicken pieces until they're golden brown. Remove and set aside." },
      { id: "3", step: "In the same pan, sauté finely chopped onions until translucent." },
      { id: "4", step: "Add minced garlic and ginger and sauté for another 2 minutes." },
      { id: "5", step: "Pour in the tomato puree and add the remaining garam masala, turmeric, and red chili powder." },
      { id: "6", step: "Cook until the oil starts to separate from the mixture." },
      { id: "7", step: "Return the chicken to the pan and mix well. Cover and cook for 20 minutes." },
      { id: "8", step: "Stir in the heavy cream and cook for another 5 minutes." },
      { id: "9", step: "Serve hot with naan or rice." }
    ],
    tags: ["main", "chicken", "indian", "spicy", "creamy"]
  },
  {
    ownerUid: "B7JgxRpvITfg7e0XAAXe2XX6KaF2",
    title: "Berry Smoothie",
    ingredients: [
      { name: "mixed berries (strawberries, blueberries, raspberries)", quantity: "2", unit: "cup(s)" },
      { name: "banana", quantity: "1", unit: "" },
      { name: "yogurt", quantity: "1/2", unit: "cup(s)" },
      { name: "almond milk", quantity: "1", unit: "cup(s)" },
      { name: "honey", quantity: "2", unit: "tablespoon(s)" },
      { name: "chia seeds", quantity: "1", unit: "tablespoon(s)" }
    ],
    time: {
      prep: ["0", "10"],
      cook: ["0", "0"]
    },
    imageUrls: ["https://res.cloudinary.com/recipeb00k/image/upload/v1696527378/blueberry-smoothie-2238438-16_Hero_1-0901a8305220460da963ef7b210629ea_w7tevf.jpg"],
    instructions: [
      { id: "1", step: "Place all the ingredients in a blender." },
      { id: "2", step: "Blend on high until smooth and creamy." },
      { id: "3", step: "Pour into glasses and serve immediately." }
    ],
    tags: ["drink", "smoothie", "berries", "healthy", "refreshing"]
  },
  {
    ownerUid: "0OzjQN80hvdKxPaAEPJPGatT2JP2",
    title: "Beef Stroganoff",
    ingredients: [
      { name: "beef sirloin", quantity: "500", unit: "gram(s)" },
      { name: "mushrooms", quantity: "1", unit: "cup(s)" },
      { name: "onion", quantity: "1", unit: "" },
      { name: "garlic cloves", quantity: "2", unit: "" },
      { name: "beef broth", quantity: "1", unit: "cup(s)" },
      { name: "sour cream", quantity: "1/2", unit: "cup(s)" },
      { name: "Dijon mustard", quantity: "1", unit: "tablespoon(s)" },
      { name: "butter", quantity: "2", unit: "tablespoon(s)" },
      { name: "flour", quantity: "2", unit: "tablespoon(s)" },
      { name: "salt", quantity: "1/2", unit: "teaspoon(s)" },
      { name: "black pepper", quantity: "1/4", unit: "teaspoon(s)" }
    ],
    time: {
      prep: ["0", "15"],
      cook: ["0", "30"]
    },
    imageUrls: ["https://res.cloudinary.com/recipeb00k/image/upload/v1696527530/R_1_fr2red.jpg"],
    instructions: [
      { id: "1", step: "Slice the beef into thin strips, season with salt and pepper." },
      { id: "2", step: "In a pan, melt the butter and cook the beef until browned. Remove and set aside." },
      { id: "3", step: "In the same pan, sauté the chopped onions and garlic until translucent." },
      { id: "4", step: "Add the mushrooms and cook until soft." },
      { id: "5", step: "Sprinkle the flour over the vegetables and stir to coat." },
      { id: "6", step: "Slowly pour in the beef broth while stirring." },
      { id: "7", step: "Return the beef to the pan and let it simmer for about 15 minutes." },
      { id: "8", step: "Stir in the sour cream and Dijon mustard until the sauce is creamy." },
      { id: "9", step: "Serve over egg noodles or rice." }
    ],
    tags: ["main", "beef", "creamy", "comfort food", "russian"]
  },
  {
    ownerUid: "B7JgxRpvITfg7e0XAAXe2XX6KaF2",
    title: "Quinoa Salad with Veggies",
    ingredients: [
      { name: "quinoa", quantity: "1", unit: "cup(s)" },
      { name: "water", quantity: "2", unit: "cup(s)" },
      { name: "cherry tomatoes", quantity: "1", unit: "cup(s)" },
      { name: "cucumber", quantity: "1", unit: "" },
      { name: "red bell pepper", quantity: "1", unit: "" },
      { name: "feta cheese", quantity: "1/2", unit: "cup(s)" },
      { name: "olive oil", quantity: "3", unit: "tablespoon(s)" },
      { name: "lemon juice", quantity: "2", unit: "tablespoon(s)" },
      { name: "parsley", quantity: "1/4", unit: "cup(s)" },
      { name: "salt", quantity: "1/2", unit: "teaspoon(s)" },
      { name: "black pepper", quantity: "1/4", unit: "teaspoon(s)" }
    ],
    time: {
      prep: ["0", "20"],
      cook: ["0", "15"]
    },
    imageUrls: ["https://res.cloudinary.com/recipeb00k/image/upload/v1696527664/R_lumf5k.jpg"],
    instructions: [
      { id: "1", step: "Rinse the quinoa under cold water until the water runs clear." },
      { id: "2", step: "In a pot, bring 2 cups of water to a boil. Add the quinoa, reduce heat, cover, and simmer for 15 minutes or until quinoa is cooked and water is absorbed." },
      { id: "3", step: "Fluff the quinoa with a fork and allow it to cool." },
      { id: "4", step: "In a large bowl, combine the quinoa, chopped tomatoes, diced cucumber, diced red bell pepper, and crumbled feta cheese." },
      { id: "5", step: "In a small bowl, whisk together the olive oil, lemon juice, salt, and pepper. Pour the dressing over the quinoa mixture." },
      { id: "6", step: "Toss everything together and garnish with chopped parsley." },
      { id: "7", step: "Serve cold." }
    ],
    tags: ["salad", "quinoa", "vegetarian", "healthy", "refreshing"]
  },
  {
    ownerUid: "0OzjQN80hvdKxPaAEPJPGatT2JP2",
    title: "Classic Margarita",
    ingredients: [
      { name: "tequila", quantity: "2", unit: "fluid ounce(s)" },
      { name: "lime juice", quantity: "1", unit: "fluid ounce(s)" },
      { name: "Cointreau or triple sec", quantity: "1", unit: "fluid ounce(s)" },
      { name: "simple syrup", quantity: "1/2", unit: "fluid ounce(s)" },
      { name: "salt", quantity: "1", unit: "tablespoon(s)" },
      { name: "lime wedge", quantity: "1", unit: "" }
    ],
    time: {
      prep: ["0", "5"],
      cook: ["0", "0"]
    },
    imageUrls: ["https://res.cloudinary.com/recipeb00k/image/upload/v1696527799/R_qxdazb.jpg"],
    instructions: [
      { id: "1", step: "Rim a glass with a lime wedge and then dip in salt, set aside." },
      { id: "2", step: "In a shaker, combine the tequila, lime juice, Cointreau, and simple syrup." },
      { id: "3", step: "Shake until chilled." },
      { id: "4", step: "Strain the mixture into the prepared glass." },
      { id: "5", step: "Garnish with a lime wedge." },
      { id: "6", step: "Serve immediately and enjoy responsibly!" }
    ],
    tags: ["drink", "cocktail", "tequila", "refreshing", "party"]
  },
  {
    ownerUid: "B7JgxRpvITfg7e0XAAXe2XX6KaF2",
    title: "Vegetable Samosa",
    ingredients: [
      { name: "potatoes", quantity: "2", unit: "" },
      { name: "green peas", quantity: "1/2", unit: "cup(s)" },
      { name: "onion", quantity: "1", unit: "" },
      { name: "cumin seeds", quantity: "1", unit: "teaspoon(s)" },
      { name: "coriander powder", quantity: "1/2", unit: "teaspoon(s)" },
      { name: "garam masala", quantity: "1/2", unit: "teaspoon(s)" },
      { name: "chili powder", quantity: "1/4", unit: "teaspoon(s)" },
      { name: "salt", quantity: "1/2", unit: "teaspoon(s)" },
      { name: "all-purpose flour", quantity: "2", unit: "cup(s)" },
      { name: "water", quantity: "3/4", unit: "cup(s)" },
      { name: "oil", quantity: "2", unit: "tablespoon(s)" }
    ],
    time: {
      prep: ["0", "30"],
      cook: ["0", "20"]
    },
    imageUrls: ["https://res.cloudinary.com/recipeb00k/image/upload/v1696527867/R_r6jv9x.jpg"],
    instructions: [
      { id: "1", step: "Boil the potatoes until tender. Peel and mash them." },
      { id: "2", step: "In a pan, heat 1 tablespoon of oil. Add cumin seeds and onions. Sauté until onions are translucent." },
      { id: "3", step: "Add peas, mashed potatoes, coriander powder, garam masala, chili powder, and salt. Cook for 5 minutes." },
      { id: "4", step: "In a bowl, mix flour, salt, and remaining oil. Add water little by little and knead into a firm dough." },
      { id: "5", step: "Roll out the dough into small circles. Cut each circle into half." },
      { id: "6", step: "Take one-half of the circle, form a cone shape, and fill it with the potato-peas mixture. Seal the edges." },
      { id: "7", step: "Heat oil in a deep pan and deep fry the samosas until golden brown." },
      { id: "8", step: "Serve hot with chutney or sauce." }
    ],
    tags: ["snack", "indian", "vegetarian", "spicy", "crispy"]
  },
  {
    ownerUid: "0OzjQN80hvdKxPaAEPJPGatT2JP2",
    title: "Creamy Tomato Soup",
    ingredients: [
      { name: "ripe tomatoes", quantity: "6", unit: "" },
      { name: "onion", quantity: "1", unit: "" },
      { name: "garlic cloves", quantity: "3", unit: "" },
      { name: "vegetable broth", quantity: "2", unit: "cup(s)" },
      { name: "heavy cream", quantity: "1/2", unit: "cup(s)" },
      { name: "butter", quantity: "2", unit: "tablespoon(s)" },
      { name: "salt", quantity: "1", unit: "teaspoon(s)" },
      { name: "black pepper", quantity: "1/2", unit: "teaspoon(s)" },
      { name: "sugar", quantity: "1", unit: "teaspoon(s)" },
      { name: "fresh basil", quantity: "1/4", unit: "cup(s)" }
    ],
    time: {
      prep: ["0", "10"],
      cook: ["0", "30"]
    },
    imageUrls: ["https://res.cloudinary.com/recipeb00k/image/upload/v1696528015/DSCN2374_wyph2q.jpg"],
    instructions: [
      { id: "1", step: "Chop the tomatoes, onion, and garlic." },
      { id: "2", step: "In a large pot, melt butter over medium heat. Add the onions and garlic. Sauté until translucent." },
      { id: "3", step: "Add tomatoes, vegetable broth, salt, pepper, and sugar to the pot." },
      { id: "4", step: "Bring to a boil and then simmer for 20 minutes." },
      { id: "5", step: "Use an immersion blender to puree the soup until smooth or transfer to a blender in batches and blend until smooth." },
      { id: "6", step: "Stir in heavy cream and chopped basil." },
      { id: "7", step: "Heat for an additional 5 minutes and serve hot." }
    ],
    tags: ["soup", "tomato", "creamy", "comfort food", "vegetarian"]
  },
  {
    ownerUid: "B7JgxRpvITfg7e0XAAXe2XX6KaF2",
    title: "Shrimp Stir-Fry",
    ingredients: [
      { name: "shrimp", quantity: "1", unit: "pound(s)" },
      { name: "broccoli florets", quantity: "2", unit: "cup(s)" },
      { name: "bell peppers", quantity: "2", unit: "" },
      { name: "carrots", quantity: "2", unit: "" },
      { name: "soy sauce", quantity: "3", unit: "tablespoon(s)" },
      { name: "sesame oil", quantity: "2", unit: "tablespoon(s)" },
      { name: "garlic cloves", quantity: "2", unit: "" },
      { name: "ginger", quantity: "1", unit: "tablespoon(s)" },
      { name: "cornstarch", quantity: "1", unit: "teaspoon(s)" },
      { name: "water", quantity: "2", unit: "tablespoon(s)" }
    ],
    time: {
      prep: ["0", "15"],
      cook: ["0", "10"]
    },
    imageUrls: ["https://res.cloudinary.com/recipeb00k/image/upload/v1696528143/shrimp-lo-mein-2831_jeqz73.jpg"],
    instructions: [
      { id: "1", step: "Clean and devein the shrimp. Set aside." },
      { id: "2", step: "Slice the bell peppers and carrots thinly." },
      { id: "3", step: "In a bowl, mix soy sauce, sesame oil, minced garlic, grated ginger, cornstarch, and water." },
      { id: "4", step: "In a wok or large pan, heat some oil over medium-high heat. Add shrimp and stir-fry until pink." },
      { id: "5", step: "Add broccoli florets, bell peppers, and carrots. Continue to stir-fry for 5 minutes or until vegetables are tender." },
      { id: "6", step: "Pour the sauce over the stir-fry and toss to coat evenly." },
      { id: "7", step: "Serve hot with steamed rice or noodles." }
    ],
    tags: ["stir-fry", "shrimp", "Asian", "quick", "seafood"]
  }, 
  {
    ownerUid: "0OzjQN80hvdKxPaAEPJPGatT2JP2",
    title: "Classic Chocolate Brownies",
    ingredients: [
      { name: "unsalted butter", quantity: "1/2", unit: "cup(s)" },
      { name: "granulated sugar", quantity: "1", unit: "cup(s)" },
      { name: "eggs", quantity: "2", unit: "" },
      { name: "vanilla extract", quantity: "1", unit: "teaspoon(s)" },
      { name: "all-purpose flour", quantity: "1/3", unit: "cup(s)" },
      { name: "cocoa powder", quantity: "1/3", unit: "cup(s)" },
      { name: "salt", quantity: "1/4", unit: "teaspoon(s)" },
      { name: "baking powder", quantity: "1/4", unit: "teaspoon(s)" }
    ],
    time: {
      prep: ["0", "15"],
      cook: ["0", "25"]
    },
    imageUrls: ["https://res.cloudinary.com/recipeb00k/image/upload/v1696528266/90a8f98457760f604f47cb4cd3bf4eb1_ihw2jn.jpg"],
    instructions: [
      { id: "1", step: "Preheat oven to 350°F (175°C). Grease a square baking pan or line it with parchment paper." },
      { id: "2", step: "Melt the butter in a medium saucepan. Remove from heat and stir in sugar, eggs, and vanilla extract." },
      { id: "3", step: "In a separate bowl, combine flour, cocoa powder, salt, and baking powder. Gradually add to the wet mixture and mix until smooth." },
      { id: "4", step: "Pour the batter into the prepared baking pan and spread evenly." },
      { id: "5", step: "Bake for 20-25 minutes, or until a toothpick inserted into the center comes out with a few crumbs." },
      { id: "6", step: "Allow to cool before cutting into squares and serving." }
    ],
    tags: ["dessert", "chocolate", "brownies", "sweet", "baking"]
  },
  {
    ownerUid: "B7JgxRpvITfg7e0XAAXe2XX6KaF2",
    title: "Refreshing Mint Iced Tea",
    ingredients: [
      { name: "water", quantity: "4", unit: "cup(s)" },
      { name: "black tea bags", quantity: "4", unit: "" },
      { name: "fresh mint leaves", quantity: "1/2", unit: "cup(s)" },
      { name: "sugar", quantity: "1/4", unit: "cup(s)" },
      { name: "lemon", quantity: "1", unit: "" },
      { name: "ice cubes", quantity: "2", unit: "cup(s)" }
    ],
    time: {
      prep: ["0", "5"],
      cook: ["0", "5"]
    },
    imageUrls: ["https://res.cloudinary.com/recipeb00k/image/upload/v1696528363/fresh-mint-iced-tea-FEAT_pzrwxh.jpg"],
    instructions: [
      { id: "1", step: "In a saucepan, bring 4 cups of water to a boil." },
      { id: "2", step: "Remove from heat and add the tea bags and mint leaves. Allow to steep for 5 minutes." },
      { id: "3", step: "Discard the tea bags and mint leaves. Stir in sugar until dissolved." },
      { id: "4", step: "Allow the tea to cool to room temperature, then refrigerate until cold." },
      { id: "5", step: "Serve in glasses filled with ice cubes, garnishing with lemon slices." }
    ],
    tags: ["drink", "iced tea", "refreshing", "beverage", "summer"]
  },
  {
    ownerUid: "0OzjQN80hvdKxPaAEPJPGatT2JP2",
    title: "Greek Salad",
    ingredients: [
      { name: "cucumbers", quantity: "2", unit: "" },
      { name: "tomatoes", quantity: "4", unit: "" },
      { name: "red onion", quantity: "1", unit: "" },
      { name: "feta cheese", quantity: "200", unit: "gram(s)" },
      { name: "kalamata olives", quantity: "1/2", unit: "cup(s)" },
      { name: "olive oil", quantity: "1/4", unit: "cup(s)" },
      { name: "red wine vinegar", quantity: "2", unit: "tablespoon(s)" },
      { name: "dried oregano", quantity: "1", unit: "teaspoon(s)" },
      { name: "salt", quantity: "1/2", unit: "teaspoon(s)" },
      { name: "black pepper", quantity: "1/4", unit: "teaspoon(s)" }
    ],
    time: {
      prep: ["0", "15"],
      cook: ["0", "0"]
    },
    imageUrls: ["https://res.cloudinary.com/recipeb00k/image/upload/v1696528428/R_1_dlocek.jpg"],
    instructions: [
      { id: "1", step: "Chop cucumbers, tomatoes, and red onion into bite-sized pieces." },
      { id: "2", step: "In a large bowl, combine cucumbers, tomatoes, red onion, feta cheese, and kalamata olives." },
      { id: "3", step: "In a separate smaller bowl, whisk together olive oil, red wine vinegar, oregano, salt, and pepper." },
      { id: "4", step: "Pour the dressing over the salad and toss to combine." },
      { id: "5", step: "Serve immediately or refrigerate for a short time to let the flavors meld together." }
    ],
    tags: ["salad", "Greek", "fresh", "vegetarian", "easy"]
  },
  {
    ownerUid: "B7JgxRpvITfg7e0XAAXe2XX6KaF2",
    title: "Fluffy Pancakes",
    ingredients: [
      { name: "all-purpose flour", quantity: "2", unit: "cup(s)" },
      { name: "baking powder", quantity: "2", unit: "teaspoon(s)" },
      { name: "salt", quantity: "1/2", unit: "teaspoon(s)" },
      { name: "granulated sugar", quantity: "2", unit: "tablespoon(s)" },
      { name: "milk", quantity: "1 1/2", unit: "cup(s)" },
      { name: "eggs", quantity: "2", unit: "" },
      { name: "unsalted butter", quantity: "1/4", unit: "cup(s)" },
      { name: "vanilla extract", quantity: "1", unit: "teaspoon(s)" }
    ],
    time: {
      prep: ["0", "10"],
      cook: ["0", "20"]
    },
    imageUrls: ["https://res.cloudinary.com/recipeb00k/image/upload/v1696528591/Pancakes-14_n53ng5.jpg"],
    instructions: [
      { id: "1", step: "In a large bowl, whisk together flour, baking powder, salt, and sugar." },
      { id: "2", step: "In another bowl, mix together milk, eggs, melted butter, and vanilla extract." },
      { id: "3", step: "Pour the wet mixture into the dry ingredients and stir until just combined. Be careful not to overmix." },
      { id: "4", step: "Heat a non-stick skillet over medium heat and lightly grease with butter or oil." },
      { id: "5", step: "For each pancake, pour 1/4 cup of batter onto the skillet. Cook until bubbles form on the surface, then flip and cook until golden brown." },
      { id: "6", step: "Serve with maple syrup, butter, and your favorite toppings." }
    ],
    tags: ["breakfast", "pancakes", "fluffy", "sweet", "classic"] 
  },
  {
    ownerUid: "0OzjQN80hvdKxPaAEPJPGatT2JP2",
    title: "Vegetable Spring Rolls",
    ingredients: [
      { name: "rice paper wrappers", quantity: "12", unit: "" },
      { name: "lettuce leaves", quantity: "12", unit: "" },
      { name: "carrot", quantity: "1", unit: "" },
      { name: "cucumber", quantity: "1", unit: "" },
      { name: "avocado", quantity: "1", unit: "" },
      { name: "red bell pepper", quantity: "1", unit: "" },
      { name: "fresh mint leaves", quantity: "1/2", unit: "cup(s)" }
    ],
    time: {
      prep: ["0", "25"],
      cook: ["0", "0"]
    },
    imageUrls: ["https://res.cloudinary.com/recipeb00k/image/upload/v1696528889/spring-roll-recipe-step-by-step-instructions.jpg_tjuwgp.webp"],
    instructions: [
      { id: "1", step: "Julienne or thinly slice the carrot, cucumber, avocado, and red bell pepper." },
      { id: "2", step: "Prepare a bowl of warm water. Dip a rice paper wrapper into the water for about 5-10 seconds, ensuring it's completely submerged." },
      { id: "3", step: "Lay the softened wrapper on a clean surface. In the center, place a lettuce leaf, a few sticks of each vegetable, and a couple of mint leaves." },
      { id: "4", step: "Fold the bottom half of the wrapper over the filling, fold in the sides, and then roll tightly upwards. Repeat with remaining wrappers and filling." },
      { id: "5", step: "Serve immediately with dipping sauce of your choice." }
    ],
    tags: ["appetizer", "Asian", "vegetarian", "fresh", "spring rolls"]
  },
  {
    ownerUid: "B7JgxRpvITfg7e0XAAXe2XX6KaF2",
    title: "Chicken Tagine with Apricots",
    ingredients: [
      { name: "chicken thighs", quantity: "8", unit: "" },
      { name: "salt", quantity: "1", unit: "teaspoon(s)" },
      { name: "black pepper", quantity: "1/2", unit: "teaspoon(s)" },
      { name: "ground cinnamon", quantity: "1/2", unit: "teaspoon(s)" },
      { name: "ground ginger", quantity: "1/2", unit: "teaspoon(s)" },
      { name: "olive oil", quantity: "2", unit: "tablespoon(s)" },
      { name: "onion", quantity: "1", unit: "" },
      { name: "garlic cloves", quantity: "3", unit: "" },
      { name: "chicken broth", quantity: "2", unit: "cup(s)" },
      { name: "dried apricots", quantity: "1", unit: "cup(s)" }
    ],
    time: {
      prep: ["0", "20"],
      cook: ["1", "15"]
    },
    imageUrls: ["https://res.cloudinary.com/recipeb00k/image/upload/v1696528947/6_original_zhfuup.webp"],
    instructions: [
      { id: "1", step: "Season chicken thighs with salt, pepper, cinnamon, and ginger." },
      { id: "2", step: "In a tagine or large heavy-bottomed pot, heat olive oil over medium heat. Brown the chicken on both sides." },
      { id: "3", step: "Add finely chopped onion and minced garlic, sautéing until the onion is translucent." },
      { id: "4", step: "Add chicken broth and bring to a boil." },
      { id: "5", step: "Reduce heat, add dried apricots, cover, and simmer for about 1 hour until chicken is tender and cooked through." },
      { id: "6", step: "Adjust seasoning if needed, and serve hot with couscous or bread." }
    ],
    tags: ["main dish", "Moroccan", "chicken", "tagine", "apricots"]
 },
 {
  ownerUid: "0OzjQN80hvdKxPaAEPJPGatT2JP2",
  title: "Tiramisu",
  ingredients: [
    { name: "egg yolks", quantity: "3", unit: "" },
    { name: "sugar", quantity: "1/2", unit: "cup(s)" },
    { name: "mascarpone cheese", quantity: "8", unit: "ounce(s)" },
    { name: "heavy cream", quantity: "1", unit: "cup(s)" },
    { name: "vanilla extract", quantity: "1", unit: "teaspoon(s)" },
    { name: "strong brewed coffee, cooled", quantity: "1", unit: "cup(s)" },
    { name: "coffee liqueur", quantity: "1/4", unit: "cup(s)" },
    { name: "ladyfingers", quantity: "24", unit: "" },
    { name: "unsweetened cocoa powder", quantity: "2", unit: "tablespoon(s)" }
  ],
  time: {
    prep: ["0", "30"],
    cook: ["0", "0"]
  },
  imageUrls: ["https://res.cloudinary.com/recipeb00k/image/upload/v1696529110/093427de2b2dc88d5e2a6377b3bde44c_ki22gw.jpg"],
  instructions: [
    { id: "1", step: "In a heatproof bowl, whisk together egg yolks and sugar. Place over a pot of simmering water (double boiler) and whisk continuously until pale and slightly thickened." },
    { id: "2", step: "Remove from heat and allow to cool." },
    { id: "3", step: "In a separate bowl, whip the mascarpone cheese, heavy cream, and vanilla until stiff peaks form." },
    { id: "4", step: "Fold the egg yolk mixture into the mascarpone mixture." },
    { id: "5", step: "In a shallow dish, mix together the coffee and coffee liqueur. Quickly dip each ladyfinger into the coffee mixture, ensuring they don't become too soggy." },
    { id: "6", step: "Layer half of the dipped ladyfingers in the bottom of a serving dish. Spread half of the mascarpone mixture over the ladyfingers. Repeat layers." },
    { id: "7", step: "Dust the top with cocoa powder." },
    { id: "8", step: "Refrigerate for at least 4 hours or overnight before serving." }
  ],
  tags: ["dessert", "Italian", "coffee", "mascarpone", "tiramisu"]
},
{
  ownerUid: "B7JgxRpvITfg7e0XAAXe2XX6KaF2",
  title: "Mint Mojito",
  ingredients: [
    { name: "fresh mint leaves", quantity: "10", unit: "" },
    { name: "lime", quantity: "1", unit: "" },
    { name: "sugar", quantity: "2", unit: "tablespoon(s)" },
    { name: "white rum", quantity: "2", unit: "ounce(s)" },
    { name: "soda water", quantity: "1", unit: "cup(s)" },
    { name: "ice cubes", quantity: "1", unit: "cup(s)" }
  ],
  time: {
    prep: ["0", "5"],
    cook: ["0", "0"]
  },
  imageUrls: ["https://res.cloudinary.com/recipeb00k/image/upload/v1696529205/easy_mint_mojitos_zzwvsx.png"],
  instructions: [
    { id: "1", step: "In a glass, muddle the mint leaves and lime wedges." },
    { id: "2", step: "Add sugar and muddle again." },
    { id: "3", step: "Fill the glass with ice cubes." },
    { id: "4", step: "Pour white rum over the ice." },
    { id: "5", step: "Top off with soda water. Give it a quick stir." },
    { id: "6", step: "Garnish with a sprig of mint and a slice of lime. Serve immediately." }
  ],
  tags: ["drink", "cocktail", "mint", "lime", "rum", "mojito"]
  }  
];


export default recipes