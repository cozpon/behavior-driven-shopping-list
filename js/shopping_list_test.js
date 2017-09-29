// jshint esversion:6

const expect = chai.expect;
const should = chai.should();

let listItem;
let shop;

beforeEach(function (){
  listItem = new ShoppingListItem('Avocado', 'Expensive');
  shop = new ShoppingList();
});



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
});

describe('ShoppingList', function(){
  it("should be a class", function() {
    ShoppingList.should.be.a('function');
  });


  it('has property named items', function() {
    shop.should.have.a.property('items');
  });

  it('"items" should be an empty array', function(){
    shop.items.should.deep.equal([]);
  });

  describe('.addItem', function(){

    it('Should be a function named addItem', function() {
      expect(shop).to.respondTo('addItem');
    });

    it('Should add a ShoppingListItem to the items array', function(){
      shop.addItem(listItem);
      expect(shop.items).to.include('Avocado');
    });

    it('Should add item from ShoppingListItem', function(){
      expect(shop.addItem).to.include(ShoppingListItem);
    });
  });

  describe('.removeItem', function(){
    it('Should be a function named removeItem', function(){
      expect(shop).to.respondTo('removeItem');
    });

    it('Should remove an item from the Shopping List', function(){
      shop.removeItem(ShoppingListItem);
      expect(shop.items).to.not.include("Avocado");
    });
  });
});


