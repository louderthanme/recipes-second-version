import { v4 as uuidv4 } from 'uuid';


const recipes = [
  {
    ownerUid:'PXhGH3KPq2dBkX4vsJkJkT476OT2',
    title: 'Pasta Carbonara',
    ingredients: [
      { name: 'pasta', quantity: '8 ounces' },
      { name: 'bacon', quantity: '4 slices, chopped' },
      { name: 'eggs', quantity: '2' },
      { name: 'parmesan cheese', quantity: '1/2 cup, grated' },
      { name: 'black pepper', quantity: '1/2 teaspoon' },
    ],
    time: {
      prep: [0, 10],   // 0 hours, 10 minutes
      cook: [0, 20],   // 0 hours, 20 minutes
    },
    imageURL:'https://www.simplyrecipes.com/thmb/9bd4KXYQrjfncVmiu9YmxUCNgM4=/6240x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Spaghetti-Carbonara-LEAD-7-82d6bacf7f3848a4943b14712ab205ff.jpg',
     instructions: [
      { id: uuidv4(), step: 'Cook the pasta according to the package instructions.' },
      { id: uuidv4(), step: 'In a separate pan, cook the bacon until crispy.' },
      { id: uuidv4(), step: 'In a bowl, whisk the eggs and mix in grated parmesan cheese and black pepper.' },
      { id: uuidv4(), step: 'Drain the cooked pasta and add it to the pan with bacon.' },
      { id: uuidv4(), step: 'Pour the egg mixture over the pasta and bacon, stirring continuously to coat the pasta.' },
      { id: uuidv4(), step: 'The residual heat will cook the eggs and create a creamy sauce.' },
      { id: uuidv4(), step: 'Serve the Pasta Carbonara with additional grated parmesan and black pepper on top.' },
    ]
  },
  {
    ownerUid:'PXhGH3KPq2dBkX4vsJkJkT476OT2',
    title: 'Chocolate Chip Cookies',
    ingredients: [
      { name: 'flour', quantity: '2 1/4 cups' },
      { name: 'baking soda', quantity: '1/2 teaspoon' },
      { name: 'salt', quantity: '1/2 teaspoon' },
      { name: 'butter', quantity: '1 cup (2 sticks), softened' },
      { name: 'granulated sugar', quantity: '3/4 cup' },
      { name: 'brown sugar', quantity: '3/4 cup, packed' },
      { name: 'vanilla extract', quantity: '1 teaspoon' },
      { name: 'eggs', quantity: '2' },
      { name: 'chocolate chips', quantity: '2 cups' },
    ],
    time: {
      prep: [0, 20],   // 0 hours, 20 minutes
      cook: [0, 10],   // 0 hours, 10 minutes
    },
    imageURL: 'https://images-gmi-pmc.edge-generalmills.com/087d17eb-500e-4b26-abd1-4f9ffa96a2c6.jpg',
    instructions: [
      { id: uuidv4(), step: 'Preheat the oven to 375°F (190°C).' },
      { id: uuidv4(), step: 'In a mixing bowl, combine softened butter, granulated sugar, brown sugar, and vanilla extract. Beat until creamy.' },
      { id: uuidv4(), step: 'Add the eggs one at a time, beating well after each addition.' },
      { id: uuidv4(), step: 'In a separate bowl, combine flour, baking soda, and salt.' },
      { id: uuidv4(), step: 'Gradually add the dry ingredients to the butter mixture and mix well.' },
      { id: uuidv4(), step: 'Stir in the chocolate chips.' },
      { id: uuidv4(), step: 'Drop rounded spoonfuls of dough onto a baking sheet.' },
      { id: uuidv4(), step: 'Bake for 8-10 minutes or until golden brown.' },
      { id: uuidv4(), step: 'Allow cookies to cool on the baking sheet for a few minutes before transferring to a wire rack.' },
      { id: uuidv4(), step: 'Enjoy your freshly baked chocolate chip cookies!' }
    ]
  },
  {
    ownerUid:'PXhGH3KPq2dBkX4vsJkJkT476OT2',
    title: 'Chicken Stir Fry',
    ingredients: [
      { name: 'chicken', quantity: '1 lb, boneless and skinless, cut into small pieces' },
      { name: 'vegetables', quantity: '2 cups, mixed (broccoli, bell peppers, carrots, snap peas, etc.)' },
      { name: 'soy sauce', quantity: '1/4 cup' },
      { name: 'cornstarch', quantity: '1 tablespoon' },
      { name: 'sesame oil', quantity: '1 tablespoon' },
      { name: 'garlic', quantity: '2 cloves, minced' },
      { name: 'ginger', quantity: '1 teaspoon, grated' },
      { name: 'vegetable oil', quantity: '2 tablespoons' },
      { name: 'green onions', quantity: '2, sliced' },
      { name: 'sesame seeds', quantity: '1 tablespoon' },
    ],
    time: {
      prep: [0, 15],   // 0 hours, 15 minutes
      cook: [0, 10],   // 0 hours, 10 minutes
    },
    imageURL: 'https://barefeetinthekitchen.com/wp-content/uploads/2017/05/Sweet-n-Sour-Chicken-Stir-Fry-4-1-of-1-copy-1.jpg',
    instructions: [
      { id: uuidv4(), step: 'In a bowl, mix soy sauce, cornstarch, and sesame oil. Add the chicken pieces and marinate for 15 minutes.' },
      { id: uuidv4(), step: 'In a large skillet or wok, heat vegetable oil over medium-high heat.' },
      { id: uuidv4(), step: 'Add minced garlic and grated ginger, and sauté for 1-2 minutes until fragrant.' },
      { id: uuidv4(), step: 'Add the marinated chicken and stir-fry until cooked through and browned.' },
      { id: uuidv4(), step: 'Add the mixed vegetables to the skillet and stir-fry until tender-crisp.' },
      { id: uuidv4(), step: 'Pour in the remaining marinade and cook for another minute, stirring constantly.' },
      { id: uuidv4(), step: 'Garnish with sliced green onions and sesame seeds.' },
      { id: uuidv4(), step: 'Serve the Chicken Stir Fry over steamed rice or noodles.' },
      { id: uuidv4(), step: 'Enjoy this delicious and colorful Chicken Stir Fry!' }
    ]
  },
  {
    ownerUid:'PXhGH3KPq2dBkX4vsJkJkT476OT2',
    title: 'Spaghetti Bolognese',
    ingredients: [
      { name: 'spaghetti', quantity: '8 ounces' },
      { name: 'ground beef', quantity: '1 lb' },
      { name: 'onion', quantity: '1, chopped' },
      { name: 'garlic', quantity: '2 cloves, minced' },
      { name: 'carrot', quantity: '1, grated' },
      { name: 'celery', quantity: '1 stalk, chopped' },
      { name: 'tomato paste', quantity: '2 tablespoons' },
      { name: 'crushed tomatoes', quantity: '1 can (28 ounces)' },
      { name: 'beef broth', quantity: '1 cup' },
      { name: 'dried oregano', quantity: '1 teaspoon' },
      { name: 'dried basil', quantity: '1 teaspoon' },
      { name: 'salt', quantity: '1/2 teaspoon' },
      { name: 'black pepper', quantity: '1/4 teaspoon' },
      { name: 'parmesan cheese', quantity: '1/4 cup, grated (for serving)' },
      { name: 'fresh parsley', quantity: '2 tablespoons, chopped (for serving)' },
    ],
    time: {
      prep: [0, 15],   // 0 hours, 15 minutes
      cook: [0, 30],   // 0 hours, 30 minutes
    },
    imageURL: 'https://static.fanpage.it/wp-content/uploads/sites/22/2021/06/spaghetti-bolognese.jpg',
    instructions: [
      { id: uuidv4(), step: 'Cook the spaghetti according to the package instructions until al dente.' },
      { id: uuidv4(), step: 'In a large skillet or saucepan, brown the ground beef over medium heat. Drain excess fat.' },
      { id: uuidv4(), step: 'Add chopped onions, minced garlic, grated carrot, and chopped celery to the skillet. Sauté until vegetables are tender.' },
      { id: uuidv4(), step: 'Stir in tomato paste, crushed tomatoes, beef broth, dried oregano, dried basil, salt, and black pepper.' },
      { id: uuidv4(), step: 'Simmer the sauce for 15-20 minutes, allowing the flavors to meld together.' },
      { id: uuidv4(), step: 'Serve the Bolognese sauce over cooked spaghetti.' },
      { id: uuidv4(), step: 'Garnish with grated parmesan cheese and chopped fresh parsley.' },
      { id: uuidv4(), step: 'Enjoy your comforting and hearty Spaghetti Bolognese!' }
    ]
  },
  {
    ownerUid:'PXhGH3KPq2dBkX4vsJkJkT476OT2',
    title: 'Caesar Salad',
    ingredients: [
      { name: 'romaine lettuce', quantity: '1 head, torn into bite-sized pieces' },
      { name: 'croutons', quantity: '1 cup' },
      { name: 'parmesan cheese', quantity: '1/2 cup, grated' },
      { name: 'caesar dressing', quantity: '1/2 cup' },
      { name: 'black pepper', quantity: '1/4 teaspoon' },
    ],
    time: {
      prep: [0, 15],   // 0 hours, 15 minutes
      cook: [0, 0],   // 0 hours, 0 minutes
    },
    imageURL: 'https://th.bing.com/th/id/R.f146a04f75961b1aeebc83aa25308f79?rik=ATIgoRBo8mdURg&pid=ImgRaw&r=0',
    instructions: [
      { id: uuidv4(), step: 'Tear the romaine lettuce into bite-sized pieces and place them in a large bowl.' },
      { id: uuidv4(), step: 'Sprinkle croutons over the lettuce.' },
      { id: uuidv4(), step: 'Using a vegetable peeler, shave parmesan cheese over the salad.' },
      { id: uuidv4(), step: 'Drizzle Caesar dressing over the salad.' },
      { id: uuidv4(), step: 'Toss the salad until all the ingredients are well combined.' },
      { id: uuidv4(), step: 'Season with black pepper to taste.' },
      { id: uuidv4(), step: 'Serve the Caesar Salad as a refreshing and classic side dish.' }
    ]
  },
  {
    ownerUid:'PXhGH3KPq2dBkX4vsJkJkT476OT2',
    title: 'Tomato Basil Pasta',
    ingredients: [
      { name: 'pasta', quantity: '12 ounces' },
      { name: 'tomatoes', quantity: '4 medium, diced' },
      { name: 'fresh basil', quantity: '1/2 cup, chopped' },
      { name: 'garlic', quantity: '3 cloves, minced' },
      { name: 'olive oil', quantity: '1/4 cup' },
      { name: 'salt', quantity: '1/2 teaspoon' },
      { name: 'black pepper', quantity: '1/4 teaspoon' },
      { name: 'red pepper flakes', quantity: '1/4 teaspoon (optional)' },
      { name: 'grated parmesan cheese', quantity: '1/4 cup (for serving)' },
    ],
    time: {
      prep: [0, 10],   // 0 hours, 10 minutes
      cook: [0, 20],   // 0 hours, 20 minutes
    },
    imageURL: 'https://altiusspice.com/wp-content/uploads/2015/07/pasta-tomato-1600x1050.jpg',
    instructions: [
      { id: uuidv4(), step: 'Cook the pasta according to the package instructions until al dente.' },
      { id: uuidv4(), step: 'In a large skillet, heat olive oil over medium heat.' },
      { id: uuidv4(), step: 'Add minced garlic and sauté for 1-2 minutes until fragrant.' },
      { id: uuidv4(), step: 'Add diced tomatoes, chopped basil, salt, black pepper, and red pepper flakes (if using) to the skillet.' },
      { id: uuidv4(), step: 'Cook the tomato mixture for 5-7 minutes, allowing the flavors to meld together.' },
      { id: uuidv4(), step: 'Add the cooked pasta to the skillet and toss to combine.' },
      { id: uuidv4(), step: 'Serve the Tomato Basil Pasta with grated parmesan cheese on top.' },
      { id: uuidv4(), step: 'Enjoy this simple yet flavorful pasta dish!' }
    ]
  },
  {
    ownerUid:'PXhGH3KPq2dBkX4vsJkJkT476OT2',
    title: 'Mushroom Risotto',
    ingredients: [
      { name: 'arborio rice', quantity: '1 cup' },
      { name: 'vegetable broth', quantity: '4 cups' },
      { name: 'butter', quantity: '3 tablespoons' },
      { name: 'olive oil', quantity: '2 tablespoons' },
      { name: 'onion', quantity: '1, finely chopped' },
      { name: 'garlic', quantity: '2 cloves, minced' },
      { name: 'mushrooms', quantity: '8 ounces, sliced' },
      { name: 'white wine', quantity: '1/2 cup' },
      { name: 'parmesan cheese', quantity: '1/2 cup, grated' },
      { name: 'fresh parsley', quantity: '2 tablespoons, chopped (for garnish)' },
      { name: 'salt', quantity: '1/2 teaspoon' },
      { name: 'black pepper', quantity: '1/4 teaspoon' },
    ],
    time: {
      prep: [0, 10],   // 0 hours, 10 minutes
      cook: [0, 30],   // 0 hours, 30 minutes
    },
    imageURL: 'https://assets.epicurious.com/photos/5b23da4e0a49d7772e40f353/master/pass/Pot-Mushroom-Risotto-17042018.jpg',
    instructions: [
      { id: uuidv4(), step: 'In a saucepan, bring the vegetable broth to a simmer. Keep it warm over low heat.' },
      { id: uuidv4(), step: 'In a large skillet or pot, melt 2 tablespoons of butter with olive oil over medium heat.' },
      { id: uuidv4(), step: 'Add finely chopped onion and minced garlic, and sauté until translucent.' },
      { id: uuidv4(), step: 'Add sliced mushrooms and cook until they release their moisture and turn golden brown.' },
      { id: uuidv4(), step: 'Stir in arborio rice and cook for 1-2 minutes until lightly toasted.' },
      { id: uuidv4(), step: 'Pour in the white wine and cook, stirring constantly, until it is absorbed by the rice.' },
      { id: uuidv4(), step: 'Ladle in one cup of warm vegetable broth at a time, allowing the rice to absorb the liquid before adding more.' },
      { id: uuidv4(), step: 'Continue adding broth and stirring until the rice is creamy and al dente (about 20-25 minutes).' },
      { id: uuidv4(), step: 'Stir in the remaining tablespoon of butter and grated parmesan cheese.' },
      { id: uuidv4(), step: 'Season the Mushroom Risotto with salt and black pepper to taste.' },
      { id: uuidv4(), step: 'Garnish with chopped fresh parsley before serving.' },
      { id: uuidv4(), step: 'Enjoy this luxurious and comforting Mushroom Risotto!' }
    ]
  },
  {
    ownerUid:'PXhGH3KPq2dBkX4vsJkJkT476OT2',
    title: 'Chicken Parmesan',
    ingredients: [
      { name: 'chicken breasts', quantity: '4 boneless, skinless' },
      { name: 'eggs', quantity: '2' },
      { name: 'bread crumbs', quantity: '1 cup' },
      { name: 'grated parmesan cheese', quantity: '1/2 cup' },
      { name: 'dried oregano', quantity: '1 teaspoon' },
      { name: 'dried basil', quantity: '1 teaspoon' },
      { name: 'garlic powder', quantity: '1/2 teaspoon' },
      { name: 'salt', quantity: '1/2 teaspoon' },
      { name: 'black pepper', quantity: '1/4 teaspoon' },
      { name: 'mozzarella cheese', quantity: '1 cup, shredded' },
      { name: 'marinara sauce', quantity: '2 cups' },
      { name: 'olive oil', quantity: '2 tablespoons' },
      { name: 'fresh basil', quantity: '2 tablespoons, chopped (for garnish)' },
    ],
    time: {
      prep: [0, 15],   // 0 hours, 15 minutes
      cook: [0, 30],   // 0 hours, 30 minutes
    },
    imageURL: 'https://fthmb.tqn.com/1xn2AoW4MEajL7Udm25zQoRvyuI=/2047x1626/filters:fill(auto,1)/Chicken-Parmesan-GettyImages-86057079-586537d25f9b586e02d24817.jpg',
    instructions: [
      { id: uuidv4(), step: 'Preheat the oven to 375°F (190°C).' },
      { id: uuidv4(), step: 'In a shallow dish, beat the eggs.' },
      { id: uuidv4(), step: 'In another dish, combine bread crumbs, grated parmesan cheese, dried oregano, dried basil, garlic powder, salt, and black pepper.' },
      { id: uuidv4(), step: 'Dip each chicken breast in the beaten eggs, then coat with the bread crumb mixture, pressing it onto the chicken to adhere.' },
      { id: uuidv4(), step: 'In a large skillet, heat olive oil over medium heat.' },
      { id: uuidv4(), step: 'Add breaded chicken breasts and cook until golden brown on each side.' },
      { id: uuidv4(), step: 'Transfer the chicken breasts to a baking dish.' },
      { id: uuidv4(), step: 'Pour marinara sauce over the chicken breasts.' },
      { id: uuidv4(), step: 'Sprinkle shredded mozzarella cheese on top.' },
      { id: uuidv4(), step: 'Bake in the preheated oven for 25-30 minutes or until the chicken is cooked through and the cheese is bubbly and golden.' },
      { id: uuidv4(), step: 'Garnish with chopped fresh basil before serving.' },
      { id: uuidv4(), step: 'Enjoy this delicious and comforting Chicken Parmesan!' }
    ]
  },
  {
    ownerUid:'PXhGH3KPq2dBkX4vsJkJkT476OT2',
    title: 'Beef Tacos',
    ingredients: [
      { name: 'ground beef', quantity: '1 lb' },
      { name: 'onion', quantity: '1, finely chopped' },
      { name: 'garlic', quantity: '2 cloves, minced' },
      { name: 'chili powder', quantity: '1 tablespoon' },
      { name: 'ground cumin', quantity: '1 teaspoon' },
      { name: 'paprika', quantity: '1/2 teaspoon' },
      { name: 'salt', quantity: '1/2 teaspoon' },
      { name: 'black pepper', quantity: '1/4 teaspoon' },
      { name: 'tomato sauce', quantity: '1/2 cup' },
      { name: 'beef broth', quantity: '1/2 cup' },
      { name: 'taco shells', quantity: '12' },
      { name: 'shredded lettuce', quantity: '2 cups' },
      { name: 'diced tomatoes', quantity: '1 cup' },
      { name: 'shredded cheddar cheese', quantity: '1 cup' },
      { name: 'sour cream', quantity: '1/2 cup' },
      { name: 'fresh cilantro', quantity: '2 tablespoons, chopped (for garnish)' },
    ],
    time: {
      prep: [0, 15],   // 0 hours, 15 minutes
      cook: [0, 15],   // 0 hours, 15 minutes
    },
    imageURL: 'https://th.bing.com/th/id/R.7ae9864c4bd6c7719ffe86f78b011c44?rik=K%2bheliydiXi%2bvA&riu=http%3a%2f%2flife-in-the-lofthouse.com%2fwp-content%2fuploads%2f2014%2f08%2fShredded_Beef_Tacos.jpg&ehk=BzIiXSdbcOhBPFif9isvmeXYcekYfhD6jIXhkHBpOsg%3d&risl=&pid=ImgRaw&r=0',
    instructions: [
      { id: uuidv4(), step: 'In a large skillet, cook ground beef over medium heat until browned.' },
      { id: uuidv4(), step: 'Add finely chopped onion and minced garlic to the skillet. Sauté until onions are soft.' },
      { id: uuidv4(), step: 'Stir in chili powder, ground cumin, paprika, salt, and black pepper.' },
      { id: uuidv4(), step: 'Pour in tomato sauce and beef broth. Simmer for 5-7 minutes, allowing the flavors to meld together.' },
      { id: uuidv4(), step: 'Warm taco shells according to package instructions.' },
      { id: uuidv4(), step: 'Fill each taco shell with the beef mixture.' },
      { id: uuidv4(), step: 'Top the beef tacos with shredded lettuce, diced tomatoes, shredded cheddar cheese, and a dollop of sour cream.' },
      { id: uuidv4(), step: 'Garnish with chopped fresh cilantro before serving.' },
      { id: uuidv4(), step: 'Enjoy these flavorful and satisfying Beef Tacos!' }
    ]
  },
  {
    ownerUid:'PXhGH3KPq2dBkX4vsJkJkT476OT2',
    title: 'Caprese Salad',
    ingredients: [
      { name: 'ripe tomatoes', quantity: '3 large, sliced' },
      { name: 'fresh mozzarella', quantity: '8 ounces, sliced' },
      { name: 'fresh basil leaves', quantity: '1 cup' },
      { name: 'balsamic glaze', quantity: '2 tablespoons' },
      { name: 'extra-virgin olive oil', quantity: '2 tablespoons' },
      { name: 'salt', quantity: '1/2 teaspoon' },
      { name: 'black pepper', quantity: '1/4 teaspoon' },
    ],
    time: {
      prep: [0, 10],   // 0 hours, 10 minutes
      cook: [0, 0],   // 0 hours, 0 minutes
    },
    imageURL: 'https://th.bing.com/th/id/R.d786be9b4abbf343f53f07caeff1073c?rik=OX38EBLgm4JQeA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-85LFRCVIvls%2fUW7Ynrh_l_I%2fAAAAAAAAA0k%2fQ055D8-FeTY%2fs1600%2fIMG_3012.JPG&ehk=oZC1VysuGrKXq%2ffW%2bIP7kgL%2fz9cj11ILC9UUgUSVlns%3d&risl=&pid=ImgRaw&r=0',
    instructions: [
      { id: uuidv4(), step: 'Alternate slices of tomatoes and mozzarella on a serving platter.' },
      { id: uuidv4(), step: 'Tuck fresh basil leaves between the tomato and mozzarella slices.' },
      { id: uuidv4(), step: 'Drizzle balsamic glaze and extra-virgin olive oil over the salad.' },
      { id: uuidv4(), step: 'Season with salt and black pepper to taste.' },
      { id: uuidv4(), step: 'Serve the Caprese Salad as a refreshing and elegant appetizer or side dish.' }
    ]
  },
  {
    ownerUid:'PXhGH3KPq2dBkX4vsJkJkT476OT2',
    title: 'Chicken Noodle Soup',
    ingredients: [
      { name: 'chicken breasts', quantity: '2 boneless, skinless' },
      { name: 'olive oil', quantity: '1 tablespoon' },
      { name: 'onion', quantity: '1, chopped' },
      { name: 'carrots', quantity: '2, sliced' },
      { name: 'celery', quantity: '2 stalks, sliced' },
      { name: 'garlic', quantity: '3 cloves, minced' },
      { name: 'chicken broth', quantity: '6 cups' },
      { name: 'dried thyme', quantity: '1 teaspoon' },
      { name: 'dried rosemary', quantity: '1/2 teaspoon' },
      { name: 'egg noodles', quantity: '4 ounces' },
      { name: 'salt', quantity: '1/2 teaspoon' },
      { name: 'black pepper', quantity: '1/4 teaspoon' },
      { name: 'fresh parsley', quantity: '2 tablespoons, chopped (for garnish)' },
    ],
    time: {
      prep: [0, 10],   // 0 hours, 10 minutes
      cook: [0, 30],   // 0 hours, 30 minutes
    },
    imageURL: 'https://www.thecountrycook.net/wp-content/uploads/2013/11/Chicken-Noodle-Soup-18.jpg',
    instructions: [
      { id: uuidv4(), step: 'In a large pot, heat olive oil over medium heat.' },
      { id: uuidv4(), step: 'Add chopped onion, sliced carrots, sliced celery, and minced garlic to the pot. Sauté until vegetables are tender.' },
      { id: uuidv4(), step: 'Add chicken breasts and cook until browned on the outside.' },
      { id: uuidv4(), step: 'Pour in chicken broth, dried thyme, and dried rosemary. Bring to a boil.' },
      { id: uuidv4(), step: 'Reduce heat, cover, and simmer for 15-20 minutes or until chicken is cooked through.' },
      { id: uuidv4(), step: 'Remove the chicken breasts from the pot and shred them using two forks.' },
      { id: uuidv4(), step: 'Return the shredded chicken to the pot.' },
      { id: uuidv4(), step: 'Add egg noodles to the soup and cook until tender.' },
      { id: uuidv4(), step: 'Season the Chicken Noodle Soup with salt and black pepper to taste.' },
      { id: uuidv4(), step: 'Garnish with chopped fresh parsley before serving.' },
      { id: uuidv4(), step: 'Enjoy this comforting and nourishing Chicken Noodle Soup!' }
    ]
  },
  {
    ownerUid:'PXhGH3KPq2dBkX4vsJkJkT476OT2',
    title: 'Tuna Salad Sandwich',
    ingredients: [
      { name: 'canned tuna', quantity: '2 cans (5 ounces each), drained' },
      { name: 'mayonnaise', quantity: '1/2 cup' },
      { name: 'red onion', quantity: '1/4 cup, finely chopped' },
      { name: 'celery', quantity: '1/4 cup, finely chopped' },
      { name: 'dill pickle', quantity: '1/4 cup, finely chopped' },
      { name: 'dijon mustard', quantity: '1 tablespoon' },
      { name: 'lemon juice', quantity: '1 tablespoon' },
      { name: 'salt', quantity: '1/4 teaspoon' },
      { name: 'black pepper', quantity: '1/4 teaspoon' },
      { name: 'lettuce leaves', quantity: '4' },
      { name: 'bread slices', quantity: '8' },
      { name: 'butter', quantity: '2 tablespoons' },
    ],
    time: {
      prep: [0, 15],   // 0 hours, 15 minutes
      cook: [0, 0],   // 0 hours, 0 minutes
    },
    imageURL: 'https://cappsdeli.com/wp-content/uploads/2020/05/tuna-salad-sandwich-1024x683@2x.jpg',
    instructions: [
      { id: uuidv4(), step: 'In a mixing bowl, combine drained tuna, mayonnaise, finely chopped red onion, celery, and dill pickle.' },
      { id: uuidv4(), step: 'Add dijon mustard, lemon juice, salt, and black pepper. Mix until well combined.' },
      { id: uuidv4(), step: 'Spread butter on one side of each bread slice.' },
      { id: uuidv4(), step: 'Divide the tuna salad mixture evenly and spread it on four slices of bread (buttered side).' },
      { id: uuidv4(), step: 'Top each tuna salad-covered slice with a lettuce leaf.' },
      { id: uuidv4(), step: 'Cover with the remaining four bread slices, buttered side facing out.' },
      { id: uuidv4(), step: 'Cut the sandwiches in half and serve.' },
      { id: uuidv4(), step: 'Enjoy this classic and delicious Tuna Salad Sandwich!' }
    ]
  },
  {
    ownerUid:'PXhGH3KPq2dBkX4vsJkJkT476OT2',
    title: 'Blueberry Pancakes',
    ingredients: [
      { name: 'all-purpose flour', quantity: '1 1/2 cups' },
      { name: 'baking powder', quantity: '2 teaspoons' },
      { name: 'salt', quantity: '1/2 teaspoon' },
      { name: 'granulated sugar', quantity: '2 tablespoons' },
      { name: 'milk', quantity: '1 1/4 cups' },
      { name: 'egg', quantity: '1' },
      { name: 'butter', quantity: '2 tablespoons, melted' },
      { name: 'blueberries', quantity: '1 cup' },
      { name: 'maple syrup', quantity: '1/2 cup (for serving)' },
    ],
    time: {
      prep: [0, 10],   // 0 hours, 10 minutes
      cook: [0, 15],   // 0 hours, 15 minutes
    },
    imageURL: 'https://dl.https://www.thespruceeats.com/thmb/By18WZI8G5Vs8To0y8BzEH4YBR8=/4705x3117/filters:fill(auto,1)/blueberry-ricotta-pancakes-541279742-5ab2d59d04d1cf0036f81d80.jpg.com/gif/9013192.gif',
    instructions: [
      { id: uuidv4(), step: 'In a mixing bowl, whisk together flour, baking powder, salt, and granulated sugar.' },
      { id: uuidv4(), step: 'In a separate bowl, whisk together milk, egg, and melted butter.' },
      { id: uuidv4(), step: 'Pour the wet ingredients into the dry ingredients and mix until just combined.' },
      { id: uuidv4(), step: 'Gently fold in the blueberries.' },
      { id: uuidv4(), step: 'Heat a griddle or non-stick skillet over medium heat. Grease with cooking spray or butter.' },
      { id: uuidv4(), step: 'Pour 1/4 cup of pancake batter onto the griddle for each pancake.' },
      { id: uuidv4(), step: 'Cook until bubbles form on the surface, then flip and cook the other side until golden brown.' },
      { id: uuidv4(), step: 'Repeat with the remaining batter.' },
      { id: uuidv4(), step: 'Serve the Blueberry Pancakes with maple syrup.' },
      { id: uuidv4(), step: 'Enjoy these fluffy and delightful pancakes!' }
    ]
  },
  {
    ownerUid:'PXhGH3KPq2dBkX4vsJkJkT476OT2',
    title: 'Avocado Toast',
    ingredients: [
      { name: 'ripe avocados', quantity: '2' },
      { name: 'whole grain bread', quantity: '4 slices, toasted' },
      { name: 'lemon juice', quantity: '1 tablespoon' },
      { name: 'red pepper flakes', quantity: '1/2 teaspoon' },
      { name: 'salt', quantity: '1/4 teaspoon' },
      { name: 'black pepper', quantity: '1/4 teaspoon' },
      { name: 'poached eggs', quantity: '4 (optional, for serving)' },
    ],
    time: {
      prep: [0, 10],   // 0 hours, 10 minutes
      cook: [0, 5],   // 0 hours, 5 minutes
    },
    imageURL: 'https://mealandaspiel.com/wp-content/uploads/2016/05/avocadotoast-e1464209120541.png',
    instructions: [
      { id: uuidv4(), step: 'Cut the avocados in half, remove the pit, and scoop the flesh into a bowl.' },
      { id: uuidv4(), step: 'Mash the avocados with a fork until smooth and creamy.' },
      { id: uuidv4(), step: 'Add lemon juice, red pepper flakes, salt, and black pepper to the mashed avocados. Mix well.' },
      { id: uuidv4(), step: 'Spread the avocado mixture on the toasted whole grain bread slices.' },
      { id: uuidv4(), step: 'Top each Avocado Toast with a poached egg (optional).' },
      { id: uuidv4(), step: 'Season the poached eggs with salt and black pepper.' },
      { id: uuidv4(), step: 'Enjoy this simple and nutritious Avocado Toast for breakfast or as a snack!' }
    ]
  },
  {
    ownerUid:'PXhGH3KPq2dBkX4vsJkJkT476OT2',
    title: 'Beef and Broccoli Stir Fry',
    ingredients: [
      { name: 'beef sirloin', quantity: '1 lb, thinly sliced' },
      { name: 'broccoli florets', quantity: '4 cups' },
      { name: 'soy sauce', quantity: '1/4 cup' },
      { name: 'oyster sauce', quantity: '2 tablespoons' },
      { name: 'brown sugar', quantity: '1 tablespoon' },
      { name: 'cornstarch', quantity: '2 teaspoons' },
      { name: 'ginger', quantity: '1 tablespoon, grated' },
      { name: 'garlic', quantity: '2 cloves, minced' },
      { name: 'vegetable oil', quantity: '2 tablespoons' },
      { name: 'rice', quantity: '2 cups, cooked (for serving)' },
      { name: 'sesame seeds', quantity: '1 tablespoon (for garnish)' },
      { name: 'green onions', quantity: '2, sliced (for garnish)' },
    ],
    time: {
      prep: [0, 20],   // 0 hours, 20 minutes
      cook: [0, 15],   // 0 hours, 15 minutes
    },
    imageURL: 'https://www.washingtonpost.com/resizer/dGc6FTVJ2A4_WhbYVvuuk6Ae4Lk=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/JJF7HIAIAQ363C3F4HGHB7ANC4.jpg',
    instructions: [
      { id: uuidv4(), step: 'In a bowl, mix soy sauce, oyster sauce, brown sugar, and cornstarch.' },
      { id: uuidv4(), step: 'Add grated ginger and minced garlic to the bowl. Stir to combine.' },
      { id: uuidv4(), step: 'In a large skillet or wok, heat vegetable oil over medium-high heat.' },
      { id: uuidv4(), step: 'Add sliced beef to the skillet and cook until browned. Remove beef from the skillet and set aside.' },
      { id: uuidv4(), step: 'In the same skillet, stir-fry broccoli florets until tender-crisp.' },
      { id: uuidv4(), step: 'Return the cooked beef to the skillet and pour in the sauce mixture.' },
      { id: uuidv4(), step: 'Cook and stir until the sauce thickens and coats the beef and broccoli.' },
      { id: uuidv4(), step: 'Serve the Beef and Broccoli Stir Fry over steamed rice.' },
      { id: uuidv4(), step: 'Garnish with sesame seeds and sliced green onions before serving.' },
      { id: uuidv4(), step: 'Enjoy this flavorful and nutritious Beef and Broccoli Stir Fry!' }
    ]
  },
  {
    ownerUid:'PXhGH3KPq2dBkX4vsJkJkT476OT2',
    title: 'Chicken Caesar Salad',
    ingredients: [
      { name: 'romaine lettuce', quantity: '1 head, torn into bite-sized pieces' },
      { name: 'cooked chicken', quantity: '2 cups, diced' },
      { name: 'croutons', quantity: '1 cup' },
      { name: 'parmesan cheese', quantity: '1/2 cup, grated' },
      { name: 'caesar dressing', quantity: '1/2 cup' },
      { name: 'black pepper', quantity: '1/4 teaspoon' },
    ],
    time: {
      prep: [0, 15],   // 0 hours, 15 minutes
      cook: [0, 0],   // 0 hours, 0 minutes
    },
    imageURL: 'https://th.bing.com/th/id/R.e6856129b393d3f3e676da0764dfb7a3?rik=j%2bUBdek6WFTF3g&riu=http%3a%2f%2fwww.simplesweetsavory.com%2fwp-content%2fuploads%2f2016%2f04%2fChicken-Caesar-Salad-wide.jpg&ehk=4%2bokBbzUfFmlm%2bsKNB15DXX6nrBBxqbx7CIrdaGYyHE%3d&risl=1&pid=ImgRaw&r=0',
    instructions: [
      { id: uuidv4(), step: 'Tear the romaine lettuce into bite-sized pieces and place them in a large bowl.' },
      { id: uuidv4(), step: 'Add diced cooked chicken to the bowl.' },
      { id: uuidv4(), step: 'Sprinkle croutons and grated parmesan cheese over the salad.' },
      { id: uuidv4(), step: 'Drizzle Caesar dressing over the salad.' },
      { id: uuidv4(), step: 'Toss the salad until all the ingredients are well combined.' },
      { id: uuidv4(), step: 'Season with black pepper to taste.' },
      { id: uuidv4(), step: 'Serve the Chicken Caesar Salad as a delicious and satisfying main dish.' }
    ]
  },
  {
    ownerUid:'PXhGH3KPq2dBkX4vsJkJkT476OT2',
    title: 'Shrimp Scampi',
    ingredients: [
      { name: 'linguine pasta', quantity: '8 ounces' },
      { name: 'shrimp', quantity: '1 lb, peeled and deveined' },
      { name: 'butter', quantity: '1/2 cup' },
      { name: 'olive oil', quantity: '2 tablespoons' },
      { name: 'garlic', quantity: '4 cloves, minced' },
      { name: 'white wine', quantity: '1/4 cup' },
      { name: 'lemon juice', quantity: '2 tablespoons' },
      { name: 'red pepper flakes', quantity: '1/4 teaspoon' },
      { name: 'salt', quantity: '1/2 teaspoon' },
      { name: 'black pepper', quantity: '1/4 teaspoon' },
      { name: 'parsley', quantity: '2 tablespoons, chopped (for garnish)' },
      { name: 'parmesan cheese', quantity: '1/4 cup, grated (for serving)' },
    ],
    time: {
      prep: [0, 10],   // 0 hours, 10 minutes
      cook: [0, 15],   // 0 hours, 15 minutes
    },
    imageURL: 'https://fthmb.tqn.com/6r0_0PVJPbNY2uX1WNgCDrteIh4=/2001x1501/filters:fill(auto,1)/155353180-56a2f6f03df78cf7727b50ff.jpg',
    instructions: [
      { id: uuidv4(), step: 'Cook the linguine pasta according to the package instructions until al dente.' },
      { id: uuidv4(), step: 'In a large skillet, melt butter with olive oil over medium heat.' },
      { id: uuidv4(), step: 'Add minced garlic to the skillet and sauté until fragrant.' },
      { id: uuidv4(), step: 'Add peeled and deveined shrimp to the skillet. Cook until they turn pink and opaque.' },
      { id: uuidv4(), step: 'Pour in white wine and lemon juice. Bring to a simmer.' },
      { id: uuidv4(), step: 'Season the shrimp with red pepper flakes, salt, and black pepper.' },
      { id: uuidv4(), step: 'Add the cooked linguine to the skillet and toss to combine.' },
      { id: uuidv4(), step: 'Garnish with chopped parsley and grated parmesan cheese.' },
      { id: uuidv4(), step: 'Serve the Shrimp Scampi as a delectable and elegant pasta dish!' }
    ]
  },
  {
    ownerUid:'PXhGH3KPq2dBkX4vsJkJkT476OT2',
    title: 'Dark Chocolate Chip Cookies',
    ingredients: [
      { name: 'all-purpose flour', quantity: '2 1/4 cups' },
      { name: 'baking soda', quantity: '1/2 teaspoon' },
      { name: 'salt', quantity: '1/2 teaspoon' },
      { name: 'unsalted butter', quantity: '1 cup, softened' },
      { name: 'granulated sugar', quantity: '3/4 cup' },
      { name: 'packed brown sugar', quantity: '3/4 cup' },
      { name: 'vanilla extract', quantity: '1 teaspoon' },
      { name: 'eggs', quantity: '2' },
      { name: 'chocolate chips', quantity: '2 cups' },
      { name: 'chopped nuts', quantity: '1 cup (optional)' },
    ],
    time: {
      prep: [0, 15],   // 0 hours, 15 minutes
      cook: [0, 10],   // 0 hours, 10 minutes
    },
    imageURL: 'https://i0.wp.com/www.modernhoney.com/wp-content/uploads/2017/08/Copycat-Doubletree-Hotel-Chocolate-Chip-Cookies-.jpg', 
    instructions: [
      { id: uuidv4(), step: 'Preheat the oven to 375°F (190°C).' },
      { id: uuidv4(), step: 'In a small bowl, whisk together all-purpose flour, baking soda, and salt.' },
      { id: uuidv4(), step: 'In a large bowl, beat softened butter, granulated sugar, packed brown sugar, and vanilla extract until creamy.' },
      { id: uuidv4(), step: 'Add eggs one at a time, beating well after each addition.' },
      { id: uuidv4(), step: 'Gradually add the flour mixture to the butter mixture, mixing until well combined.' },
      { id: uuidv4(), step: 'Stir in chocolate chips and chopped nuts (if using).' },
      { id: uuidv4(), step: 'Drop rounded tablespoons of cookie dough onto ungreased baking sheets.' },
      { id: uuidv4(), step: 'Bake in the preheated oven for 9-11 minutes or until golden brown.' },
      { id: uuidv4(), step: 'Remove the cookies from the baking sheets and let them cool on wire racks.' },
      { id: uuidv4(), step: 'Enjoy these classic and irresistible Chocolate Chip Cookies!' }
    ]
  },
  {
    ownerUid:'PXhGH3KPq2dBkX4vsJkJkT476OT2',
    title: 'Mango Salsa',
    ingredients: [
      { name: 'ripe mango', quantity: '2, diced' },
      { name: 'red bell pepper', quantity: '1, finely chopped' },
      { name: 'red onion', quantity: '1/4 cup, finely chopped' },
      { name: 'jalapeno', quantity: '1, seeded and minced' },
      { name: 'fresh cilantro', quantity: '1/4 cup, chopped' },
      { name: 'lime juice', quantity: '2 tablespoons' },
      { name: 'salt', quantity: '1/4 teaspoon' },
      { name: 'black pepper', quantity: '1/4 teaspoon' },
    ],
    time: {
      prep: [0, 15],   // 0 hours, 15 minutes
      cook: [0, 0],   // 0 hours, 0 minutes
    },
    imageURL: 'https://www.mymommystyle.com/wp-content/uploads/2014/02/26-7105-post/mango-salsa.jpg',
    instructions: [
      { id: uuidv4(), step: 'In a bowl, combine diced ripe mango, finely chopped red bell pepper, finely chopped red onion, and minced jalapeno.' },
      { id: uuidv4(), step: 'Add chopped fresh cilantro to the bowl.' },
      { id: uuidv4(), step: 'Drizzle lime juice over the salsa.' },
      { id: uuidv4(), step: 'Season with salt and black pepper.' },
      { id: uuidv4(), step: 'Toss the ingredients together until well mixed.' },
      { id: uuidv4(), step: 'Refrigerate the Mango Salsa for at least 30 minutes before serving.' },
      { id: uuidv4(), step: 'Enjoy this refreshing and tropical salsa with tortilla chips or as a topping for grilled chicken or fish!' }
    ]
  },
  {
    ownerUid:'PXhGH3KPq2dBkX4vsJkJkT476OT2',
    title: 'Pineapple Fried Rice',
    ingredients: [
      { name: 'cooked rice', quantity: '4 cups, chilled' },
      { name: 'vegetable oil', quantity: '2 tablespoons' },
      { name: 'onion', quantity: '1, finely chopped' },
      { name: 'garlic', quantity: '3 cloves, minced' },
      { name: 'cooked and diced chicken', quantity: '2 cups' },
      { name: 'diced pineapple', quantity: '1 1/2 cups' },
      { name: 'frozen peas and carrots', quantity: '1 cup' },
      { name: 'soy sauce', quantity: '3 tablespoons' },
      { name: 'fish sauce', quantity: '1 tablespoon' },
      { name: 'curry powder', quantity: '1 teaspoon' },
      { name: 'black pepper', quantity: '1/2 teaspoon' },
      { name: 'green onions', quantity: '2, sliced (for garnish)' },
      { name: 'cashews', quantity: '1/4 cup, chopped (for garnish)' },
    ],
    time: {
      prep: [0, 20],   // 0 hours, 20 minutes
      cook: [0, 15],   // 0 hours, 15 minutes
    },
    imageURL: 'https://www.thespruceeats.com/thmb/BabYJnvh7WFGxhfSkALXeOf2rLA=/3865x2576/filters:fill(auto,1)/thai-pineapple-fried-rice-697960678-5ac53dc3a9d4f90037c73168.jpg',
    instructions: [
      { id: uuidv4(), step: 'In a large skillet or wok, heat vegetable oil over medium heat.' },
      { id: uuidv4(), step: 'Add finely chopped onion and minced garlic to the skillet. Sauté until onions are soft.' },
      { id: uuidv4(), step: 'Add cooked and diced chicken to the skillet. Stir-fry for a few minutes until heated through.' },
      { id: uuidv4(), step: 'Stir in diced pineapple, frozen peas and carrots. Cook until the vegetables are tender.' },
      { id: uuidv4(), step: 'Push the ingredients to one side of the skillet and add chilled cooked rice to the empty space.' },
      { id: uuidv4(), step: 'Drizzle soy sauce and fish sauce over the rice. Sprinkle curry powder and black pepper.' },
      { id: uuidv4(), step: 'Stir the rice and the rest of the ingredients together until well combined.' },
      { id: uuidv4(), step: 'Cook for a few more minutes until everything is heated through and well seasoned.' },
      { id: uuidv4(), step: 'Garnish the Pineapple Fried Rice with sliced green onions and chopped cashews.' },
      { id: uuidv4(), step: 'Enjoy this delicious and vibrant Pineapple Fried Rice!' }
    ]
  }
];


export default recipes