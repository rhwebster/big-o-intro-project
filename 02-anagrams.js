function firstAnagram(str1, str2) {
  let str2Array = str2.split("");
  let currIdx;
  for (let i = 0; i < str1.length; i++) {
    if (str2Array.indexOf(str1[i]) >= 0) {
      currIdx = str2Array.indexOf(str1[i]);
      str2Array.splice(currIdx, 1);
    }
  }
  return str2Array.length === 0;
}
console.log(firstAnagram("gizmo", "sally")); // => false
console.log(firstAnagram("elvis", "lives")); // => true

function secondAnagram(str1, str2) {
  let str1Arr = str1.split("");
  let str2Arr = str2.split("");
  str1Arr.sort();
  str2Arr.sort();
  let newStr1 = str1Arr.join("");
  let newStr2 = str2Arr.join("");
  return newStr1 === newStr2;
}
console.log(secondAnagram("gizmo", "sally")); // => false
console.log(secondAnagram("elvis", "sivle")); // => true



function thirdAnagram(str1, str2) {
  let str1Arr = str1.split("");
  let str2Arr = str2.split("");
  let str3Arr = str1Arr.concat(str2Arr)
  let str3Obj = {}
  let currLetter

  while(str3Arr.length > 0){
    currLetter = str3Arr.pop();
    // console.log(currLetter)
    if (str3Obj[currLetter]){
      str3Obj[currLetter] ++
    } else {
      str3Obj[currLetter]= 1
    }
  }

  return str3Obj
}

console.log(thirdAnagram("gsssssssss", "sally")); // => false
console.log(thirdAnagram("elvis", "sivle")); // => true


