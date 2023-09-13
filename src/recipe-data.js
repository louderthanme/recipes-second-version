import { v4 as uuidv4 } from 'uuid';


const recipes = [
   {
    ownerUid: "PXhGH3KPq2dBkX4vsJkJkT476OT2",
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
    imageUrls: ["http://res.cloudinary.com/recipeb00k/image/upload/v1693927572/ico5eurursodimaxuyik.jpg","http://res.cloudinary.com/recipeb00k/image/upload/v1693927572/ico5eurursodimaxuyik.jpg","http://res.cloudinary.com/recipeb00k/image/upload/v1693927572/ico5eurursodimaxuyik.jpg"],
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
    ]
  }, {
    ownerUid: "PXhGH3KPq2dBkX4vsJkJkT476OT2",
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
    imageUrls: ["https://res.cloudinary.com/recipeb00k/image/upload/v1693928473/csctgn8gbmh9dtdioewg.jpg","https://res.cloudinary.com/recipeb00k/image/upload/v1693928473/csctgn8gbmh9dtdioewg.jpg","https://res.cloudinary.com/recipeb00k/image/upload/v1693928473/csctgn8gbmh9dtdioewg.jpg"],
    instructions: [
      { id: "1", step: "Bring a large pot of salted water to boil for the spaghetti." },
      { id: "2", step: "In a separate large skillet over medium heat, cook the guanciale or pancetta until it becomes crispy. Remove from heat and set aside." },
      { id: "3", step: "In a bowl, whisk together the eggs, pecorino cheese, and freshly ground black pepper." },
      { id: "4", step: "Cook the spaghetti in the boiling water until al dente. Reserve about a cup(s) of pasta cooking water and then drain the spaghetti." },
      { id: "5", step: "Add the drained spaghetti to the skillet with the guanciale or pancetta. Toss to combine." },
      { id: "6", step: "Remove the skillet from heat, and quickly mix in the egg and cheese mixture. Stir rapidly to avoid scrambling the eggs." },
      { id: "7", step: "If the sauce is too thick, add a little reserved pasta cooking water to reach your desired consistency." },
      { id: "8", step: "Serve immediately with additional pecorino cheese and black pepper on top." }
    ]
  },{
    ownerUid: "PXhGH3KPq2dBkX4vsJkJkT476OT2",
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
    imageUrls: ["http://res.cloudinary.com/recipeb00k/image/upload/v1693929261/ansetnt1oldafetdadcb.jpg","http://res.cloudinary.com/recipeb00k/image/upload/v1693929261/ansetnt1oldafetdadcb.jpg","http://res.cloudinary.com/recipeb00k/image/upload/v1693929261/ansetnt1oldafetdadcb.jpg"],
    instructions: [
      { id: "1", step: "Heat coconut oil in a large pot over medium heat." },
      { id: "2", step: "Dice the onion, mince the garlic, and grate the ginger. Add them to the pot and sauté until the onion is translucent." },
      { id: "3", step: "Add the curry powder to the pot and stir well to combine with the onion mixture." },
      { id: "4", step: "Drain and rinse the chickpeas, then add them to the pot. Stir to coat them with the curry mixture." },
      { id: "5", step: "Pour in the coconut milk and bring the mixture to a gentle boil. Reduce heat and simmer for 10 minutes." },
      { id: "6", step: "Taste and adjust seasoning with salt and pepper as needed." },
      { id: "7", step: "Add the spinach to the pot and stir until wilted." },
      { id: "8", step: "Serve hot, ideally over rice or with bread." }
    ]
  },
  {
    ownerUid: "PXhGH3KPq2dBkX4vsJkJkT476OT2",
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
    imageUrls: ["http://res.cloudinary.com/recipeb00k/image/upload/v1693929704/nvhhgbhpev54lmvivn7o.jpg","http://res.cloudinary.com/recipeb00k/image/upload/v1693929704/nvhhgbhpev54lmvivn7o.jpg","http://res.cloudinary.com/recipeb00k/image/upload/v1693929704/nvhhgbhpev54lmvivn7o.jpg"],
    instructions: [
      { id: "1", step: "Place chicken breasts between sheets of plastic wrap and pound them to an even thickness of about 1/2 inch." },
      { id: "2", step: "In a shallow dish, combine flour, salt, and pepper. Dredge each chicken breast in the mixture, shaking off excess." },
      { id: "3", step: "Heat olive oil and 1 tablespoon(s) of butter in a large skillet over medium-high heat. Add the chicken and cook for about 4 minutes per side, or until browned. Remove chicken and set aside." },
      { id: "4", step: "In the same skillet, add the remaining butter and mushrooms. Cook until the mushrooms are browned." },
      { id: "5", step: "Add minced garlic to the skillet and sauté for about 1 minute." },
      { id: "6", step: "Pour in Marsala wine and chicken stock, bringing the mixture to a boil. Reduce heat and simmer for 10 minutes, or until the sauce is reduced by half." },
      { id: "7", step: "Return the chicken to the skillet, and simmer in the sauce for 3-5 minutes, or until the chicken is cooked through." },
      { id: "8", step: "Garnish with chopped parsley before serving." }
    ]
  },
  {
    ownerUid: "PXhGH3KPq2dBkX4vsJkJkT476OT2",
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
    imageUrls: ["http://res.cloudinary.com/recipeb00k/image/upload/v1693930060/t09wpseys6zgdgl7l0zl.jpg","http://res.cloudinary.com/recipeb00k/image/upload/v1693930060/t09wpseys6zgdgl7l0zl.jpg","http://res.cloudinary.com/recipeb00k/image/upload/v1693930060/t09wpseys6zgdgl7l0zl.jpg"],
    instructions: [
      { id: "1", step: "Prepare all the vegetables by cutting them into bite-sized pieces." },
      { id: "2", step: "In a small bowl, mix together the soy sauce, sesame oil, minced garlic, and grated ginger." },
      { id: "3", step: "In another small bowl, make a slurry by mixing the cornstarch and water." },
      { id: "4", step: "Heat a wok or large skillet over high heat. Once hot, add 1 tablespoon(s) of sesame oil." },
      { id: "5", step: "Add the prepared vegetables to the wok and stir-fry for 5-7 minutes or until tender-crisp." },
      { id: "6", step: "Pour the soy sauce mixture over the vegetables and stir well to combine." },
      { id: "7", step: "Add the cornstarch slurry to the wok and continue to stir. Cook for another 2-3 minutes until the sauce thickens." },
      { id: "8", step: "Serve immediately over rice or noodles." }
    ]
  },
  {
    ownerUid: "PXhGH3KPq2dBkX4vsJkJkT476OT2",
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
    imageUrls: ["http://res.cloudinary.com/recipeb00k/image/upload/v1693930169/dl6owvop8pvpus61yywu.webp","http://res.cloudinary.com/recipeb00k/image/upload/v1693930169/dl6owvop8pvpus61yywu.webp","http://res.cloudinary.com/recipeb00k/image/upload/v1693930169/dl6owvop8pvpus61yywu.webp"],
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
    ]
  },
  {
    ownerUid: "PXhGH3KPq2dBkX4vsJkJkT476OT2",
    title: "Mango and Chili-Glazed Chicken Tacos",
    ingredients: [
      { name: "chicken breasts", quantity: "2", unit: "" },
      { name: "mango", quantity: "1", unit: "" },
      { name: "chili sauce", quantity: "1/4", unit: "cup(s)" },
      { name: "tortillas", quantity: "6", unit: "" },
      { name: "red onion", quantity: "1", unit: "" },
      { name: "lime", quantity: "1", unit: "" },
      { name: "fresh cilantro", quantity: "1/4", unit: "cup(s)" },
      { name: "olive oil", quantity: "2", unit: "tablespoon(s)" },
      { name: "salt", quantity: "to taste", unit: "" },
      { name: "black pepper", quantity: "to taste", unit: "" }
    ],
    time: {
      prep: ["0", "15"], //hours, minutes
      cook: ["0", "15"]
    },
    imageUrls: ["http://res.cloudinary.com/recipeb00k/image/upload/v1693930387/xqraombcrfwikep1cajf.jpg","http://res.cloudinary.com/recipeb00k/image/upload/v1693930387/xqraombcrfwikep1cajf.jpg","http://res.cloudinary.com/recipeb00k/image/upload/v1693930387/xqraombcrfwikep1cajf.jpg"],
    instructions: [
      { id: "1", step: "Marinate chicken breasts with half of the chili sauce, juice of half a lime, salt, and pepper. Let sit for at least 15 minutes." },
      { id: "2", step: "Peel and dice the mango, and chop the red onion and cilantro." },
      { id: "3", step: "In a skillet, heat 1 tablespoon(s) of olive oil over medium heat. Add the marinated chicken and cook until done, about 6-8 minutes per side depending on thickness. Remove and let rest for a few minutes before slicing." },
      { id: "4", step: "In the same skillet, add the remaining olive oil and sauté the red onion until translucent." },
      { id: "5", step: "Add the diced mango and remaining chili sauce to the skillet. Cook for about 2-3 minutes, stirring occasionally." },
      { id: "6", step: "Slice the cooked chicken into strips and add to the mango-chili mixture. Stir well to combine." },
      { id: "7", step: "Warm the tortillas in a separate skillet or directly over an open flame until pliable." },
      { id: "8", step: "Assemble the tacos: Place some of the chicken-mango mixture on each tortilla. Top with fresh cilantro and a squeeze of lime juice." }
    ]
  },
  {
    ownerUid: "PXhGH3KPq2dBkX4vsJkJkT476OT2",
    title: "Blueberry and Mint Iced Tea",
    ingredients: [
      { name: "water", quantity: "4", unit: "cup(s)" },
      { name: "black tea bags", quantity: "2", unit: "" },
      { name: "blueberries", quantity: "1", unit: "cup(s)" },
      { name: "fresh mint leaves", quantity: "10-12", unit: "" },
      { name: "sugar", quantity: "1/2", unit: "cup(s)" },
      { name: "ice cubes", quantity: "as needed", unit: "" },
      { name: "lemon slices", quantity: "for garnish", unit: "" },
      { name: "mint sprigs", quantity: "for garnish", unit: "" }
    ],
    time: {
      prep: ["0", "15"], //hours, minutes
      cook: ["0", "15"]
    },
    imageUrls: ["http://res.cloudinary.com/recipeb00k/image/upload/v1693930707/xg4yjy83j82lfaatzrzj.jpg","http://res.cloudinary.com/recipeb00k/image/upload/v1693930707/xg4yjy83j82lfaatzrzj.jpg","http://res.cloudinary.com/recipeb00k/image/upload/v1693930707/xg4yjy83j82lfaatzrzj.jpg"],
    instructions: [
      { id: "1", step: "In a saucepan, bring 4 cup(s) of water to a boil. Once boiling, remove from heat and add the tea bags. Allow to steep for 5 minutes." },
      { id: "2", step: "While the tea is steeping, prepare a simple syrup by combining the sugar and 1/2 cup(s) of water in a small saucepan. Stir over low heat until the sugar is fully dissolved." },
      { id: "3", step: "Add the blueberries and mint leaves to the simple syrup. Simmer for an additional 5 minutes, muddling the blueberries and mint with a spoon to release their flavors." },
      { id: "4", step: "Remove the tea bags from the steeped tea and discard. Combine the tea with the blueberry-mint simple syrup in a large pitcher." },
      { id: "5", step: "Allow the mixture to cool to room temperature before transferring to the refrigerator to chill." },
      { id: "6", step: "Serve the iced tea over ice cubes, garnished with lemon slices and mint sprigs." }
    ]
  },
  {
    ownerUid: "PXhGH3KPq2dBkX4vsJkJkT476OT2",
    title: "Vegetarian Sushi Bowl",
    ingredients: [
      { name: "sushi rice", quantity: "1", unit: "cup(s)" },
      { name: "water", quantity: "1 1/2", unit: "cup(s)" },
      { name: "rice vinegar", quantity: "2", unit: "tablespoon(s)" },
      { name: "sugar", quantity: "1", unit: "tablespoon(s)" },
      { name: "avocado", quantity: "1", unit: "" },
      { name: "cucumber", quantity: "1", unit: "" },
      { name: "carrot", quantity: "1", unit: "" },
      { name: "edamame", quantity: "1", unit: "cup(s)" },
      { name: "nori sheets", quantity: "2", unit: "" },
      { name: "soy sauce", quantity: "for serving", unit: "" },
      { name: "sesame seeds", quantity: "for garnish", unit: "" }
    ],
    time: {
      prep: ["0", "15"], //hours, minutes
      cook: ["0", "15"]
    },
    imageUrls: ["http://res.cloudinary.com/recipeb00k/image/upload/v1693930867/yfy9mb17xeqmrouf5w7b.jpg","http://res.cloudinary.com/recipeb00k/image/upload/v1693930867/yfy9mb17xeqmrouf5w7b.jpg","http://res.cloudinary.com/recipeb00k/image/upload/v1693930867/yfy9mb17xeqmrouf5w7b.jpg"],
    instructions: [
      { id: "1", step: "Rinse the sushi rice until the water runs clear. Combine with 1 1/2 cup(s) of water in a saucepan. Bring to a boil, then reduce heat to low, cover, and simmer for 20 minutes." },
      { id: "2", step: "In a small bowl, mix together the rice vinegar and sugar until the sugar dissolves. Stir this into the cooked rice and set aside to cool." },
      { id: "3", step: "Dice the avocado, thinly slice the cucumber and carrot, and prepare the edamame according to package instructions." },
      { id: "4", step: "Cut the nori sheets into thin strips." },
      { id: "5", step: "To assemble, divide the rice among bowls. Top with avocado, cucumber, carrot, edamame, and nori strips." },
      { id: "6", step: "Drizzle with soy sauce and garnish with sesame seeds before serving." }
    ]
  },
  {
    ownerUid: "PXhGH3KPq2dBkX4vsJkJkT476OT2",
    title: "Pumpkin Spice Latte",
    ingredients: [
      { name: "brewed coffee", quantity: "1", unit: "cup(s)" },
      { name: "milk", quantity: "1", unit: "cup(s)" },
      { name: "pumpkin puree", quantity: "2", unit: "tablespoon(s)" },
      { name: "sugar", quantity: "2", unit: "tablespoon(s)" },
      { name: "vanilla extract", quantity: "1", unit: "teaspoon(s)" },
      { name: "pumpkin spice", quantity: "1/2", unit: "teaspoon(s)" },
      { name: "whipped cream", quantity: "for topping", unit: "" },
      { name: "cinnamon stick", quantity: "for garnish", unit: "" }
    ],
    time: {
      prep: ["0", "15"], //hours, minutes
      cook: ["0", "15"]
    },
    imageUrls: ["http://res.cloudinary.com/recipeb00k/image/upload/v1693931123/fu3hcxxyg9yia1ry3dul.webp","http://res.cloudinary.com/recipeb00k/image/upload/v1693931123/fu3hcxxyg9yia1ry3dul.webp","http://res.cloudinary.com/recipeb00k/image/upload/v1693931123/fu3hcxxyg9yia1ry3dul.webp"],
    instructions: [
      { id: "1", step: "In a saucepan, combine the milk, pumpkin puree, sugar, and pumpkin spice. Heat over medium heat, stirring constantly, until hot but not boiling." },
      { id: "2", step: "Remove the saucepan from heat and whisk in the vanilla extract." },
      { id: "3", step: "Brew a cup(s) of your favorite coffee." },
      { id: "4", step: "Pour the hot coffee into a mug, followed by the pumpkin spice milk mixture. Stir to combine." },
      { id: "5", step: "Top with whipped cream and garnish with a cinnamon stick, if desired." }
    ]
  },
  {
    ownerUid: "PXhGH3KPq2dBkX4vsJkJkT476OT2",
    title: "Quinoa Stuffed Bell Peppers",
    ingredients: [
      { name: "quinoa", quantity: "1", unit: "cup(s)" },
      { name: "water", quantity: "2", unit: "cup(s)" },
      { name: "bell peppers", quantity: "4", unit: "" },
      { name: "black beans", quantity: "1", unit: "cup(s)" },
      { name: "corn kernels", quantity: "1", unit: "cup(s)" },
      { name: "tomato", quantity: "1", unit: "" },
      { name: "cheddar cheese", quantity: "1", unit: "cup(s)" },
      { name: "olive oil", quantity: "1", unit: "tablespoon(s)" },
      { name: "salt", quantity: "to taste", unit: "" },
      { name: "black pepper", quantity: "to taste", unit: "" },
      { name: "garlic powder", quantity: "1/2", unit: "teaspoon(s)" }
    ],
    time: {
      prep: ["0", "15"], //hours, minutes
      cook: ["0", "15"]
    },
    imageUrls: ["http://res.cloudinary.com/recipeb00k/image/upload/v1693932089/wariqgft13zuqzzfgdas.jpg","http://res.cloudinary.com/recipeb00k/image/upload/v1693932089/wariqgft13zuqzzfgdas.jpg","http://res.cloudinary.com/recipeb00k/image/upload/v1693932089/wariqgft13zuqzzfgdas.jpg"],
    instructions: [
      { id: "1", step: "Preheat the oven to 375°F (190°C)." },
      { id: "2", step: "In a saucepan, bring 2 cup(s) of water to a boil. Add the quinoa and a pinch of salt. Reduce heat to low, cover, and cook for 15 minutes, or until quinoa is cooked and water is absorbed. Remove from heat and let sit for 5 minutes, then fluff with a fork." },
      { id: "3", step: "Cut the tops off the bell peppers and remove the seeds and membranes." },
      { id: "4", step: "In a large bowl, mix together the cooked quinoa, black beans, corn, diced tomato, half of the cheddar cheese, olive oil, salt, black pepper, and garlic powder." },
      { id: "5", step: "Stuff the bell peppers with the quinoa mixture and place them in a baking dish." },
      { id: "6", step: "Cover the baking dish with aluminum foil and bake for 25 minutes." },
      { id: "7", step: "Remove the foil, sprinkle the remaining cheddar cheese on top of the peppers, and bake for another 5 minutes, or until cheese is melted." }
    ]
  },
  {
    ownerUid: "PXhGH3KPq2dBkX4vsJkJkT476OT2",
    title: "Lemon Garlic Roast Chicken",
    ingredients: [
      { name: "chicken", quantity: "4", unit: "pound(s)" },
      { name: "lemons", quantity: "2", unit: "" },
      { name: "garlic cloves", quantity: "6", unit: "" },
      { name: "olive oil", quantity: "1/4", unit: "cup(s)" },
      { name: "rosemary", quantity: "2", unit: "sprigs" },
      { name: "thyme", quantity: "2", unit: "sprigs" },
      { name: "salt", quantity: "to taste", unit: "" },
      { name: "black pepper", quantity: "to taste", unit: "" }
    ],
    time: {
      prep: ["0", "15"], //hours, minutes
      cook: ["0", "15"]
    },
    imageUrls: ["http://res.cloudinary.com/recipeb00k/image/upload/v1693932220/tilwa9kidxhmadfe4mfc.webp","http://res.cloudinary.com/recipeb00k/image/upload/v1693932220/tilwa9kidxhmadfe4mfc.webp","http://res.cloudinary.com/recipeb00k/image/upload/v1693932220/tilwa9kidxhmadfe4mfc.webp"],
    instructions: [
      { id: "1", step: "Preheat your oven to 425°F (220°C). Place a rack inside a roasting pan." },
      { id: "2", step: "Rinse the chicken inside and out, then pat dry with paper towels." },
      { id: "3", step: "In a bowl, mix together the olive oil, juice of one lemon, minced garlic, salt, and pepper." },
      { id: "4", step: "Rub the olive oil mixture all over the chicken, including the cavity, and under the skin of the breast." },
      { id: "5", step: "Stuff the chicken cavity with rosemary, thyme, and the remaining lemon cut into wedges." },
      { id: "6", step: "Place the chicken on the rack in the roasting pan. Tie the legs together with kitchen twine and tuck the wing tips under the body." },
      { id: "7", step: "Roast the chicken in the preheated oven for about 1.5 hours, or until the internal temperature reaches 165°F (74°C). Baste the chicken with pan juices every 30 minutes." },
      { id: "8", step: "Once done, remove the chicken from the oven and let it rest for 10 minutes before carving." }
    ]
  },
  {
    ownerUid: "PXhGH3KPq2dBkX4vsJkJkT476OT2",
    title: "Vegan Coconut Curry",
    ingredients: [
      { name: "coconut oil", quantity: "2", unit: "tablespoon(s)" },
      { name: "onion", quantity: "1", unit: "" },
      { name: "garlic cloves", quantity: "3", unit: "" },
      { name: "ginger", quantity: "1", unit: "inch" },
      { name: "curry powder", quantity: "2", unit: "tablespoon(s)" },
      { name: "turmeric", quantity: "1", unit: "teaspoon(s)" },
      { name: "canned chickpeas", quantity: "1", unit: "cup(s)" },
      { name: "canned coconut milk", quantity: "500", unit: "milliliter(s)" },
      { name: "vegetable broth", quantity: "2", unit: "cup(s)" },
      { name: "spinach", quantity: "2", unit: "cup(s)" },
      { name: "salt", quantity: "to taste", unit: "" },
      { name: "black pepper", quantity: "to taste", unit: "" }
    ],
    time: {
      prep: ["0", "15"], //hours, minutes
      cook: ["0", "15"]
    },
    imageUrls: ["http://res.cloudinary.com/recipeb00k/image/upload/v1693932317/qjfoadxs8d4viyhlv5kp.jpg","http://res.cloudinary.com/recipeb00k/image/upload/v1693932317/qjfoadxs8d4viyhlv5kp.jpg","http://res.cloudinary.com/recipeb00k/image/upload/v1693932317/qjfoadxs8d4viyhlv5kp.jpg"],
    instructions: [
      { id: "1", step: "Heat the coconut oil in a large pot over medium heat." },
      { id: "2", step: "Dice the onion, mince the garlic and ginger, and add them to the pot. Sauté for 5 minutes until the onion is translucent." },
      { id: "3", step: "Add curry powder and turmeric to the pot and stir well to combine." },
      { id: "4", step: "Rinse and drain the chickpeas, then add them to the pot along with the coconut milk and vegetable broth." },
      { id: "5", step: "Bring to a boil, then reduce heat to low, cover, and simmer for 20 minutes." },
      { id: "6", step: "Wash the spinach and stir it into the pot until wilted. Season with salt and pepper to taste." },
      { id: "7", step: "Serve hot, garnished with a sprinkle of extra curry powder or a dollop of coconut cream, if desired." }
    ]
  },
  {
    ownerUid: "PXhGH3KPq2dBkX4vsJkJkT476OT2",
    title: "Blueberry Pancakes",
    ingredients: [
      { name: "all-purpose flour", quantity: "1", unit: "cup(s)" },
      { name: "sugar", quantity: "2", unit: "tablespoon(s)" },
      { name: "baking powder", quantity: "2", unit: "teaspoon(s)" },
      { name: "salt", quantity: "1/4", unit: "teaspoon(s)" },
      { name: "milk", quantity: "3/4", unit: "cup(s)" },
      { name: "egg", quantity: "1", unit: "" },
      { name: "unsalted butter", quantity: "2", unit: "tablespoon(s)" },
      { name: "blueberries", quantity: "1", unit: "cup(s)" },
      { name: "additional butter", quantity: "for greasing", unit: "" }
    ],
    time: {
      prep: ["0", "15"], //hours, minutes
      cook: ["0", "15"]
    },
    imageUrls: ["http://res.cloudinary.com/recipeb00k/image/upload/v1693932404/b7nkeefmq6eh4nokx2xj.jpg","http://res.cloudinary.com/recipeb00k/image/upload/v1693932404/b7nkeefmq6eh4nokx2xj.jpg","http://res.cloudinary.com/recipeb00k/image/upload/v1693932404/b7nkeefmq6eh4nokx2xj.jpg"],
    instructions: [
      { id: "1", step: "In a large bowl, mix together the flour, sugar, baking powder, and salt." },
      { id: "2", step: "In another bowl, whisk together the milk, egg, and melted butter." },
      { id: "3", step: "Combine the wet and dry ingredients, stirring just until the batter comes together. Gently fold in the blueberries." },
      { id: "4", step: "Heat a non-stick skillet or griddle over medium heat and lightly grease with additional butter." },
      { id: "5", step: "Pour 1/4 cup(s) of batter onto the skillet for each pancake. Cook until bubbles form on the surface, then flip and cook until golden brown on the other side." },
      { id: "6", step: "Serve immediately, topped with additional blueberries, butter, and your choice of syrup." }
    ]
  },
  {
    ownerUid: "PXhGH3KPq2dBkX4vsJkJkT476OT2",
    title: "Homemade Sushi Rolls",
    ingredients: [
      { name: "sushi rice", quantity: "2", unit: "cup(s)" },
      { name: "water", quantity: "2 1/2", unit: "cup(s)" },
      { name: "rice vinegar", quantity: "1/4", unit: "cup(s)" },
      { name: "sugar", quantity: "1", unit: "tablespoon(s)" },
      { name: "salt", quantity: "1/2", unit: "teaspoon(s)" },
      { name: "nori sheets", quantity: "4", unit: "" },
      { name: "cucumber", quantity: "1", unit: "" },
      { name: "avocado", quantity: "1", unit: "" },
      { name: "smoked salmon", quantity: "1/2", unit: "pound(s)" },
      { name: "soy sauce", quantity: "for dipping", unit: "" },
      { name: "wasabi", quantity: "for dipping", unit: "" }
    ],
    time: {
      prep: ["0", "15"], //hours, minutes
      cook: ["0", "15"]
    },
    imageUrls: ["http://res.cloudinary.com/recipeb00k/image/upload/v1693932501/ni0buqrcmpb3mnqmtzgf.jpg","http://res.cloudinary.com/recipeb00k/image/upload/v1693932501/ni0buqrcmpb3mnqmtzgf.jpg","http://res.cloudinary.com/recipeb00k/image/upload/v1693932501/ni0buqrcmpb3mnqmtzgf.jpg"],
    instructions: [
      { id: "1", step: "Rinse the sushi rice under cold water until the water runs clear. Combine with 2 1/2 cup(s) water and bring to a boil. Reduce heat to low, cover, and cook for 20 minutes. Let it sit, covered, for an additional 10 minutes." },
      { id: "2", step: "Combine rice vinegar, sugar, and salt in a small saucepan. Heat until the sugar dissolves. Fold this mixture into the cooked rice until well combined. Let the rice cool to room temperature." },
      { id: "3", step: "Cut the cucumber, avocado, and smoked salmon into thin strips." },
      { id: "4", step: "Place a nori sheet, shiny side down, on a bamboo sushi rolling mat. Wet your fingers to prevent the rice from sticking and evenly spread a layer of rice over the nori, leaving a small margin at the top." },
      { id: "5", step: "Arrange strips of cucumber, avocado, and smoked salmon horizontally on the rice." },
      { id: "6", step: "Using the bamboo mat as a guide, tightly roll the nori around the fillings. Seal the edge with a little water." },
      { id: "7", step: "Slice the roll into 6-8 pieces using a sharp, wet knife." },
      { id: "8", step: "Serve with soy sauce and wasabi." }
    ]
  },
  {
    ownerUid: "PXhGH3KPq2dBkX4vsJkJkT476OT2",
    title: "Vegan Chocolate Avocado Smoothie",
    ingredients: [
      { name: "avocado", quantity: "1", unit: "" },
      { name: "banana", quantity: "1", unit: "" },
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
    imageUrls:[ "http://res.cloudinary.com/recipeb00k/image/upload/v1693932617/oqkqhaicmy2g4irawyyg.jpg", "http://res.cloudinary.com/recipeb00k/image/upload/v1693932617/oqkqhaicmy2g4irawyyg.jpg", "http://res.cloudinary.com/recipeb00k/image/upload/v1693932617/oqkqhaicmy2g4irawyyg.jpg"],
    instructions: [
      { id: "1", step: "Cut the avocado in half, remove the pit, and scoop out the flesh." },
      { id: "2", step: "Peel the banana and break it into smaller pieces." },
      { id: "3", step: "Place the avocado, banana, unsweetened cocoa powder, almond milk, maple syrup, and vanilla extract in a blender." },
      { id: "4", step: "Blend on high until smooth and creamy, adding ice cubes to achieve your desired consistency." },
      { id: "5", step: "Taste and adjust sweetness by adding more maple syrup if needed." },
      { id: "6", step: "Pour into glasses and serve immediately." }
    ]
  },
  {
    ownerUid: "PXhGH3KPq2dBkX4vsJkJkT476OT2",
    title: "Zucchini Noodles with Pesto",
    ingredients: [
      { name: "zucchinis", quantity: "3", unit: "" },
      { name: "basil leaves", quantity: "2", unit: "cup(s)" },
      { name: "pine nuts", quantity: "1/4", unit: "cup(s)" },
      { name: "garlic cloves", quantity: "2", unit: "" },
      { name: "Parmesan cheese", quantity: "1/2", unit: "cup(s)" },
      { name: "olive oil", quantity: "1/2", unit: "cup(s)" },
      { name: "salt", quantity: "to taste", unit: "" },
      { name: "black pepper", quantity: "to taste", unit: "" }
    ],
    time: {
      prep: ["0", "15"], //hours, minutes
      cook: ["0", "15"]
    },
    imageUrls: ["http://res.cloudinary.com/recipeb00k/image/upload/v1693932702/y0marsyxi0mvusuzja21.jpg","http://res.cloudinary.com/recipeb00k/image/upload/v1693932702/y0marsyxi0mvusuzja21.jpg","http://res.cloudinary.com/recipeb00k/image/upload/v1693932702/y0marsyxi0mvusuzja21.jpg"],
    instructions: [
      { id: "1", step: "Use a spiralizer to turn the zucchinis into noodles. Set aside." },
      { id: "2", step: "In a food processor, combine the basil leaves, pine nuts, garlic cloves, and Parmesan cheese." },
      { id: "3", step: "Process until finely chopped, then slowly add the olive oil while the food processor is running. Season with salt and pepper to taste." },
      { id: "4", step: "In a large skillet over medium heat, toss the zucchini noodles for about 3-5 minutes, or until slightly softened." },
      { id: "5", step: "Add the prepared pesto to the zucchini noodles and toss to combine." },
      { id: "6", step: "Serve immediately, garnished with additional Parmesan cheese if desired." }
    ]
  },
  {
    ownerUid: "PXhGH3KPq2dBkX4vsJkJkT476OT2",
    title: "Vegan Lentil Soup",
    ingredients: [
      { name: "olive oil", quantity: "2", unit: "tablespoon(s)" },
      { name: "onion", quantity: "1", unit: "" },
      { name: "garlic cloves", quantity: "3", unit: "" },
      { name: "carrots", quantity: "2", unit: "" },
      { name: "celery stalks", quantity: "2", unit: "" },
      { name: "green lentils", quantity: "1", unit: "cup(s)" },
      { name: "vegetable broth", quantity: "6", unit: "cup(s)" },
      { name: "cumin", quantity: "1", unit: "teaspoon(s)(s)" },
      { name: "coriander", quantity: "1", unit: "teaspoon(s)(s)" },
      { name: "salt", quantity: "to taste", unit: "" },
      { name: "black pepper", quantity: "2", unit: "gram(s)" },
      { name: "spinach leaves", quantity: "2", unit: "cup(s)" }
    ],
    time: {
      prep: ["0", "15"], //hours, minutes
      cook: ["0", "15"]
    },
    imageUrls: ["http://res.cloudinary.com/recipeb00k/image/upload/v1693932879/holw872kf2vfrefpqwes.jpg","http://res.cloudinary.com/recipeb00k/image/upload/v1693932702/y0marsyxi0mvusuzja21.jpg","http://res.cloudinary.com/recipeb00k/image/upload/v1693932702/y0marsyxi0mvusuzja21.jpg"],
    instructions: [
      { id: "1", step: "Heat the olive oil in a large pot over medium heat." },
      { id: "2", step: "Add the chopped onion and garlic and sauté until translucent." },
      { id: "3", step: "Add the chopped carrots and celery and cook for another 5 minutes." },
      { id: "4", step: "Stir in the lentils, vegetable broth, cumin, and coriander. Bring to a boil." },
      { id: "5", step: "Reduce heat to low, cover, and simmer for about 30 minutes, or until the lentils are tender." },
      { id: "6", step: "Season with salt and pepper to taste." },
      { id: "7", step: "Stir in the spinach leaves and cook until wilted." },
      { id: "8", step: "Serve hot, optionally garnished with extra olive oil or a lemon wedge." }
    ]
  },
  {
    ownerUid: "PXhGH3KPq2dBkX4vsJkJkT476OT2",
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
      cook: ["0", "15"]
    },
    imageUrls: ["http://res.cloudinary.com/recipeb00k/image/upload/v1693932998/ciflrn3svw1e1m8pr21r.jpg","http://res.cloudinary.com/recipeb00k/image/upload/v1693932998/ciflrn3svw1e1m8pr21r.jpg","http://res.cloudinary.com/recipeb00k/image/upload/v1693932998/ciflrn3svw1e1m8pr21r.jpg"],
    instructions: [
      { id: "1", step: "Preheat the oven to 350°F (175°C). Line a baking sheet with parchment paper." },
      { id: "2", step: "In a medium bowl, mix together the almond flour, baking powder, and salt." },
      { id: "3", step: "In a separate bowl, combine the melted coconut oil, maple syrup, and vanilla extract." },
      { id: "4", step: "Add the wet ingredients to the dry ingredients and mix until a dough forms." },
      { id: "5", step: "Form small balls of dough and place them on the baking sheet. Flatten each ball slightly with the back of a spoon." },
      { id: "6", step: "Sprinkle slivered almonds on top of each cookie." },
      { id: "7", step: "Bake for 12 minutes or until the edges are slightly golden." },
      { id: "8", step: "Let the cookies cool on the baking sheet for 10 minutes before transferring them to a wire rack to cool completely." }
    ]
  },
  {
    ownerUid: "PXhGH3KPq2dBkX4vsJkJkT476OT2",
    title: "Spicy Mango Salsa",
    ingredients: [
      { name: "ripe mango", quantity: "2", unit: "" },
      { name: "red onion", quantity: "1", unit: "" },
      { name: "jalapeño", quantity: "1", unit: "" },
      { name: "cilantro", quantity: "1/4", unit: "cup(s)" },
      { name: "lime", quantity: "1", unit: "" },
      { name: "salt", quantity: "3", unit: "grams" },
      { name: "black pepper", quantity: "to taste", unit: "" }
    ],
    time: {
      prep: ["0", "15"], //hours, minutes
      cook: ["0", "15"]
    },
    imageUrls: ["http://res.cloudinary.com/recipeb00k/image/upload/v1693933116/oatzexydbrrqmtkf2o53.jpg","http://res.cloudinary.com/recipeb00k/image/upload/v1693933116/oatzexydbrrqmtkf2o53.jpg","http://res.cloudinary.com/recipeb00k/image/upload/v1693933116/oatzexydbrrqmtkf2o53.jpg"],
    instructions: [
      { id: "1", step: "Peel and dice the mangoes into small cubes." },
      { id: "2", step: "Finely chop the red onion." },
      { id: "3", step: "Remove the seeds from the jalapeño and finely chop it. For a spicier salsa, you can leave some seeds in." },
      { id: "4", step: "Chop the cilantro leaves." },
      { id: "5", step: "In a large bowl, combine the mango, red onion, jalapeño, and cilantro." },
      { id: "6", step: "Squeeze the juice of one lime over the mixture." },
      { id: "7", step: "Season with salt and black pepper to taste." },
      { id: "8", step: "Mix well and serve immediately, or refrigerate for up to 24 hours to let the flavors meld." }
    ]
  } 
];


export default recipes