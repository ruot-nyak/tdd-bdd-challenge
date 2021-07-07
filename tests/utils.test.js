const mocha = require("mocha")
const chai = require("chai")
const utils = require("../utils")
const expect = chai.expect

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello()
  expect(hello).to.be.a("string")
  expect(hello).to.equal("Hello")
  expect(hello).with.lengthOf(5)
})

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================
it("Should return the area", function() {
  const areaFunction = utils.area(4, 5)
  expect(areaFunction).to.be.a("Number")
  expect(areaFunction).to.equal(4 * 5)
  expect(areaFunction).to.be.above(0)
})

it("Should return the perimeter", function() {
  const perimeterFunction = utils.perimeter(8, 9)
  expect(perimeterFunction).to.be.a("Number")
  expect(perimeterFunction).to.equal(2 * (8 * 9))
  expect(perimeterFunction).to.be.above(0)
})

it("Should return the area of a circle", function() {
  const circleAreaFunction = utils.circleArea(4)
  expect(circleAreaFunction).to.be.a("Number")
  expect(circleAreaFunction).to.equal(4^2 * Math.PI)
  expect(circleAreaFunction).to.be.above(0)
})



// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
  utils.clearCart()
  done()
})

it("Should create a new (object) Item with name and price", function() {
  const item = utils.createItem("apple", 0.99)
  expect(item).to.be.a("object")
  expect(item).to.have.property("name", "apple")
  expect(item).to.have.property("price", 0.99)
  expect(item).to.have.property("quantity", 1)
})

it("Should return an array containing all items in cart")

it("Should add a new item to the shopping cart")

it("Should return the number of items in the cart")

it("Should remove items from cart")

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart")

it("Should validate that an empty cart has 0 items")

it("Should return the total cost of all items in the cart")
