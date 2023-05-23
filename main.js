//Practice fetching and unit testing.

// Use the previous video to walk through building two tests for this simple app; 
// 1 for a single beer and 1 for 10 beers
// You should end up with a simple GUI app that has at least two unit tests injected 
// into your fetch request


//The JavaScript require function facilitates a way to include JavaScript modules in your code.
//In order to use the code from an NPM package, you must require it in this file. 
//In this case, we require the assert package added by Mocha. 
//Node refers to the NPM packages as modules.
//The require command can be written anywhere but it is customary to place it at the top.
const assert = require('assert');

//Fetch Data
const getBeerData = async () => {
  const response = await fetch('https://api.punkapi.com/v2/beers/1');
  const jsonData = await response.json();
  return jsonData;
};

const getBeersData = async () => {
  const response = await fetch('https://api.punkapi.com/v2/beers?page=1&per_page=25');
  const jsonData = await response.json();
  return jsonData;
};

//Unit Testing Code
//'describe is a mocha function.
//Check if the 'describe' function is available in this file.
//It should only be available if we run the 'npm test' command.
//If so, execute the test code inside the if block.  
if (typeof describe === 'function') {
  //'describe' is a mocha function.
  //The describe function takes two arguments, the first one is a string that describes this group of tests. 
  //And the second is the call back function with the actual test code.
  describe('Fetching One Beer', function(){
    //'it' is a mocha function, which represents an individual test case.
    it('Test data related to 1 beer', async function(){
      const beerData = await getBeerData();
      //assert is the object that has all the methods to perform the tests.
      //assert is a verification or check that must pass.
      assert.equal(beerData[0].name, 'Buzz'); 
      assert.equal(beerData.length, 1);
    });

    it('Test data related to multiple beers', async function(){
      const beerData = await getBeersData();
      //assert is the object that has all the methods to perform the tests.
      //assert is a verification or check that must pass.
      assert.equal(beerData[24].name, 'Bad Pixie'); 
      assert.equal(beerData.length, 25);
    });
  });
}
