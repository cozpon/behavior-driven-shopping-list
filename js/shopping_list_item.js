// jshint esversion:6

class ShoppingListItem {
  constructor(name, description){
    this.name = name;
    this.description = description;
    this.is_done = false;
}
  check(){
   let checkTrue = this.is_done = true;
   return checkTrue;
  }

  uncheck(){
    let unCheck = this.is_done = false;
    return unCheck;
  }

  render(){
  let htmlformatstring = `<ul>
  <li class="completed_${this.is_done}"><span>${this.name}</span>
    <span>${this.description}</span>
  </li>
<ul>`;
return htmlformatstring;
  }

}

class ShoppingList {
  constructor (items){
    this.items = [];
  }
  addItem(ShoppingListItem){

  }
}
module.exports = ShoppingListItem;
module.exports = ShoppingList;