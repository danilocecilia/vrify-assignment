/* 
1. In a ​web programming language​ of your choice, provide code and tests for a method which multiplies a 
value by 321, without using loops, the multiply operator, or divide operator.
*/

function multiplyTwoNumbers(x, y) {
    // 0 multiplied with anything gives 0 
    if (y === 0 || x === 0) 
        return 0; 

    // Add x one by one 
    if (y > 0) {
        var result =  (x + multiplyTwoNumbers(x, y - 1)); 

        //console.log('X is Equal to: ' + x + ' and Y is Equal to: ' + y + ' and the Multiplication is: ' + result);

        return result;
    }

    // the case where y is negative 
    if (y < 0) 
        return -multiplyTwoNumbers(x, -y); 
        
    return -1; 
}

/// v1 = First argument
/// v2 = Second argument
/// result = result of the multiplication between first and second argument
function testMultiplyTwoNumbers(v1, v2, res) {
    var assert = {
        equal: function(firstValue, secondValue) {
            if(firstValue !== secondValue) {
                throw new Error('Assert failed, ' + firstValue + 'is not equal to ' + secondValue);
            }
        }
    }

    // 1. ARRANGE
    var x = v1;
    var y = v2;
    var result = res;

    // 2. ACT
    var result2 = multiplyTwoNumbers(x,y);

    console.log('multiplyTwoNumbers(x,y) should return the multiplication of its two arguments.');
    console.log('Expect ' + result + ' to equal ' + result2 + '.');

    // 3. ASSERT
    try {
        assert.equal(result, result2);
        console.log('Passed.');
    } catch (error) {
        console.log(error.message);
    }
}


testMultiplyTwoNumbers(10, 321, 3210);
testMultiplyTwoNumbers(-10, 321, -3210);
testMultiplyTwoNumbers(4, 321, 1284);
testMultiplyTwoNumbers(-4, 321, -1284);
testMultiplyTwoNumbers(321, 321, 103041);
testMultiplyTwoNumbers(0, 321, 0);
testMultiplyTwoNumbers(321, 0, 0);
testMultiplyTwoNumbers(1, 321, 321);