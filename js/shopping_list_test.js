// jshint esversion:6

const expect = chai.expect;
const should = chai.should();

let listItem;
let sl;



describe("ShoppingListItem", function() {
  beforeEach(function (){
  listItem = new ShoppingListItem('Avocado', 'Expensive');
  sl = new ShoppingList();
  });

  it("should be a function", function(){
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
      expect(listItem).to.respondTo("check");
    });
    it('should set is_done to true', function(){
      expect(listItem.check()).to.be.true;
    });
  });

  describe('.uncheck', function(){
    it('should be a function', function() {
      expect(listItem).to.respondTo("uncheck");
    });
    it('should set is_done to false', function(){
      expect(listItem.uncheck()).to.be.false;
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
  let listItem = new ShoppingListItem('chocolate', 'its sweet, daddio');
  let listItem2 = new ShoppingListItem('coffee', 'Life Essential');

  beforeEach(function(){
    sl = new ShoppingList();
    let notsli = {name: 'sugar', description: 'for making sweet'};
  });

  it("should be a function", function() {
    ShoppingList.should.be.a('function');
  });

  it('has property named items', function() {
    sl.should.have.a.property('items');
  });

  it('"items" should be an empty array', function(){
    expect(sl.items).to.deep.equal([]);
  });


  describe('.addItem', function(){

    it('Should be a function named addItem', function() {
      expect(sl).to.respondTo('addItem');
    });

    it('Should add a ShoppingListItem to the items array', function(){
      expect(sl.addItem(listItem)).to.deep.equal([listItem]);
    });

    it('should throw error if non ShoppingListItem is passed in', function(){
    expect(function(){sl.addItem(notsli);}).to.throw();
    });
  });

  describe('.removeItem', function(){

    beforeEach(function(){
      sl.addItem(listItem);
    });

    it('Should be a function named removeItem', function(){
      expect(sl).to.respondTo('removeItem');
    });

    it('Should remove the item in parameter if it exists', function(){
      expect(sl.removeItem(sl.items[0])).to.deep.equal([]);
    });
    it('should remove the last item in the array if there are no parameters', function(){
      expect(sl.removeItem()).to.deep.equal([]);
    });
    it('should throw an error if not a ShoppingListItem object', function(){
      expect(function(){sl.removeItem(notsli);}).to.throw();
    });
  });


  describe('render', function(){
    beforeEach(function(){
      sl.addItem(listItem);
      sl.addItem(listItem2);
    });

    it('Should be a method', function(){
      expect(ShoppingList).to.respondTo('render');
    });
    it('Activating render should concatenate the results on each item in array', function(){
      expect(sl.render()).to.equal(`<ul>${listItem.render()}${listItem2.render()}</ul>`);
    });
  });
});


