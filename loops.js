function forLoop(arr){
  arr.push("I am 1 strange loop.")
  for(var i = 2; i <= 25; i++){
    var phrase = `I am ${i} strange loops.`
    arr.push(`I am ${i} strange loops.`)
  }
  return arr
}