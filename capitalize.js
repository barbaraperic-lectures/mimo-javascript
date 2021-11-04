// word bArCElOna => Barcelona

function capitalize(word) {
  const firstLetter = word[0].toUpperCase()
  const restOfTheWord = word.substring(1).toLowerCase()
  // interpolation
  return `I live in ${firstLetter}${restOfTheWord}.`
}


console.log(capitalize("bArCElOna"));