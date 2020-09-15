// solve for 9/15/2020 Returning Strings 
function greet(name){
  return `Hello, ${name} how are you doing today?`
}
// solve for 9/14/2020 Check the Exam 
function checkExam(array1, array2) {
  const score = 0;
  for (var i = 0; i < array1.length; i++ ){
    if (array1[i] === array2[i]){
      
      score += 4;
    } 
    else if (array2[i] === ""){
      score -= 0;
    }
    else {
      score -= 1;
  }
  }
  
  if (score < 0){
    score = 0;
  };
  return score
};

// solve for 9/12/2020 Keep Hydrated!
function litres(time) {
  return Math.floor(time/2);
}

// Test.describe('Fixed tests', _ => {
//   Test.it('Tests', _ => {
//     Test.assertEquals(litres(2), 1, 'should return 1 litre');
//     Test.assertEquals(litres(1.4), 0, 'should return 0 litres');
//     Test.assertEquals(litres(12.3), 6, 'should return 6 litres');
//     Test.assertEquals(litres(0.82), 0, 'should return 0 litres');
//     Test.assertEquals(litres(11.8), 5, 'should return 5 litres');
//     Test.assertEquals(litres(1787), 893, 'should return 893 litres');
//     Test.assertEquals(litres(0), 0, 'should return 0 litres');
//   });
// });


// solve for 8/31/2020
function getAverage(marks){
  const result= marks.reduce((total,score) => total+score);
  const mean = result/marks.length
  console.log(mean);
  const finalNumber = Math.floor(mean)
  return finalNumber

// solve for 8/26/2020
function checkAlive (health) {
  if (health > 0) return true;
  return false;
}

//  Test.assertEquals(checkAlive(5), true)
// Test.assertEquals(checkAlive(0), false)

// solve 2 for 8/22/2020
function removeChar(str) {
    return str.slice(1, -1);
  }

function removeChar(str){
    const array = str.split("")
    const arraySlice = array.slice(1,-1)
    const finalArray = arraySlice.join("")
    return finalArray
  };
  

function removeChar(str){
    const array = str.split("")
    const arrayEnd = array.pop()
    const arrayShift = array.shift()
    const finalArray = array.join("")
    return finalArray
  };
  

// solve 1 for 8/22/2020
str = "hello"
function solution(str){
  return str.split("").reverse().join("");  
}

console.log(solution(str));
// Test.assertEquals(solution('world'), 'dlrow')
// Test.assertEquals(solution('hello'), 'olleh')
// // Test.assertEquals(solution(''), '')
// Test.assertEquals(solution('h'), 'h')