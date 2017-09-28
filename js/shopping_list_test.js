// jshint esversion:6

const expect = chai.expect;
const should = chai.should();

let listItem = new ShoppingListItem('Avocado', 'Expensive');
let list = new ShoppingList();


describe("ShoppingListItem", function() {
  it("should be a class", function(){
    ShoppingListItem.should.be.a('function');
  });

  it("should have a name", function(){
    expect(listItem).to.have.property("name");
  });

  it("should have description", function() {
    expect(listItem).to.have.property("description");
  });

  it("should have a property named 'is_done' ", function(){
    listItem.should.have.a.property("is_done");
  });
});

describe('.check', function(){
  it('should be a function', function() {
    listItem.check().should.equal(is_done = true);
  });
});

describe('.uncheck', function(){
  it('should be a function', function() {
    listItem.uncheck().should.equal(is_done = false);
  });
});

describe(".render", function(){
  it("should be a function named 'render'", function(){
    expect(listItem).to.respondTo('render');
  });

  it("should return an html formatted string", function(){
    listItem.render().should.equal(`<ul>
  <li class="completed_false"><span>Avocado</span>
    <span>Expensive</span>
  </li>
<ul>`);
  });
});



describe('ShoppingList', function(){
  it("should be a class", function() {
    ShoppingList.should.be.a('function');
  });
});

  it('has property named items', function() {
    list.should.have.a.property('items');
    list.items.should.deep.equal([]);
  });

describe('.addItem', function(){
  it("should be a function and accept a single argument: ShoppingListItem", function() {
      expect(list).to.respondTo('addItem');
  });
});
