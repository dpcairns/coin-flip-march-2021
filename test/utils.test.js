// IMPORT MODULES under test here:
import { getActualHeadsOrTails } from '../utils.js';

const test = QUnit.test;

test('if it takes in a number less than .5, return heads.', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'heads';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getActualHeadsOrTails(.3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('if it takes in a number greater than or equal .5, return tails. ', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'tails';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getActualHeadsOrTails(.7);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

