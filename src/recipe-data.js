const recipes = [
  {
    id: 1,
    title: 'Classic Chocolate Chip Cookies',
    ingredients: ['butter', 'granulated sugar', 'brown sugar', 'eggs', 'vanilla extract', 'all-purpose flour', 'baking soda', 'salt', 'chocolate chips'],
    image: 'https://images6.alphacoders.com/327/327013.jpg',
    time: {
      prep: [0, 15],   // 0 hours, 15 minutes
      cook: [0, 10],   // 0 hours, 10 minutes
    },
    instructions: [
      { id: 1, step: 'Preheat the oven to 375°F (190°C) and line a baking sheet with parchment paper.' },
      { id: 2, step: 'In a large mixing bowl, cream together the butter, granulated sugar, and brown sugar until smooth.' },
      { id: 3, step: 'Beat in the eggs one at a time, then stir in the vanilla extract.' },
      { id: 4, step: 'In a separate bowl, whisk together the all-purpose flour, baking soda, and salt.' },
      { id: 5, step: 'Gradually add the dry ingredients to the wet ingredients, mixing just until combined.' },
      { id: 6, step: 'Stir in the chocolate chips until they are evenly distributed in the dough.' },
      { id: 7, step: 'Drop rounded tablespoons of dough onto the prepared baking sheet, leaving enough space between each cookie.' },
      { id: 8, step: 'Bake in the preheated oven for 8-10 minutes, or until the edges are golden brown.' },
      { id: 9, step: 'Remove the cookies from the oven and let them cool on the baking sheet for a few minutes before transferring them to a wire rack to cool completely.' },
      { id: 10, step: 'Enjoy your classic chocolate chip cookies with a glass of milk!' },
    ],
  },
  {
    id: 2,
    title: 'Spaghetti Bolognese',
    ingredients: ['spaghetti pasta', 'ground beef', 'onion', 'garlic', 'carrots', 'celery', 'crushed tomatoes', 'tomato paste', 'beef broth', 'red wine', 'olive oil', 'dried oregano', 'dried basil', 'salt', 'black pepper', 'grated Parmesan cheese'],
    image: 'https://images6.alphacoders.com/327/327013.jpg',
    time: {
      prep: [0, 20],   // 0 hours, 20 minutes
      cook: [1, 30],   // 1 hour, 30 minutes
    },
    instructions: [
      { id: 1, step: 'In a large pot, heat olive oil over medium heat.' },
      { id: 2, step: 'Add diced onion, minced garlic, sliced carrots, and sliced celery to the pot. Sauté until the vegetables are softened.' },
      { id: 3, step: 'Add ground beef to the pot and cook until browned, breaking it apart with a spoon as it cooks.' },
      { id: 4, step: 'Stir in crushed tomatoes, tomato paste, beef broth, and red wine.' },
      { id: 5, step: 'Season with dried oregano, dried basil, salt, and black pepper.' },
      { id: 6, step: 'Bring the mixture to a boil, then reduce the heat and let it simmer, covered, for about 1 hour, stirring occasionally.' },
      { id: 7, step: 'While the sauce simmers, cook the spaghetti pasta according to the package instructions until al dente.' },
      { id: 8, step: 'Serve the Bolognese sauce over the cooked spaghetti and top with grated Parmesan cheese.' },
      { id: 9, step: 'Enjoy your delicious and hearty Spaghetti Bolognese!' },
    ],
  },
  {
    id: 3,
    title: 'Caprese Salad',
    ingredients: ['ripe tomatoes', 'fresh mozzarella cheese', 'fresh basil leaves', 'balsamic glaze', 'extra virgin olive oil', 'salt', 'black pepper'],
    image: 'https://images6.alphacoders.com/327/327013.jpg',
    time: {
      prep: [0, 10],   // 0 hours, 10 minutes
      cook: [0, 0],    // 0 hours, 0 minutes (no cooking required)
    },
    instructions: [
      { id: 1, step: 'Slice the ripe tomatoes and fresh mozzarella cheese into discs.' },
      { id: 2, step: 'Arrange the tomato and mozzarella slices on a serving platter, alternating them and slightly overlapping.' },
      { id: 3, step: 'Tuck fresh basil leaves between the tomato and mozzarella slices.' },
      { id: 4, step: 'Drizzle balsamic glaze and extra virgin olive oil over the salad.' },
      { id: 5, step: 'Season with salt and black pepper to taste.' },
      { id: 6, step: 'Serve the classic Caprese salad as a refreshing appetizer or side dish.' },
    ],
  },
  {
    id: 4,
    title: 'Chicken Stir-Fry',
    ingredients: ['boneless, skinless chicken breasts', 'soy sauce', 'hoisin sauce', 'rice vinegar', 'brown sugar', 'garlic', 'ginger', 'cornstarch', 'vegetable oil', 'broccoli florets', 'carrots', 'red bell pepper', 'snow peas', 'green onions', 'cooked rice'],
    image: 'https://images6.alphacoders.com/327/327013.jpg',
    time: {
      prep: [0, 20],   // 0 hours, 20 minutes
      cook: [0, 15],   // 0 hours, 15 minutes
    },
    instructions: [
      { id: 1, step: 'Cut the chicken breasts into bite-sized pieces.' },
      { id: 2, step: 'In a small bowl, mix soy sauce, hoisin sauce, rice vinegar, brown sugar, minced garlic, minced ginger, and cornstarch to make the sauce.' },
      { id: 3, step: 'Heat vegetable oil in a wok or large skillet over medium-high heat.' },
      { id: 4, step: 'Add the chicken pieces to the hot oil and stir-fry until they are cooked through and slightly browned. Remove the chicken from the wok and set aside.' },
      { id: 5, step: 'In the same wok, add a bit more oil if needed and stir-fry broccoli florets, sliced carrots, sliced red bell pepper, and snow peas until they are tender-crisp.' },
      { id: 6, step: 'Return the cooked chicken to the wok with the vegetables.' },
      { id: 7, step: 'Pour the prepared sauce over the chicken and vegetables and stir until everything is coated and the sauce thickens.' },
      { id: 8, step: 'Add sliced green onions and toss everything together.' },
      { id: 9, step: 'Serve the delicious chicken stir-fry over cooked rice.' },
      { id: 10, step: 'Enjoy your flavorful and healthy meal!' },
    ],
  },
  {
    id: 5,
    title: 'Classic Caesar Salad',
    ingredients: ['romaine lettuce', 'Caesar dressing', 'croutons', 'Parmesan cheese', 'salt', 'black pepper'],
    image: 'https://images6.alphacoders.com/327/327013.jpg',
    time: {
      prep: [0, 15],   // 0 hours, 15 minutes
      cook: [0, 0],    // 0 hours, 0 minutes (no cooking required)
    },
    instructions: [
      { id: 1, step: 'Tear the romaine lettuce into bite-sized pieces and place them in a large salad bowl.' },
      { id: 2, step: 'Add Caesar dressing to the bowl with lettuce.' },
      { id: 3, step: 'Season the dressing with salt and black pepper to taste.' },
      { id: 4, step: 'Add the croutons to the bowl with lettuce.' },
      { id: 5, step: 'Drizzle the Caesar dressing over the salad and toss to coat the lettuce and croutons.' },
      { id: 6, step: 'Top the salad with shaved or grated Parmesan cheese.' },
      { id: 7, step: 'Serve the classic Caesar salad as a refreshing appetizer or side dish.' },
    ],
  },
  {
    id: 6,
    title: 'Pancakes',
    ingredients: ['all-purpose flour', 'granulated sugar', 'baking powder', 'salt', 'milk', 'egg', 'butter', 'vanilla extract', 'maple syrup'],
    image: 'https://images6.alphacoders.com/327/327013.jpg',
    time: {
      prep: [0, 10],   // 0 hours, 10 minutes
      cook: [0, 20],   // 0 hours, 20 minutes
    },
    instructions: [
      { id: 1, step: 'In a large bowl, whisk together the all-purpose flour, granulated sugar, baking powder, and salt.' },
      { id: 2, step: 'In a separate bowl, whisk together the milk, egg, melted butter, and vanilla extract.' },
      { id: 3, step: 'Pour the wet ingredients into the dry ingredients and stir until just combined. A few lumps are okay.' },
      { id: 4, step: 'Preheat a non-stick skillet or griddle over medium heat and lightly grease it with butter or cooking spray.' },
      { id: 5, step: 'Pour 1/4 cup of batter onto the skillet for each pancake. Cook until bubbles form on the surface, then flip and cook the other side until golden brown.' },
      { id: 6, step: 'Repeat with the remaining batter.' },
      { id: 7, step: 'Serve the pancakes warm with maple syrup and any other desired toppings, such as fresh fruit or whipped cream.' },
      { id: 8, step: 'Enjoy a delightful breakfast or brunch with fluffy and delicious pancakes!' },
    ],
  },
  {
    id: 7,
    title: 'Mushroom Risotto',
    ingredients: ['arborio rice', 'vegetable or chicken broth', 'butter', 'olive oil', 'onion', 'garlic', 'white mushrooms', 'dry white wine', 'parmesan cheese', 'salt', 'black pepper', 'fresh parsley'],
    image: 'https://images6.alphacoders.com/327/327013.jpg',
    time: {
      prep: [0, 10],   // 0 hours, 10 minutes
      cook: [0, 30],   // 0 hours, 30 minutes
    },
    instructions: [
      { id: 1, step: 'In a saucepan, heat the vegetable or chicken broth and keep it warm over low heat.' },
      { id: 2, step: 'In a large skillet or pan, melt butter with olive oil over medium heat.' },
      { id: 3, step: 'Add finely chopped onion and minced garlic to the pan and sauté until softened.' },
      { id: 4, step: 'Stir in arborio rice and cook for a couple of minutes until the rice is lightly toasted.' },
      { id: 5, step: 'Pour in dry white wine and cook, stirring constantly, until it is absorbed by the rice.' },
      { id: 6, step: 'Add a ladleful of warm broth to the rice and stir until the liquid is absorbed. Continue adding the broth, one ladleful at a time, and stirring until the rice is creamy and al dente.' },
      { id: 7, step: 'In a separate pan, sauté sliced white mushrooms with a bit of butter until they are tender and slightly browned.' },
      { id: 8, step: 'Stir the sautéed mushrooms into the risotto.' },
      { id: 9, step: 'Add grated Parmesan cheese to the risotto and season with salt and black pepper to taste.' },
      { id: 10, step: 'Garnish the mushroom risotto with chopped fresh parsley before serving.' },
      { id: 11, step: 'Serve the creamy and flavorful mushroom risotto as a comforting main dish.' },
    ],
  },
  {
    id: 8,
    title: 'Guacamole',
    ingredients: ['ripe avocados', 'lime juice', 'red onion', 'jalapeno', 'fresh cilantro', 'tomato', 'garlic', 'salt', 'black pepper'],
    image: 'https://images6.alphacoders.com/327/327013.jpg',
    time: {
      prep: [0, 15],   // 0 hours, 15 minutes
      cook: [0, 0],    // 0 hours, 0 minutes (no cooking required)
    },
    instructions: [
      { id: 1, step: 'Cut the avocados in half, remove the pits, and scoop the flesh into a bowl.' },
      { id: 2, step: 'Mash the avocado with a fork or potato masher to your desired level of chunkiness.' },
      { id: 3, step: 'Finely dice the red onion, jalapeno, fresh cilantro, and tomato, and add them to the bowl with mashed avocado.' },
      { id: 4, step: 'Mince the garlic and add it to the bowl.' },
      { id: 5, step: 'Squeeze lime juice over the guacamole and stir everything together.' },
      { id: 6, step: 'Season with salt and black pepper to taste.' },
      { id: 7, step: 'Cover the guacamole with plastic wrap, directly touching the surface to prevent browning, and refrigerate for at least 30 minutes before serving.' },
      { id: 8, step: 'Serve the delicious guacamole with tortilla chips as a classic party appetizer or snack.' },
    ],
  },
  {
    id: 9,
    title: 'Beef Tacos',
    ingredients: ['ground beef', 'onion', 'garlic', 'taco seasoning', 'tomato sauce', 'taco shells', 'lettuce', 'tomato', 'cheddar cheese', 'sour cream', 'salsa'],
    image: 'https://images6.alphacoders.com/327/327013.jpg',
    time: {
      prep: [0, 10],   // 0 hours, 10 minutes
      cook: [0, 20],   // 0 hours, 20 minutes
    },
    instructions: [
      { id: 1, step: 'In a large skillet, cook ground beef over medium heat, breaking it apart with a spoon as it cooks.' },
      { id: 2, step: 'Add diced onion and minced garlic to the skillet and continue cooking until the beef is fully cooked and the onion is softened.' },
      { id: 3, step: 'Stir in taco seasoning and tomato sauce, and let the mixture simmer for a few minutes.' },
      { id: 4, step: 'While the beef cooks, prepare the taco shells according to the package instructions.' },
      { id: 5, step: 'Chop lettuce, dice tomatoes, and shred cheddar cheese for the taco toppings.' },
      { id: 6, step: 'Warm the taco shells in the oven, if desired.' },
      { id: 7, step: 'Fill each taco shell with the beef mixture.' },
      { id: 8, step: 'Top the beef tacos with lettuce, tomatoes, cheddar cheese, sour cream, and salsa.' },
      { id: 9, step: 'Serve the tasty beef tacos with your favorite side dishes or enjoy them on their own.' },
    ],
  },
  {
    id: 10,
    title: 'Chocolate Lava Cakes',
    ingredients: ['unsalted butter', 'semisweet or bittersweet chocolate', 'eggs', 'egg yolks', 'granulated sugar', 'vanilla extract', 'all-purpose flour', 'salt', 'ice cream or whipped cream (for serving)'],
    image: 'https://images6.alphacoders.com/327/327013.jpg',
    time: {
      prep: [0, 15],   // 0 hours, 15 minutes
      cook: [0, 12],   // 0 hours, 12 minutes
    },
    instructions: [
      { id: 1, step: 'Preheat the oven to 425°F (220°C). Grease four ramekins or small oven-safe dishes with butter.' },
      { id: 2, step: 'In a microwave-safe bowl, melt the butter and chocolate together in short intervals, stirring in between, until fully melted and smooth.' },
      { id: 3, step: 'In a separate bowl, whisk together the eggs, egg yolks, granulated sugar, and vanilla extract.' },
      { id: 4, step: 'Pour the melted chocolate mixture into the egg mixture and whisk until well combined.' },
      { id: 5, step: 'Add all-purpose flour and a pinch of salt to the chocolate and egg mixture. Stir until just combined and no lumps remain.' },
      { id: 6, step: 'Divide the batter evenly among the prepared ramekins.' },
      { id: 7, step: 'Place the ramekins on a baking sheet and bake in the preheated oven for 10-12 minutes. The edges should be set, but the center should still be soft.' },
      { id: 8, step: 'Remove the lava cakes from the oven and let them cool in the ramekins for 1-2 minutes.' },
      { id: 9, step: 'Carefully invert each ramekin onto a serving plate, tapping the bottom to release the cake. Be cautious as the ramekins will be hot.' },
      { id: 10, step: 'Serve the delicious chocolate lava cakes immediately with a scoop of ice cream or dollop of whipped cream.' },
      { id: 11, step: 'Cut into the cakes, and the warm, gooey chocolate center will flow out.' },
      { id: 12, step: 'Enjoy this decadent dessert that is sure to impress!' },
    ],
  },
  {
    id: 11,
    title: 'Chicken Alfredo Pasta',
    ingredients: ['fettuccine pasta', 'boneless, skinless chicken breasts', 'heavy cream', 'unsalted butter', 'garlic', 'grated Parmesan cheese', 'salt', 'black pepper', 'fresh parsley'],
    image: 'https://images6.alphacoders.com/327/327013.jpg',
    time: {
      prep: [0, 10],   // 0 hours, 10 minutes
      cook: [0, 20],   // 0 hours, 20 minutes
    },
    instructions: [
      { id: 1, step: 'Cook the fettuccine pasta in a large pot of salted boiling water until al dente. Drain and set aside.' },
      { id: 2, step: 'While the pasta is cooking, season the chicken breasts with salt and black pepper.' },
      { id: 3, step: 'In a large skillet, melt butter over medium-high heat.' },
      { id: 4, step: 'Add the seasoned chicken breasts to the skillet and cook until they are golden brown and fully cooked. Remove the chicken from the skillet and slice it into strips.' },
      { id: 5, step: 'In the same skillet, add minced garlic and cook for about 1 minute, until fragrant.' },
      { id: 6, step: 'Lower the heat and stir in heavy cream and grated Parmesan cheese. Cook, stirring constantly, until the sauce is smooth and heated through.' },
      { id: 7, step: 'Add the cooked fettuccine to the skillet with the Alfredo sauce and toss until the pasta is coated evenly.' },
      { id: 8, step: 'Season with additional salt and black pepper to taste.' },
      { id: 9, step: 'Serve the creamy chicken Alfredo pasta with sliced chicken on top.' },
      { id: 10, step: 'Garnish with chopped fresh parsley for added flavor and presentation.' },
      { id: 11, step: 'Enjoy this indulgent and comforting pasta dish!' },
    ],
  },
  {
    id: 12,
    title: 'Chicken Noodle Soup',
    ingredients: ['chicken thighs', 'olive oil', 'onion', 'carrots', 'celery', 'garlic', 'chicken broth', 'water', 'bay leaves', 'dried thyme', 'egg noodles', 'salt', 'black pepper', 'fresh parsley'],
    image: 'https://images6.alphacoders.com/327/327013.jpg',
    time: {
      prep: [0, 15],   // 0 hours, 15 minutes
      cook: [0, 30],   // 0 hours, 30 minutes
    },
    instructions: [
      { id: 1, step: 'In a large pot, heat olive oil over medium heat.' },
      { id: 2, step: 'Add diced onion, sliced carrots, and sliced celery to the pot. Sauté until the vegetables are softened.' },
      { id: 3, step: 'Add minced garlic and cook for about 1 minute, until fragrant.' },
      { id: 4, step: 'Add chicken thighs, chicken broth, water, bay leaves, and dried thyme to the pot. Bring to a boil, then reduce the heat and let the soup simmer for about 20 minutes, or until the chicken is fully cooked.' },
      { id: 5, step: 'Remove the chicken thighs from the pot and shred the meat. Discard the bones and return the shredded chicken to the pot.' },
      { id: 6, step: 'Add egg noodles to the pot and cook according to the package instructions until they are tender.' },
      { id: 7, step: 'Season the soup with salt and black pepper to taste.' },
      { id: 8, step: 'Serve the comforting chicken noodle soup hot, garnished with chopped fresh parsley.' },
      { id: 9, step: 'Enjoy this soothing and hearty soup, especially on chilly days!' },
    ],
  },
  {
    id: 13,
    title: 'Baked Salmon',
    ingredients: ['salmon fillets', 'olive oil', 'lemon juice', 'garlic', 'fresh parsley', 'salt', 'black pepper'],
    image: 'https://images6.alphacoders.com/327/327013.jpg',
    time: {
      prep: [0, 10],   // 0 hours, 10 minutes
      cook: [0, 15],   // 0 hours, 15 minutes
    },
    instructions: [
      { id: 1, step: 'Preheat the oven to 400°F (200°C). Line a baking sheet with parchment paper.' },
      { id: 2, step: 'Place the salmon fillets on the prepared baking sheet.' },
      { id: 3, step: 'In a small bowl, mix together olive oil, lemon juice, minced garlic, chopped fresh parsley, salt, and black pepper.' },
      { id: 4, step: 'Pour the mixture over the salmon fillets, making sure they are coated evenly.' },
      { id: 5, step: 'Bake the salmon in the preheated oven for about 12-15 minutes, or until the fish is cooked through and flakes easily with a fork.' },
      { id: 6, step: 'Serve the delicious baked salmon with your favorite side dishes.' },
      { id: 7, step: 'Enjoy this healthy and flavorful seafood dish!' },
    ],
  },
  {
    id: 14,
    title: 'Vegetable Stir-Fry',
    ingredients: ['broccoli florets', 'carrots', 'red bell pepper', 'snap peas', 'onion', 'garlic', 'soy sauce', 'sesame oil', 'cornstarch', 'vegetable broth', 'salt', 'black pepper', 'cooked rice'],
    image: 'https://images6.alphacoders.com/327/327013.jpg',
    time: {
      prep: [0, 15],   // 0 hours, 15 minutes
      cook: [0, 10],   // 0 hours, 10 minutes
    },
    instructions: [
      { id: 1, step: 'Cut vegetables into bite-sized pieces or strips.' },
      { id: 2, step: 'In a small bowl, mix soy sauce, vegetable broth, sesame oil, cornstarch, salt, and black pepper to make the sauce.' },
      { id: 3, step: 'Heat vegetable oil in a wok or large skillet over high heat.' },
      { id: 4, step: 'Add minced garlic and diced onion to the hot oil, and stir-fry for about 1 minute until fragrant.' },
      { id: 5, step: 'Add the broccoli florets, sliced carrots, sliced red bell pepper, and snap peas to the wok. Stir-fry for a few minutes until the vegetables are tender-crisp.' },
      { id: 6, step: 'Pour the sauce over the vegetables, and toss everything together until the sauce thickens and coats the vegetables.' },
      { id: 7, step: 'Serve the vegetable stir-fry over cooked rice.' },
      { id: 8, step: 'Enjoy this colorful and healthy dish that complements any meal!' },
    ],
  },
  {
    id: 15,
    title: 'Mango Salsa',
    ingredients: ['ripe mango', 'red bell pepper', 'red onion', 'jalapeno', 'fresh cilantro', 'lime juice', 'salt', 'black pepper'],
    image: 'https://images6.alphacoders.com/327/327013.jpg',
    time: {
      prep: [0, 15],   // 0 hours, 15 minutes
      cook: [0, 0],    // 0 hours, 0 minutes (no cooking required)
    },
    instructions: [
      { id: 1, step: 'Peel and dice the ripe mango.' },
      { id: 2, step: 'Finely dice the red bell pepper and red onion.' },
      { id: 3, step: 'Remove the seeds from the jalapeno and mince it for some heat.' },
      { id: 4, step: 'Chop fresh cilantro leaves.' },
      { id: 5, step: 'In a bowl, combine the diced mango, red bell pepper, red onion, minced jalapeno, and chopped cilantro.' },
      { id: 6, step: 'Drizzle fresh lime juice over the salsa.' },
      { id: 7, step: 'Season with salt and black pepper to taste.' },
      { id: 8, step: 'Stir everything together until the ingredients are well mixed.' },
      { id: 9, step: 'Refrigerate the mango salsa for at least 30 minutes to allow the flavors to meld together.' },
      { id: 10, step: 'Serve the refreshing mango salsa with tortilla chips, grilled chicken, fish, or as a topping for tacos!' },
      { id: 11, step: 'Enjoy the tropical flavors and vibrant colors of this salsa!' },
    ],
  },
  {
    id: 16,
    title: 'Cheeseburger',
    ingredients: ['ground beef', 'onion powder', 'garlic powder', 'salt', 'black pepper', 'cheddar cheese slices', 'hamburger buns', 'lettuce', 'tomato', 'pickles', 'ketchup', 'mustard'],
    image: 'https://images6.alphacoders.com/327/327013.jpg',
    time: {
      prep: [0, 10],   // 0 hours, 10 minutes
      cook: [0, 10],   // 0 hours, 10 minutes
    },
    instructions: [
      { id: 1, step: 'In a bowl, mix ground beef with onion powder, garlic powder, salt, and black pepper.' },
      { id: 2, step: 'Divide the mixture into equal-sized patties, slightly larger than the hamburger buns, as they will shrink during cooking.' },
      { id: 3, step: 'Preheat a grill or skillet over medium-high heat.' },
      { id: 4, step: 'Cook the burger patties for about 4-5 minutes per side, or until they reach your preferred level of doneness.' },
      { id: 5, step: 'During the last minute of cooking, add cheddar cheese slices on top of each patty to melt.' },
      { id: 6, step: 'While the patties cook, toast the hamburger buns on the grill or in a toaster.' },
      { id: 7, step: 'Assemble the cheeseburgers by placing a cooked patty on the bottom half of each bun.' },
      { id: 8, step: 'Top the patty with lettuce, tomato slices, and pickles.' },
      { id: 9, step: 'Spread ketchup and mustard on the top half of the buns.' },
      { id: 10, step: 'Place the top bun on the assembled burger to complete it.' },
      { id: 11, step: 'Serve the classic cheeseburgers with your favorite side dishes, such as french fries or coleslaw.' },
      { id: 12, step: 'Enjoy a satisfying and delicious cheeseburger!' },
    ],
  },
  {
    id: 17,
    title: 'Chicken Parmesan',
    ingredients: ['boneless, skinless chicken breasts', 'all-purpose flour', 'eggs', 'breadcrumbs', 'grated Parmesan cheese', 'dried oregano', 'garlic powder', 'marinara sauce', 'shredded mozzarella cheese', 'cooked spaghetti pasta', 'fresh basil leaves'],
    image: 'https://images6.alphacoders.com/327/327013.jpg',
    time: {
      prep: [0, 20],   // 0 hours, 20 minutes
      cook: [0, 30],   // 0 hours, 30 minutes
    },
    instructions: [
      { id: 1, step: 'Preheat the oven to 375°F (190°C).' },
      { id: 2, step: 'Place all-purpose flour, beaten eggs, and a mixture of breadcrumbs, grated Parmesan cheese, dried oregano, and garlic powder into three separate shallow dishes.' },
      { id: 3, step: 'Dredge each chicken breast in the flour, shaking off any excess.' },
      { id: 4, step: 'Next, dip the floured chicken breast into the beaten eggs, allowing any excess egg to drip off.' },
      { id: 5, step: 'Finally, press the chicken breast into the breadcrumb mixture, ensuring it is coated evenly on both sides.' },
      { id: 6, step: 'Place the breaded chicken breasts on a baking sheet and bake in the preheated oven for about 25 minutes, or until the chicken is cooked through and the coating is crispy and golden brown.' },
      { id: 7, step: 'While the chicken bakes, warm the marinara sauce in a saucepan over medium heat.' },
      { id: 8, step: 'When the chicken is done, remove it from the oven and spoon marinara sauce over each chicken breast.' },
      { id: 9, step: 'Top each chicken breast with shredded mozzarella cheese.' },
      { id: 10, step: 'Return the chicken to the oven and bake for an additional 5-7 minutes, or until the cheese is melted and bubbly.' },
      { id: 11, step: 'While the chicken finishes baking, cook the spaghetti pasta according to the package instructions until al dente.' },
      { id: 12, step: 'Serve the chicken Parmesan over cooked spaghetti.' },
      { id: 13, step: 'Garnish with fresh basil leaves for added flavor and presentation.' },
      { id: 14, step: 'Enjoy this Italian-American classic that is both comforting and satisfying!' },
    ],
  },
  {
    id: 18,
    title: 'Blueberry Pancakes',
    ingredients: ['all-purpose flour', 'granulated sugar', 'baking powder', 'baking soda', 'salt', 'buttermilk', 'egg', 'unsalted butter', 'vanilla extract', 'blueberries', 'maple syrup'],
    image: 'https://images6.alphacoders.com/327/327013.jpg',
    time: {
      prep: [0, 10],   // 0 hours, 10 minutes
      cook: [0, 15],   // 0 hours, 15 minutes
    },
    instructions: [
      { id: 1, step: 'In a large bowl, whisk together the all-purpose flour, granulated sugar, baking powder, baking soda, and salt.' },
      { id: 2, step: 'In a separate bowl, whisk together the buttermilk, egg, melted butter, and vanilla extract.' },
      { id: 3, step: 'Pour the wet ingredients into the dry ingredients and stir until just combined. A few lumps are okay.' },
      { id: 4, step: 'Gently fold in the blueberries into the pancake batter.' },
      { id: 5, step: 'Preheat a non-stick skillet or griddle over medium heat and lightly grease it with butter or cooking spray.' },
      { id: 6, step: 'Pour 1/4 cup of batter onto the skillet for each pancake. Cook until bubbles form on the surface, then flip and cook the other side until golden brown.' },
      { id: 7, step: 'Repeat with the remaining batter.' },
      { id: 8, step: 'Serve the blueberry pancakes warm with maple syrup and any other desired toppings, such as fresh blueberries or a dollop of whipped cream.' },
      { id: 9, step: 'Enjoy a delightful breakfast or brunch with fluffy and flavorful blueberry pancakes!' },
    ],
  },
  {
    id: 19,
    title: 'Caesar Salad Dressing',
    ingredients: ['mayonnaise', 'lemon juice', 'Dijon mustard', 'Worcestershire sauce', 'anchovy paste (optional)', 'garlic', 'grated Parmesan cheese', 'salt', 'black pepper', 'olive oil'],
    image: 'https://images6.alphacoders.com/327/327013.jpg',
    time: {
      prep: [0, 5],    // 0 hours, 5 minutes
      cook: [0, 0],    // 0 hours, 0 minutes (no cooking required)
    },
    instructions: [
      { id: 1, step: 'In a bowl, whisk together mayonnaise, lemon juice, Dijon mustard, Worcestershire sauce, and anchovy paste (if using). If anchovy paste is unavailable, you can add some extra salt for seasoning.' },
      { id: 2, step: 'Finely mince the garlic and add it to the bowl.' },
      { id: 3, step: 'Stir in grated Parmesan cheese and season with salt and black pepper to taste.' },
      { id: 4, step: 'While whisking continuously, drizzle in the olive oil until the dressing reaches your desired consistency.' },
      { id: 5, step: 'Taste the dressing and adjust the seasoning or ingredients according to your preference.' },
      { id: 6, step: 'Refrigerate the Caesar salad dressing for at least 30 minutes before using to allow the flavors to meld together.' },
      { id: 7, step: 'Use the homemade dressing to prepare a delicious Caesar salad with fresh romaine lettuce, croutons, and shaved Parmesan cheese.' },
      { id: 8, step: 'Enjoy a classic Caesar salad with the tangy and creamy dressing made right at home!' },
    ],
  },
  {
    id: 20,
    title: 'Caprese Salad',
    ingredients: ['tomatoes', 'fresh mozzarella', 'fresh basil', 'balsamic glaze', 'olive oil', 'salt', 'black pepper'],
    image: 'https://images6.alphacoders.com/327/327013.jpg',
    time: {
      prep: [0, 10],    // 0 hours, 10 minutes
      cook: [0, 0],     // 0 hours, 0 minutes (no cooking required)
    },
    instructions: [
      { id: 1, step: 'Slice the tomatoes and fresh mozzarella into equal-thickness rounds.' },
      { id: 2, step: 'Arrange the tomato and mozzarella slices alternately on a serving dish.' },
      { id: 3, step: 'Tear fresh basil leaves and scatter them over the tomato-mozzarella arrangement.' },
      { id: 4, step: 'Drizzle balsamic glaze and olive oil over the salad.' },
      { id: 5, step: 'Season with salt and black pepper to taste.' },
      { id: 6, step: 'Serve the Caprese Salad as a refreshing appetizer or side dish.' },
      { id: 7, step: 'Enjoy the combination of ripe tomatoes, creamy mozzarella, and aromatic basil with a delightful balsamic glaze!' },
    ],
  }  
];

export default recipes;
