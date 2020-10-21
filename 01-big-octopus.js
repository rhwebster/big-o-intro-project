function quadraticBiggestFish(fishes) {
  // Code goes here ...
  let biggestFish = '';
  for(let i = 0; i < fishes.length; i++) {
    for(let j = i+1; j < fishes.length; j++) {
      if(fishes[i].length > fishes[j].length) {
        biggestFish = fishes[i];
      } else {
        biggestFish = fishes[j];
      }
    }
  }
  return biggestFish;
}

function nlognBiggestFish(fishes) {
  // Code goes here ...
  fishes.sort(function (a, b) { return b.length - a.length });
  console.log(fishes);
  return fishes[0];
}


function linearBiggestFish(fishes) {
  let biggestFish = '';
  for(let i = 0; i < fishes.length; i++) {
    if (fishes[i].length > biggestFish.length) {
      biggestFish = fishes[i];
    }
  }
  return biggestFish;
}


tilesArray = ["up", "right-up", "right", "right-down", "down", "left-down", "left", "left-up"]
function slowDance(direction, tilesArray) {
  for (let i = 0; i < tilesArray.length;i++){
    if (direction === tilesArray[i]){
      return i
    }
  }
}
console.log(slowDance("up", tilesArray)); // 0
console.log(slowDance("right-down", tilesArray)); // 3



tilesObj = {
  "up": 0,
  "right-up": 1,
  "right": 2,
  "right-down": 3,
  "down": 4,
  "left-down": 5,
  "left": 6,
  "left-up": 7
}


function fastDance(direction, tilesObj) {
  // Code goes here ...
}

const fishies = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish',
  'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'];

console.log(quadraticBiggestFish(fishies));
console.log(nlognBiggestFish(fishies));
console.log(linearBiggestFish(fishies));