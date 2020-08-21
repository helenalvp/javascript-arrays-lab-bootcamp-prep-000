var kittens = ["Milo","Otis","Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten() {
  kittens.push("Ralph");
  return kittens;
}

function destructivelyPrependKitten() {
 kittens.unshift("Bob");
 return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift(0);
  return kittens;
}

//NOT DESTRUCTIVE
function appendKitten(name) {
  console.log([...kittens,name]);
}
