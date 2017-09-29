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
  constructor (){
    this.items = [];
  }
  addItem(listItem){
    if(listItem instanceof ShoppingListItem){
      this.items.push(listItem);
      return this.items;
    }
    else{
      throw new Error("Not a ShoppingListItem");
    }
  }

  removeItem(listItem){
    console.log("hey'hey,",this.items.indexOf(listItem));
    console.log(listItem);
    if(listItem instanceof ShoppingListItem && this.items.indexOf(listItem) >= 0){
      let i = this.items.indexOf(listItem); // where listItem is in shopping List
      this.items.splice(i, 1);  // remove dat item
      return this.items;
    } else if(!listItem) { // if there is invoked parameters
      this.items.pop(); // remove that last item, daddio!
      return this.items;
    } else {
      throw new Error("item not in your list!");
    }


  }

  render(){
    var newString = "";
    this.items.forEach(function(item){
      newString += item.render();
    });
    return `<ul>${newString}</ul>`;
  }

}
