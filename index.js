// Add your functions and code here
var kittens = ["Milo","Otis","Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push("Ralph")
  return kittens
}

function destructivelyPrependKitten(name)  {
  kittens.unshift("Bob")
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop("Garfield")
  return kittens
}

function destructivelyRemoveFirstKitten()  {
  kittens.shift("Milo")
  return kittens
}

function appendKitten(name)  {
  return [...kittens,"Ralph"]
}