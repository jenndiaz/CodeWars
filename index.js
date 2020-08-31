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