// jshint esversion:6

const expect = chai.expect;
const should = chai.should();



describe("ShoppingListItem", function() {
  it("should be a class", function(){
  expect(ShoppingListItem).to.be.a('class');
});
  it("should have a property named 'name' ", function(){
  expect(ShoppingListItem).to.have.property("name");
});
  it("should have a property named 'description' ", function() {
  expect(ShoppingListItem).to.have.property("description");
});
  it("should have a property named 'is_done' ", function(){
  ShoppingListItem.expected.to.have.property("is_done");
  });
});






// ShoppingListItem is a class
// ShoppingListItem has a property named name
// ShoppingListItem has a property named description
// ShoppingListItem has a property named is_done
// ShoppingListItem has a constructor method that accepts 2 arguments, name and description
// the constructor method sets the new instances
// name and description properties using the arguments passed in