const recipes = [
  {
    id: 1,
    title: 'Pasta Carbonara',
    ingredients: [
      { name: 'pasta', quantity: '8 ounces' },
      { name: 'bacon', quantity: '4 slices' },
      { name: 'eggs', quantity: '2' },
      { name: 'parmesan cheese', quantity: '1/2 cup' },
      { name: 'black pepper', quantity: '1/2 teaspoon' },
      { name: 'salt', quantity: 'to taste' }
    ],
    image: 'https://images6.alphacoders.com/327/327013.jpg',
    time: {
      prep: [0, 10],
      cook: [0, 15]
    },
    instructions: [
      { id: 1, step: 'Cook the pasta according to the package instructions.' },
      { id: 2, step: 'In a separate pan, cook the bacon until crispy.' },
      { id: 3, step: 'In a bowl, whisk together eggs, grated parmesan cheese, black pepper, and a pinch of salt.' },
      { id: 4, step: 'Drain the cooked pasta and immediately add it to the bowl with the egg mixture, tossing quickly to coat the pasta.' },
      { id: 5, step: 'The residual heat from the pasta will cook the eggs and create a creamy sauce.' },
      { id: 6, step: 'Crumble the crispy bacon over the pasta and serve hot.' }
    ]
  },
  {
    id: 2,
    title: 'Chocolate Chip Cookies',
    ingredients: [
      { name: 'flour', quantity: '2 1/4 cups' },
      { name: 'baking soda', quantity: '1/2 teaspoon' },
      { name: 'salt', quantity: '1/2 teaspoon' },
      { name: 'butter', quantity: '1 cup (2 sticks)' },
      { name: 'granulated sugar', quantity: '3/4 cup' },
      { name: 'brown sugar', quantity: '3/4 cup' },
      { name: 'vanilla extract', quantity: '1 teaspoon' },
      { name: 'eggs', quantity: '2' },
      { name: 'chocolate chips', quantity: '2 cups' },
    ],
    image: 'https://images6.alphacoders.com/327/327013.jpg',
    time: {
      prep: [0, 15],
      cook: [0, 10]
    },
    instructions: [
      { id: 1, step: 'Preheat the oven to 375°F (190°C).' },
      { id: 2, step: 'In a mixing bowl, cream together the softened butter, granulated sugar, and brown sugar until smooth.' },
      { id: 3, step: 'Beat in the eggs and vanilla extract.' },
      { id: 4, step: 'In a separate bowl, combine the flour, baking soda, and salt.' },
      { id: 5, step: 'Gradually add the dry ingredients to the wet ingredients and mix well.' },
      { id: 6, step: 'Stir in the chocolate chips.' },
      { id: 7, step: 'Drop rounded spoonfuls of dough onto a baking sheet.' },
      { id: 8, step: 'Bake for 8-10 minutes or until golden brown.' },
      { id: 9, step: 'Allow cookies to cool on the baking sheet for a few minutes before transferring to a wire rack.' },
      { id: 10, step: 'Enjoy your freshly baked chocolate chip cookies!' }
    ]
  },
  {
    id: 3,
    title: 'Chicken Stir Fry',
    ingredients: [
      { name: 'chicken breasts', quantity: '2' },
      { name: 'soy sauce', quantity: '1/4 cup' },
      { name: 'cornstarch', quantity: '2 tablespoons' },
      { name: 'vegetable oil', quantity: '2 tablespoons' },
      { name: 'garlic cloves', quantity: '3', },
      { name: 'ginger', quantity: '1 tablespoon', },
      { name: 'broccoli florets', quantity: '2 cups' },
      { name: 'red bell pepper', quantity: '1', },
      { name: 'carrot', quantity: '1', },
      { name: 'green onions', quantity: '3', },
      { name: 'sesame oil', quantity: '1 tablespoon' },
      { name: 'sesame seeds', quantity: '1 tablespoon' },
      { name: 'cooked rice', quantity: '2 cups' },
      { name: 'red pepper flakes', quantity: '1/2 teaspoon', },
      { name: 'salt', quantity: 'to taste' },
      { name: 'black pepper', quantity: 'to taste' },
    ],
    image: 'https://images6.alphacoders.com/327/327013.jpg',
    time: {
      prep: [0, 15],
      cook: [0, 15]
    },
    instructions: [
      { id: 1, step: 'Cut the chicken into small bite-sized pieces and marinate in a mixture of soy sauce, cornstarch, salt, and black pepper for about 10 minutes.' },
      { id: 2, step: 'In a large skillet or wok, heat vegetable oil over medium-high heat.' },
      { id: 3, step: 'Add minced garlic and grated ginger to the skillet and sauté for a minute until fragrant.' },
      { id: 4, step: 'Add the marinated chicken to the skillet and stir-fry until it is cooked through and slightly browned.' },
      { id: 5, step: 'Add broccoli florets, sliced red bell pepper, and julienned carrot to the skillet.' },
      { id: 6, step: 'Continue to stir-fry the mixture for a few minutes until the vegetables are tender-crisp.' },
      { id: 7, step: 'Pour in sesame oil, toss the mixture together, and cook for another minute.' },
      { id: 8, step: 'Sprinkle sesame seeds, red pepper flakes, and sliced green onions over the stir-fry.' },
      { id: 9, step: 'Serve the chicken stir fry over cooked rice and enjoy!' }
    ]
  },
  {
    id: 4,
    title: 'Spaghetti Bolognese',
    ingredients: [
      { name: 'spaghetti', quantity: '8 ounces' },
      { name: 'ground beef', quantity: '1 pound' },
      { name: 'onion', quantity: '1', },
      { name: 'garlic cloves', quantity: '2', },
      { name: 'crushed tomatoes', quantity: '28 ounces' },
      { name: 'tomato paste', quantity: '2 tablespoons' },
      { name: 'beef broth', quantity: '1 cup' },
      { name: 'red wine', quantity: '1/2 cup' },
      { name: 'dried basil', quantity: '1 teaspoon' },
      { name: 'dried oregano', quantity: '1 teaspoon' },
      { name: 'sugar', quantity: '1 teaspoon' },
      { name: 'salt', quantity: 'to taste' },
      { name: 'black pepper', quantity: 'to taste' },
      { name: 'parmesan cheese', quantity: 'for garnish' },
      { name: 'fresh parsley', quantity: 'for garnish' },
    ],
    image: 'https://images6.alphacoders.com/327/327013.jpg',
    time: {
      prep: [0, 15],
      cook: [0, 30]
    },
    instructions: [
      { id: 1, step: 'Cook the spaghetti according to package instructions until al dente.' },
      { id: 2, step: 'In a large saucepan or pot, brown the ground beef over medium heat.' },
      { id: 3, step: 'Add diced onion and minced garlic to the beef and cook until softened.' },
      { id: 4, step: 'Stir in crushed tomatoes, tomato paste, beef broth, red wine, dried basil, dried oregano, sugar, salt, and black pepper.' },
      { id: 5, step: 'Let the sauce simmer for about 20 minutes, stirring occasionally.' },
      { id: 6, step: 'Taste and adjust seasoning if needed.' },
      { id: 7, step: 'Serve the Bolognese sauce over the cooked spaghetti.' },
      { id: 8, step: 'Garnish with grated parmesan cheese and chopped fresh parsley.' },
      { id: 9, step: 'Enjoy your delicious Spaghetti Bolognese!' }
    ]
  },
  {
    id: 5,
    title: 'Greek Salad',
    ingredients: [
      { name: 'cucumbers', quantity: '2' },
      { name: 'tomatoes', quantity: '2' },
      { name: 'red onion', quantity: '1/4' },
      { name: 'feta cheese', quantity: '1/2 cup' },
      { name: 'kalamata olives', quantity: '1/4 cup' },
      { name: 'extra-virgin olive oil', quantity: '3 tablespoons' },
      { name: 'red wine vinegar', quantity: '2 tablespoons' },
      { name: 'dried oregano', quantity: '1 teaspoon' },
      { name: 'salt', quantity: 'to taste' },
      { name: 'black pepper', quantity: 'to taste' },
    ],
    image: 'https://images6.alphacoders.com/327/327013.jpg',
    time: {
      prep: [0, 15],
      cook: [0, 0]
    },
    instructions: [
      { id: 1, step: 'Chop the cucumbers, tomatoes, and red onion into bite-sized pieces.' },
      { id: 2, step: 'In a large bowl, combine the chopped vegetables with feta cheese and kalamata olives.' },
      { id: 3, step: 'In a separate small bowl, whisk together extra-virgin olive oil, red wine vinegar, dried oregano, salt, and black pepper to make the dressing.' },
      { id: 4, step: 'Pour the dressing over the salad and toss gently to coat all the ingredients.' },
      { id: 5, step: 'Add more salt and black pepper if needed.' },
      { id: 6, step: 'Enjoy your refreshing Greek Salad!' }
    ]
  },
  {
    id: 6,
    title: 'Mushroom Risotto',
    ingredients: [
      { name: 'arborio rice', quantity: '1 cup' },
      { name: 'mushrooms', quantity: '8 ounces' },
      { name: 'butter', quantity: '2 tablespoons' },
      { name: 'olive oil', quantity: '1 tablespoon' },
      { name: 'onion', quantity: '1/2', },
      { name: 'garlic cloves', quantity: '2', },
      { name: 'white wine', quantity: '1/2 cup' },
      { name: 'vegetable broth', quantity: '4 cups' },
      { name: 'parmesan cheese', quantity: '1/2 cup' },
      { name: 'fresh thyme', quantity: '1 tablespoon' },
      { name: 'salt', quantity: 'to taste' },
      { name: 'black pepper', quantity: 'to taste' },
    ],
    image: 'https://images6.alphacoders.com/327/327013.jpg',
    time: {
      prep: [0, 15],
      cook: [0, 30]
    },
    instructions: [
      { id: 1, step: 'In a large saucepan, heat vegetable broth and keep it warm over low heat.' },
      { id: 2, step: 'In a separate large skillet or pot, melt 1 tablespoon of butter with olive oil over medium heat.' },
      { id: 3, step: 'Add chopped onion and minced garlic to the skillet and cook until softened.' },
      { id: 4, step: 'Stir in the arborio rice and cook for a minute until it is lightly toasted.' },
      { id: 5, step: 'Pour in the white wine and cook, stirring frequently, until the liquid is absorbed.' },
      { id: 6, step: 'Add a ladle of warm vegetable broth to the skillet and cook, stirring occasionally, until the liquid is absorbed.' },
      { id: 7, step: 'Continue adding broth, one ladle at a time, and cook until the rice is creamy and tender.' },
      { id: 8, step: 'Stir in sliced mushrooms, fresh thyme, and the remaining tablespoon of butter.' },
      { id: 9, step: 'Cook until the mushrooms are tender and the risotto is creamy.' },
      { id: 10, step: 'Stir in grated parmesan cheese, salt, and black pepper to taste.' },
      { id: 11, step: 'Serve the Mushroom Risotto hot and enjoy!' }
    ]
  },
  {
    id: 7,
    title: 'Chicken Parmesan',
    ingredients: [
      { name: 'chicken breasts', quantity: '4' },
      { name: 'all-purpose flour', quantity: '1/2 cup' },
      { name: 'eggs', quantity: '2' },
      { name: 'breadcrumbs', quantity: '1 cup' },
      { name: 'parmesan cheese', quantity: '1/2 cup' },
      { name: 'dried oregano', quantity: '1 teaspoon' },
      { name: 'garlic powder', quantity: '1/2 teaspoon' },
      { name: 'marinara sauce', quantity: '2 cups' },
      { name: 'shredded mozzarella cheese', quantity: '1 cup' },
      { name: 'fresh basil leaves', quantity: 'for garnish' },
      { name: 'salt', quantity: 'to taste' },
      { name: 'black pepper', quantity: 'to taste' },
      { name: 'olive oil', quantity: '3 tablespoons' },
    ],
    image: 'https://images6.alphacoders.com/327/327013.jpg',
    time: {
      prep: [0, 15],
      cook: [0, 25]
    },
    instructions: [
      { id: 1, step: 'Preheat the oven to 375°F (190°C).' },
      { id: 2, step: 'In a shallow dish, season all-purpose flour with salt and black pepper.' },
      { id: 3, step: 'In a separate dish, beat the eggs.' },
      { id: 4, step: 'In another dish, combine breadcrumbs, grated parmesan cheese, dried oregano, and garlic powder.' },
      { id: 5, step: 'Dredge the chicken breasts in seasoned flour, dip them in beaten eggs, and coat them with the breadcrumb mixture.' },
      { id: 6, step: 'In a large skillet, heat olive oil over medium-high heat.' },
      { id: 7, step: 'Cook the breaded chicken breasts until golden brown and cooked through.' },
      { id: 8, step: 'Preheat the broiler.' },
      { id: 9, step: 'Transfer the cooked chicken breasts to a baking dish.' },
      { id: 10, step: 'Top each chicken breast with marinara sauce and shredded mozzarella cheese.' },
      { id: 11, step: 'Broil the chicken parmesan until the cheese is melted and bubbly.' },
      { id: 12, step: 'Garnish with fresh basil leaves and serve hot.' },
      { id: 13, step: 'Enjoy your delicious Chicken Parmesan!' }
    ]
  },
  {
    id: 8,
    title: 'Banana Pancakes',
    ingredients: [
      { name: 'ripe bananas', quantity: '2' },
      { name: 'all-purpose flour', quantity: '1 cup' },
      { name: 'milk', quantity: '3/4 cup' },
      { name: 'egg', quantity: '1' },
      { name: 'baking powder', quantity: '1 tablespoon' },
      { name: 'sugar', quantity: '1 tablespoon' },
      { name: 'salt', quantity: '1/4 teaspoon' },
      { name: 'butter', quantity: '2 tablespoons, melted' },
      { name: 'maple syrup', quantity: 'for serving' },
    ],
    image: 'https://images6.alphacoders.com/327/327013.jpg',
    time: {
      prep: [0, 10],
      cook: [0, 10]
    },
    instructions: [
      { id: 1, step: 'In a mixing bowl, mash the ripe bananas with a fork.' },
      { id: 2, step: 'Add the all-purpose flour, milk, egg, baking powder, sugar, and salt to the mashed bananas.' },
      { id: 3, step: 'Whisk the ingredients together until the pancake batter is smooth.' },
      { id: 4, step: 'Heat a non-stick pan over medium heat and lightly grease with cooking spray or melted butter.' },
      { id: 5, step: 'Pour a small amount of pancake batter onto the pan to form each pancake.' },
      { id: 6, step: 'Cook until bubbles appear on the surface of the pancakes, then flip and cook until golden brown on both sides.' },
      { id: 7, step: 'Repeat with the remaining pancake batter.' },
      { id: 8, step: 'Serve the banana pancakes with maple syrup and enjoy!' }
    ]
  },
  {
    id: 9,
    title: 'Caesar Salad',
    ingredients: [
      { name: 'romaine lettuce', quantity: '1 head' },
      { name: 'croutons', quantity: '1 cup' },
      { name: 'parmesan cheese', quantity: '1/2 cup, grated' },
      { name: 'caesar dressing', quantity: '1/2 cup' },
      { name: 'lemon', quantity: '1' },
      { name: 'olive oil', quantity: '2 tablespoons' },
      { name: 'garlic cloves', quantity: '2, minced' },
      { name: 'dijon mustard', quantity: '1 teaspoon' },
      { name: 'anchovy paste', quantity: '1 teaspoon' },
      { name: 'salt', quantity: 'to taste' },
      { name: 'black pepper', quantity: 'to taste' },
    ],
    image: 'https://images6.alphacoders.com/327/327013.jpg',
    time: {
      prep: [0, 15],
      cook: [0, 0]
    },
    instructions: [
      { id: 1, step: 'Tear the romaine lettuce into bite-sized pieces and place them in a large salad bowl.' },
      { id: 2, step: 'In a small bowl, whisk together caesar dressing, freshly squeezed lemon juice, minced garlic, dijon mustard, anchovy paste, salt, and black pepper to make the dressing.' },
      { id: 3, step: 'Drizzle the dressing over the romaine lettuce and toss to coat the leaves.' },
      { id: 4, step: 'Add croutons and grated parmesan cheese to the salad and toss again.' },
      { id: 5, step: 'Drizzle a bit of olive oil over the salad for extra richness.' },
      { id: 6, step: 'Serve the Caesar Salad and enjoy!' }
    ]
  },
  {
    id: 10,
    title: 'Beef Tacos',
    ingredients: [
      { name: 'ground beef', quantity: '1 pound' },
      { name: 'onion', quantity: '1', },
      { name: 'garlic cloves', quantity: '2', },
      { name: 'taco seasoning', quantity: '1 packet' },
      { name: 'tomato sauce', quantity: '8 ounces' },
      { name: 'taco shells', quantity: '12' },
      { name: 'shredded lettuce', quantity: '2 cups' },
      { name: 'diced tomatoes', quantity: '1 cup' },
      { name: 'shredded cheddar cheese', quantity: '1 cup' },
      { name: 'sour cream', quantity: '1/2 cup' },
      { name: 'guacamole', quantity: '1/2 cup' },
      { name: 'salsa', quantity: '1/2 cup' },
      { name: 'olive oil', quantity: '2 tablespoons' },
      { name: 'salt', quantity: 'to taste' },
      { name: 'black pepper', quantity: 'to taste' },
    ],
    image: 'https://images6.alphacoders.com/327/327013.jpg',
    time: {
      prep: [0, 15],
      cook: [0, 15]
    },
    instructions: [
      { id: 1, step: 'In a large skillet, heat olive oil over medium heat.' },
      { id: 2, step: 'Add diced onion and minced garlic to the skillet and cook until softened.' },
      { id: 3, step: 'Add ground beef to the skillet and cook until it is browned and cooked through.' },
      { id: 4, step: 'Stir in taco seasoning and tomato sauce, and let the mixture simmer for a few minutes.' },
      { id: 5, step: 'Preheat the taco shells according to package instructions.' },
      { id: 6, step: 'Assemble the beef tacos by filling each taco shell with the cooked beef mixture.' },
      { id: 7, step: 'Top the tacos with shredded lettuce, diced tomatoes, shredded cheddar cheese, sour cream, guacamole, and salsa.' },
      { id: 8, step: 'Add salt and black pepper to taste.' },
      { id: 9, step: 'Serve the Beef Tacos and enjoy your tasty Tex-Mex meal!' }
    ]
  },
  {
    id: 11,
    title: 'Chicken Noodle Soup',
    ingredients: [
      { name: 'chicken breasts', quantity: '2' },
      { name: 'olive oil', quantity: '2 tablespoons' },
      { name: 'onion', quantity: '1', },
      { name: 'carrots', quantity: '2', },
      { name: 'celery stalks', quantity: '2', },
      { name: 'garlic cloves', quantity: '2', },
      { name: 'chicken broth', quantity: '6 cups' },
      { name: 'egg noodles', quantity: '4 ounces' },
      { name: 'bay leaf', quantity: '1' },
      { name: 'fresh thyme', quantity: '1 sprig' },
      { name: 'salt', quantity: 'to taste' },
      { name: 'black pepper', quantity: 'to taste' },
      { name: 'fresh parsley', quantity: 'for garnish' },
    ],
    image: 'https://images6.alphacoders.com/327/327013.jpg',
    time: {
      prep: [0, 15],
      cook: [0, 30]
    },
    instructions: [
      { id: 1, step: 'In a large pot, heat olive oil over medium heat.' },
      { id: 2, step: 'Add diced onion, sliced carrots, and sliced celery to the pot and sauté until softened.' },
      { id: 3, step: 'Add minced garlic and cook until fragrant.' },
      { id: 4, step: 'Add chicken breasts, bay leaf, and fresh thyme to the pot.' },
      { id: 5, step: 'Pour in chicken broth and bring the mixture to a boil.' },
      { id: 6, step: 'Reduce the heat, cover the pot, and let the soup simmer for about 20 minutes until the chicken is cooked through.' },
      { id: 7, step: 'Remove the chicken breasts from the pot and shred them using two forks.' },
      { id: 8, step: 'Return the shredded chicken to the pot.' },
      { id: 9, step: 'Add egg noodles and let the soup cook for another 8-10 minutes until the noodles are tender.' },
      { id: 10, step: 'Season the soup with salt and black pepper to taste.' },
      { id: 11, step: 'Serve the Chicken Noodle Soup hot, garnished with fresh parsley.' },
      { id: 12, step: 'Enjoy your comforting and nourishing soup!' }
    ]
  },
  {
    id: 12,
    title: 'Cheeseburger',
    ingredients: [
      { name: 'ground beef', quantity: '1 pound' },
      { name: 'hamburger buns', quantity: '4' },
      { name: 'cheddar cheese slices', quantity: '4' },
      { name: 'lettuce leaves', quantity: '4' },
      { name: 'tomato', quantity: '1', },
      { name: 'onion', quantity: '1/2', },
      { name: 'pickles', quantity: '8 slices' },
      { name: 'ketchup', quantity: '1/4 cup' },
      { name: 'mustard', quantity: '1/4 cup' },
      { name: 'salt', quantity: 'to taste' },
      { name: 'black pepper', quantity: 'to taste' },
    ],
    image: 'https://images6.alphacoders.com/327/327013.jpg',
    time: {
      prep: [0, 10],
      cook: [0, 10]
    },
    instructions: [
      { id: 1, step: 'Divide the ground beef into four equal portions and shape them into patties.' },
      { id: 2, step: 'Season the patties with salt and black pepper.' },
      { id: 3, step: 'Preheat a grill or skillet over medium-high heat.' },
      { id: 4, step: 'Cook the burger patties for about 4-5 minutes per side, or until they reach your desired level of doneness.' },
      { id: 5, step: 'During the last minute of cooking, place a slice of cheddar cheese on each patty to melt.' },
      { id: 6, step: 'Toast the hamburger buns on the grill for a minute until lightly browned.' },
      { id: 7, step: 'Spread ketchup and mustard on the bottom halves of the buns.' },
      { id: 8, step: 'Top with cooked burger patties.' },
      { id: 9, step: 'Add lettuce leaves, sliced tomatoes, sliced onions, and pickles.' },
      { id: 10, step: 'Place the top halves of the buns on the burgers.' },
      { id: 11, step: 'Serve the Cheeseburger hot and enjoy your classic American meal!' }
    ]
  },
  {
    id: 13,
    title: 'Chicken Alfredo',
    ingredients: [
      { name: 'fettuccine pasta', quantity: '8 ounces' },
      { name: 'chicken breasts', quantity: '2' },
      { name: 'butter', quantity: '1/2 cup' },
      { name: 'heavy cream', quantity: '1 cup' },
      { name: 'garlic cloves', quantity: '3', },
      { name: 'parmesan cheese', quantity: '1 cup' },
      { name: 'salt', quantity: 'to taste' },
      { name: 'black pepper', quantity: 'to taste' },
      { name: 'fresh parsley', quantity: 'for garnish' },
      { name: 'lemon wedges', quantity: 'for serving' },
    ],
    image: 'https://images6.alphacoders.com/327/327013.jpg',
    time: {
      prep: [0, 10],
      cook: [0, 20]
    },
    instructions: [
      { id: 1, step: 'Cook the fettuccine pasta according to package instructions until al dente.' },
      { id: 2, step: 'Season the chicken breasts with salt and black pepper.' },
      { id: 3, step: 'In a large skillet, melt butter over medium heat.' },
      { id: 4, step: 'Add sliced chicken breasts to the skillet and cook until they are golden brown and cooked through.' },
      { id: 5, step: 'Remove the chicken from the skillet and set aside.' },
      { id: 6, step: 'In the same skillet, add minced garlic and sauté until fragrant.' },
      { id: 7, step: 'Pour in heavy cream and bring it to a simmer.' },
      { id: 8, step: 'Stir in grated parmesan cheese until the sauce is creamy and smooth.' },
      { id: 9, step: 'Add cooked fettuccine pasta to the sauce and toss to coat the pasta with the Alfredo sauce.' },
      { id: 10, step: 'Slice the cooked chicken breasts and place them on top of the pasta.' },
      { id: 11, step: 'Garnish with chopped fresh parsley.' },
      { id: 12, step: 'Serve the Chicken Alfredo hot, with lemon wedges on the side.' },
      { id: 13, step: 'Enjoy your rich and creamy pasta dish!' }
    ]
  },
  {
    id: 14,
    title: 'Shrimp Scampi',
    ingredients: [
      { name: 'linguine pasta', quantity: '8 ounces' },
      { name: 'shrimp', quantity: '1 pound' },
      { name: 'butter', quantity: '1/2 cup' },
      { name: 'olive oil', quantity: '2 tablespoons' },
      { name: 'garlic cloves', quantity: '4', },
      { name: 'white wine', quantity: '1/4 cup' },
      { name: 'lemon', quantity: '1', },
      { name: 'red pepper flakes', quantity: '1/2 teaspoon', },
      { name: 'parsley', quantity: '1/4 cup', },
      { name: 'salt', quantity: 'to taste' },
      { name: 'black pepper', quantity: 'to taste' },
    ],
    image: 'https://images6.alphacoders.com/327/327013.jpg',
    time: {
      prep: [0, 15],
      cook: [0, 15]
    },
    instructions: [
      { id: 1, step: 'Cook the linguine pasta according to package instructions until al dente.' },
      { id: 2, step: 'In a large skillet, heat olive oil and melt butter over medium heat.' },
      { id: 3, step: 'Add minced garlic and sauté until fragrant.' },
      { id: 4, step: 'Add shrimp to the skillet and cook until they turn pink and are cooked through.' },
      { id: 5, step: 'Squeeze the juice of one lemon into the skillet and add white wine.' },
      { id: 6, step: 'Stir in red pepper flakes, chopped parsley, salt, and black pepper.' },
      { id: 7, step: 'Add the cooked linguine pasta to the skillet and toss to combine everything.' },
      { id: 8, step: 'Serve the Shrimp Scampi hot, garnished with extra parsley.' },
      { id: 9, step: 'Enjoy your delicious and flavorful seafood pasta!' }
    ]
  },
  {
    id: 15,
    title: 'Caprese Salad',
    ingredients: [
      { name: 'tomatoes', quantity: '4' },
      { name: 'fresh mozzarella', quantity: '8 ounces' },
      { name: 'fresh basil leaves', quantity: '1 cup' },
      { name: 'balsamic glaze', quantity: '2 tablespoons' },
      { name: 'extra-virgin olive oil', quantity: '2 tablespoons' },
      { name: 'salt', quantity: 'to taste' },
      { name: 'black pepper', quantity: 'to taste' },
    ],
    image: 'https://images6.alphacoders.com/327/327013.jpg',
    time: {
      prep: [0, 10],
      cook: [0, 0]
    },
    instructions: [
      { id: 1, step: 'Slice the tomatoes and fresh mozzarella into 1/4-inch thick slices.' },
      { id: 2, step: 'Arrange the tomato and mozzarella slices on a serving platter, alternating them and overlapping slightly.' },
      { id: 3, step: 'Tuck fresh basil leaves between the tomato and mozzarella slices.' },
      { id: 4, step: 'Drizzle extra-virgin olive oil and balsamic glaze over the salad.' },
      { id: 5, step: 'Season with salt and black pepper to taste.' },
      { id: 6, step: 'Serve the Caprese Salad as a refreshing and light appetizer or side dish.' },
      { id: 7, step: 'Enjoy the combination of ripe tomatoes, creamy mozzarella, and aromatic basil!' }
    ]
  },
  {
    id: 16,
    title: 'Pasta Carbonara',
    ingredients: [
      { name: 'spaghetti', quantity: '12 ounces' },
      { name: 'pancetta', quantity: '4 ounces' },
      { name: 'eggs', quantity: '3', },
      { name: 'pecorino romano cheese', quantity: '1 cup' },
      { name: 'garlic cloves', quantity: '2', },
      { name: 'black pepper', quantity: '1 teaspoon', },
      { name: 'salt', quantity: 'to taste' },
      { name: 'parsley', quantity: '1/4 cup', },
      { name: 'olive oil', quantity: '2 tablespoons' },
    ],
    image: 'https://images6.alphacoders.com/327/327013.jpg',
    time: {
      prep: [0, 10],
      cook: [0, 15]
    },
    instructions: [
      { id: 1, step: 'Cook the spaghetti according to package instructions until al dente.' },
      { id: 2, step: 'In a skillet, heat olive oil over medium heat.' },
      { id: 3, step: 'Add chopped pancetta to the skillet and cook until crispy.' },
      { id: 4, step: 'In a mixing bowl, whisk together eggs, grated pecorino romano cheese, minced garlic, black pepper, and a pinch of salt.' },
      { id: 5, step: 'Drain the cooked spaghetti and immediately add it to the egg mixture, tossing quickly to coat the pasta.' },
      { id: 6, step: 'Add the crispy pancetta to the pasta and toss again.' },
      { id: 7, step: 'The heat from the pasta will cook the eggs and create a creamy sauce.' },
      { id: 8, step: 'Garnish the Pasta Carbonara with chopped parsley and additional grated pecorino romano cheese.' },
      { id: 9, step: 'Serve the dish immediately while it is hot and creamy.' },
      { id: 10, step: 'Enjoy your classic Italian Pasta Carbonara!' }
    ]
  },
  {
    id: 17,
    title: 'Hawaiian Pizza',
    ingredients: [
      { name: 'pizza dough', quantity: '1 ball' },
      { name: 'pineapple', quantity: '1 cup', },
      { name: 'ham', quantity: '1 cup', },
      { name: 'mozzarella cheese', quantity: '2 cups', },
      { name: 'tomato sauce', quantity: '1/2 cup', },
      { name: 'olive oil', quantity: '2 tablespoons', },
      { name: 'oregano', quantity: '1 teaspoon', },
      { name: 'red pepper flakes', quantity: '1/2 teaspoon', },
      { name: 'salt', quantity: 'to taste' },
      { name: 'black pepper', quantity: 'to taste' },
    ],
    image: 'https://images6.alphacoders.com/327/327013.jpg',
    time: {
      prep: [0, 15],
      cook: [0, 15]
    },
    instructions: [
      { id: 1, step: 'Preheat your oven to the highest temperature it can go (usually 500°F or 260°C).' },
      { id: 2, step: 'Roll out the pizza dough on a floured surface to your desired thickness.' },
      { id: 3, step: 'Transfer the rolled-out dough to a pizza stone or a baking sheet.' },
      { id: 4, step: 'Spread tomato sauce evenly over the dough, leaving a border around the edges.' },
      { id: 5, step: 'Sprinkle shredded mozzarella cheese over the sauce as the base layer.' },
      { id: 6, step: 'Add diced ham and pineapple chunks as the pizza toppings.' },
      { id: 7, step: 'Drizzle olive oil over the toppings and season with oregano, red pepper flakes, salt, and black pepper.' },
      { id: 8, step: 'Bake the pizza in the preheated oven for about 10-15 minutes or until the crust is golden and the cheese is bubbly and lightly browned.' },
      { id: 9, step: 'Remove the pizza from the oven and let it cool for a minute.' },
      { id: 10, step: 'Slice the Hawaiian Pizza and serve it hot.' },
      { id: 11, step: 'Enjoy the delightful combination of sweet pineapple and savory ham on your pizza!' }
    ]
  },
  {
    id: 18,
    title: 'Classic Pancakes',
    ingredients: [
      { name: 'all-purpose flour', quantity: '1 cup' },
      { name: 'baking powder', quantity: '2 teaspoons' },
      { name: 'sugar', quantity: '2 tablespoons', },
      { name: 'salt', quantity: '1/2 teaspoon' },
      { name: 'milk', quantity: '3/4 cup' },
      { name: 'egg', quantity: '1' },
      { name: 'butter', quantity: '2 tablespoons, melted' },
      { name: 'vegetable oil', quantity: '1 tablespoon, for cooking' },
      { name: 'maple syrup', quantity: 'for serving' },
      { name: 'butter', quantity: 'for serving' },
    ],
    image: 'https://images6.alphacoders.com/327/327013.jpg',
    time: {
      prep: [0, 5],
      cook: [0, 10]
    },
    instructions: [
      { id: 1, step: 'In a mixing bowl, whisk together all-purpose flour, baking powder, sugar, and salt.' },
      { id: 2, step: 'Add milk, melted butter, and egg to the dry ingredients, and whisk until the pancake batter is smooth.' },
      { id: 3, step: 'Let the batter rest for a few minutes while you preheat a non-stick pan over medium heat.' },
      { id: 4, step: 'Lightly grease the pan with vegetable oil.' },
      { id: 5, step: 'Pour a small amount of pancake batter onto the pan to form each pancake.' },
      { id: 6, step: 'Cook until bubbles appear on the surface of the pancakes, then flip and cook until golden brown on both sides.' },
      { id: 7, step: 'Repeat with the remaining pancake batter.' },
      { id: 8, step: 'Serve the Classic Pancakes hot, topped with butter and maple syrup.' },
      { id: 9, step: 'Enjoy your delicious and fluffy pancakes for breakfast or brunch!' }
    ]
  },
  {
    id: 19,
    title: 'French Toast',
    ingredients: [
      { name: 'slices of bread', quantity: '8' },
      { name: 'eggs', quantity: '4' },
      { name: 'milk', quantity: '1 cup' },
      { name: 'vanilla extract', quantity: '1 teaspoon' },
      { name: 'ground cinnamon', quantity: '1/2 teaspoon', },
      { name: 'butter', quantity: '2 tablespoons, for cooking' },
      { name: 'maple syrup', quantity: 'for serving' },
      { name: 'fresh berries', quantity: 'for serving' },
      { name: 'powdered sugar', quantity: 'for serving' },
    ],
    image: 'https://images6.alphacoders.com/327/327013.jpg',
    time: {
      prep: [0, 10],
      cook: [0, 10]
    },
    instructions: [
      { id: 1, step: 'In a shallow dish, whisk together eggs, milk, vanilla extract, and ground cinnamon.' },
      { id: 2, step: 'Dip each slice of bread into the egg mixture, coating both sides evenly.' },
      { id: 3, step: 'In a non-stick pan, melt butter over medium heat.' },
      { id: 4, step: 'Add the soaked bread slices to the pan and cook until golden brown on both sides.' },
      { id: 5, step: 'Remove the French toast from the pan and place them on a serving plate.' },
      { id: 6, step: 'Serve the French Toast hot, dusted with powdered sugar, and topped with maple syrup and fresh berries.' },
      { id: 7, step: 'Enjoy your delightful and indulgent breakfast treat!' }
    ]
  },
  {
    id: 20,
    title: 'Omelette',
    ingredients: [
      { name: 'eggs', quantity: '3' },
      { name: 'milk', quantity: '2 tablespoons', },
      { name: 'cheddar cheese', quantity: '1/4 cup', },
      { name: 'ham', quantity: '1/4 cup', },
      { name: 'bell pepper', quantity: '1/4 cup', },
      { name: 'green onions', quantity: '2', },
      { name: 'butter', quantity: '2 tablespoons', },
      { name: 'salt', quantity: 'to taste' },
      { name: 'black pepper', quantity: 'to taste' },
      { name: 'salsa', quantity: 'for serving' },
      { name: 'sour cream', quantity: 'for serving' },
    ],
    image: 'https://images6.alphacoders.com/327/327013.jpg',
    time: {
      prep: [0, 5],
      cook: [0, 5]
    },
    instructions: [
      { id: 1, step: 'In a bowl, beat the eggs with milk, salt, and black pepper.' },
      { id: 2, step: 'Stir in shredded cheddar cheese, diced ham, diced bell pepper, and sliced green onions.' },
      { id: 3, step: 'In a non-stick pan, melt butter over medium heat.' },
      { id: 4, step: 'Pour the egg mixture into the pan and cook until the edges start to set.' },
      { id: 5, step: 'Gently lift the edges of the omelette with a spatula to allow the uncooked egg to flow to the bottom of the pan.' },
      { id: 6, step: 'Cook until the omelette is mostly set but still slightly runny on top.' },
      { id: 7, step: 'Fold one side of the omelette over the filling to create a half-moon shape.' },
      { id: 8, step: 'Cook for another minute or until the cheese is fully melted and the omelette is cooked through.' },
      { id: 9, step: 'Slide the omelette onto a serving plate.' },
      { id: 10, step: 'Serve the Omelette hot, with salsa and sour cream on the side.' },
      { id: 11, step: 'Enjoy your customizable and delicious omelette for breakfast or brunch!' }
    ]
  }
]

export default recipes