const menu = {
  _courses: {
    appetizers:[],
    mains: [],
    desserts:[]
  },
  get appetizers(){
    return this._courses.appitizers

  },
  set appetizers(appitizers){
    this._courses.appetizers = appitizers
  },
  get mains(){
    return this._courses.mains
  },
  set mains(mains){
    this._courses.mains = mains
  },
  get desserts(){
    return this._courses.desserts
  },
  set desserts(desserts){
    this._courses.desserts = desserts
  },
  get courses(){
    return Object.entries(this._courses)
   },
  addDishToCourse (courseName,dishName,dishPrice){
    const dish = {
      name : dishName,
      price : dishPrice
    }
    this._courses[courseName].push(dish)
  },
    getRandomDishFromCourse (courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random()*dishes.length);
      return dishes[randomIndex]
    
    ; 
  },
  generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourse('appetizers')
    const main = this.getRandomDishFromCourse('mains')
    const dessert = this.getRandomDishFromCourse('desserts')
    const totalPrice = appetizer.price + main.price + dessert.price
    return `You ordered ${appetizer.name}, ${main.name} and ${dessert.name}. Your bill is ${totalPrice}`
  }
}
menu.addDishToCourse('appetizers','soup',30);
menu.addDishToCourse('appetizers','vegetable salad',25);
menu.addDishToCourse('appetizers','fruit salad',35);

menu.addDishToCourse('mains','rice',40);
menu.addDishToCourse('mains','fufu',80);
menu.addDishToCourse('mains','banku',20.5);

menu.addDishToCourse('desserts','cake',15);
menu.addDishToCourse('desserts','kelewele',11.50);
menu.addDishToCourse('desserts','icecream',10);
let meal = menu.generateRandomMeal()
console.log(meal)
