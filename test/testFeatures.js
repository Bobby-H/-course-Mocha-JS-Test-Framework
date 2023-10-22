//Test Suite - Mathematical Operations

//Test Cases

// 1. Addition
// 2. Subtraction
// 3. Multiplication
// 4. Division
var assert = require('assert');
const { setTimeout } = require('timers/promises');

describe('Mathematical Operations- Test Suite', function() { //describe the group of test cases

    this.retries(4);

    beforeEach(function () {
      setTimeout(200);
    });
  
    it('should succeed on the 3rd try', function () {
      // Specify this test to only retry up to 2 times
      this.retries(2);
    });

    let a = 10
    let b = 10
    
    it('Addition of two numbers', function(){ // using the .only() modifier to run this test, or other test cases with .only()
        
        let c = a+b
        
        assert.equal(c,20)

    });

    it('Subtraction of two numbers', () => {
         let c = a-b
        assert.equal(c,0)
    });
    
    it('Multiplication of two numbers', () => {
         let c = a*b
        assert.equal(c,100)
    });
    
    it('Division of two numbers', () => {
         let c = a/b
        assert.equal(c,1)
    });

//    it('this is a pending test for a feature in development');

});
