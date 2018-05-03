function forLoop(arr){
  arr.push("I am 1 strange loop.")
  for(let i = 2; i <= 25; i++){
    arr.push(`I am ${i} strange loops.`)
  }
  return arr
}