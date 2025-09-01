// Mock API for fetching recipe data

const recipes = [
  {
    id: 1,
    title: 'Traditional spare ribs baked',
    creator: 'By Chef John',
    rating: 4.0,
    image: 'https://via.placeholder.com/150',
    category: 'Dinner',
    ingredients: ['1 rack of pork spare ribs', '1 cup of BBQ sauce', '1 tbsp of paprika', '1 tsp of garlic powder'],
    instructions: '1. Preheat oven to 350°F (175°C). 2. Mix spices and rub over ribs. 3. Bake for 2 hours. 4. Brush with BBQ sauce and bake for another 30 minutes.'
  },
  {
    id: 2,
    title: 'Lamb chops with fruity couscous and mint',
    creator: 'By Spicy Nelly',
    rating: 4.5,
    image: 'https://via.placeholder.com/150',
    category: 'Dinner',
    ingredients: ['4 lamb chops', '1 cup of couscous', '1/2 cup of mixed dried fruit', '1/4 cup of fresh mint'],
    instructions: '1. Grill lamb chops to desired doneness. 2. Prepare couscous according to package directions. 3. Stir in dried fruit and mint into couscous.'
  },
  {
    id: 3,
    title: 'Spice roasted chicken with flavored rice',
    creator: 'By Mark Kelvin',
    rating: 4.2,
    image: 'https://via.placeholder.com/150',
    category: 'Lunch',
    ingredients: ['1 whole chicken', '1 cup of basmati rice', '1 onion', '2 cloves of garlic', '1 tsp of turmeric'],
    instructions: '1. Roast chicken with spices at 400°F (200°C) for 1 hour. 2. Sauté onion and garlic, add rice and turmeric, then cook rice.'
  },
    {
    id: 4,
    title: 'Chinese style Egg fried rice',
    creator: 'By Laura Wilson',
    rating: 3.8,
    image: 'https://via.placeholder.com/150',
    category: 'Chinese',
    ingredients: ['2 cups of cooked rice', '2 eggs', '1/2 cup of mixed vegetables', '2 tbsp of soy sauce'],
    instructions: '1. Scramble eggs in a wok. 2. Add rice and vegetables. 3. Stir-fry for 5 minutes and add soy sauce.'
  },
];

// PUBLIC_INTERFACE
export const getRecipes = async (searchTerm = '', category = 'All') => {
  return new Promise(resolve => {
    setTimeout(() => {
      let filteredRecipes = recipes;

      if (searchTerm) {
        filteredRecipes = filteredRecipes.filter(recipe =>
          recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      if (category && category !== 'All') {
        filteredRecipes = filteredRecipes.filter(recipe => recipe.category === category);
      }

      resolve(filteredRecipes);
    }, 500);
  });
};

// PUBLIC_INTERFACE
export const getRecipeById = async (id) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(recipes.find(recipe => recipe.id === parseInt(id)));
    }, 300);
  });
};

// PUBLIC_INTERFACE
export const getCategories = async () => {
    return new Promise(resolve => {
        setTimeout(() => {
            const categories = ['All', ...new Set(recipes.map(r => r.category))];
            resolve(categories);
        }, 100);
    });
}
