var Dish = Backbone.Model.extend({
  defaults: {
    name: '',
    image: '',
    cook: '',
    price: 0,
    rating: 0,
    ingredients: '',
    precinct: '',
    time_available: ''
  }
});

var DishesCollection = Backbone.Collection.extend({
  model: Dish
});
var Dishes = new DishesCollection();
Dishes.add(dish1);
Dishes.add(dish2);
Dishes.add(dish3);
Dishes.add(dish4);
Dishes.add(dish5);
