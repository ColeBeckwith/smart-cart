(function () {
    'use strict';

    angular
        .module('coleTraining')
        .service('featuredMeals', featuredMeals);

    function featuredMeals() {
        var vm = this;
        vm.getMeals = getMeals;
        function getMeals() {
            var mealList = [
                {
                    'name': 'Chicken Alfredo',
                    "ingredients": ['Chicken', 'Alfredo Sauce', 'Fettuccine Noodles', 'Broccoli'],
                    'calories': 850,
                    'image': 'chicken-alfredo.png',
                    'recipe' : 'Heat a large skillet over medium heat, and add 2 tablespoons of the butter. When the butter melts, raise the heat to medium-high and add the chicken in 1 layer. Cook, without moving the pieces, until the underside has browned, 1 to 2 minutes. Flip the pieces, and cook until browned and fully cooked through, 2 to 3 minutes more. Transfer the chicken to a medium bowl.'
                },
                {
                    'name': 'Smoked Salmon',
                    "ingredients": ['Salmon', 'Capers', 'Asparagus'],
                    'calories': 300,
                    'image': 'smoked-salmon.png',
                    'recipe' : 'Place wrapped fish onto a plank or sheet pan and top with another plank or pan. Weigh with a heavy phone book or a brick or two and refrigerate for 12 hours. Flip the fish over and refrigerate another 12 hours. Some juice will leak out during the process so make sure there\'s a place for the runoff to gather.'
                },
                {
                    'name': 'Vegetable Pot Pie',
                    "ingredients": ['Carrots', 'Broccoli', 'Bread', 'Cream of Mushroom Soup'],
                    'calories': 500,
                    'image': 'vegetable-pot-pie.png',
                    'recipe' : 'Heat oil in a large skillet or saucepan. Cook onions, mushrooms, and garlic in oil for 3 to 5 minutes, stirring frequently. Stir in carrots, potatoes, and celery. Stir in cauliflower, green beans, and vegetable broth.'
                },
                {
                    'name': 'Grilled Shrimp Tacos',
                    "ingredients": ['Shrimp', 'Tortillas', 'Salsa', 'Avocado', 'Lettuce', 'Limes'],
                    'calories': 400,
                    'image': 'shrimp-tacos.png',
                    'recipe' : 'Add the avocado to the jalapeño mixture, along with the salt, fresh lime juice and chopped cilantro. Stir to combine. When you taste it, you might worry it’s too spicy but, rest assured, it’ll be perfect combined with the shrimp and fixins in the tortilla. It’s not intended to be eaten on its own like guacamole.'
                },
                {
                    'name': 'Gyros',
                    "ingredients": ['Lamb Meat', 'Pitas'],
                    'calories': 900,
                    'image': 'gyros.png',
                    'recipe' : 'Return the onion to the food processor and add the lamb, garlic, marjoram, rosemary, salt, and pepper and process until it is a fine paste, approximately 1 minute. Stop the processor as needed to scrape down sides of bowl.'
                },
                {
                    'name': 'Braised Lamb Shank',
                    "ingredients": ['Lamb Meat', 'Marinade', 'Butter'],
                    'calories': 700,
                    'image': 'braised-lamb-shank.png',
                    'recipe' : 'Add the shanks back to the pot and pour in 3 to 4 cups of water. The shanks should be submersed, if they are not, add more water. Add the bay leaves to the pan, cover and put in the preheated oven. The cooking time will be about 2 1/2 to 3 hours. Turn the shanks over about halfway through the cooking time. Check the shanks every 45 minutes or so. If the liquid has reduced too much add more water. Defat as you go.'
                },
                {
                    'name': 'Deep Dish Pizza',
                    "ingredients": ['Tomato Sauce', 'Cheese', 'Sausage'],
                    'calories': 1000,
                    'image': 'deep-dish-pizza.png',
                    'recipe' : 'Add 1 1/2 cups of the flour, the semolina, 1/2 cup of the oil, and the salt, mixing by hand until it is all incorporated and the mixture is smooth. Continue adding the flour, 1/4 cup at a time, working the dough after each addition, until all the flour is incorporated but the dough is still slightly sticky.'
                },
                {
                    'name': 'Chicken Masala',
                    "ingredients": ['Chicken', 'Yogurt', 'Jalapenos'],
                    'calories': 200,
                    'image': 'chicken-masala.png',
                    'recipe' : 'Melt butter in a large heavy skillet over medium heat. Saute garlic and jalapeno for 1 minute. Season with 2 teaspoons cumin, paprika, and 3 teaspoons salt. Stir in tomato sauce and cream. Simmer on low heat until sauce thickens, about 20 minutes. Add grilled chicken, and simmer for 10 minutes. Transfer to a serving platter, and garnish with fresh cilantro.'
                },
                {
                    'name': 'Kale Salad',
                    "ingredients": ['Kale', 'Apples', 'Pine Nuts'],
                    'calories': 150,
                    'image': 'kale-salad.png',
                    'recipe' : 'Whisk together the lemon juice, salt, garlic and olive oil. Add to the salad, and toss well. Sprinkle the Parmesan over the top, and serve.'
                },
                {
                    'name': 'Eggs Benedict',
                    "ingredients": ['Eggs', 'Tomatoes', 'Hollandaise Sauce', 'Canadian Bacon', 'Blueberries'],
                    'calories': 300,
                    'image': 'eggs-benedict.png',
                    'recipe' : 'Preheat oven on broiler setting. To Poach Eggs: Fill a large saucepan with 3 inches of water. Bring water to a gentle simmer, then add vinegar. Carefully break eggs into simmering water, and allow to cook for 2 1/2 to 3 minutes. Yolks should still be soft in center. Remove eggs from water with a slotted spoon and set on a warm plate'
                },
                {
                    'name': 'Chocolate Cake',
                    "ingredients": ['Chocolate', 'Eggs', 'Milk', 'Chocolate Frosting'],
                    'calories': 500,
                    'image': 'chocolate-cake.png',
                    'recipe' : 'Bake 30 to 35 minutes or until wooden pick inserted in center comes out clean. Cool 10 minutes; remove from pans to wire racks. Cool completely. Frost with CHOCOLATE FROSTING. Makes 12 servings.'
                },
                {
                    'name': 'Bison Burger',
                    "ingredients": ['Bison', 'Burger Buns', 'Tomatoes', 'Spinach', 'Mayonnaise', 'Ketchup', 'Mustard'],
                    'calories': 450,
                    'image': 'bison-burger.png',
                    'recipe' : 'Spray the patties with cooking spray and grill until hot and slightly pink in the center, about 5 minutes per side. Top each burger with a slice of cheese; continue cooking until the cheese melts, about 2 minutes more. An instant-read thermometer inserted into the center should read 140 degrees F (60 degrees C).'
                }
            ];

            return mealList;
        }
    }
})();
