// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function trim(string) {
  return string.replace(/[^\w]/g, "").toLowerCase();
}

function mapping(string) {
  charMap = {};
  for (let char of string) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

function anagrams(stringA, stringB) {
  const cleanedStringA = trim(stringA);
  const cleanedStringB = trim(stringB);
  const indexA = mapping(cleanedStringA);
  const indexB = mapping(cleanedStringB);
  const shallowCompare =
    Object.keys(indexA).length === Object.keys(indexB).length &&
    Object.keys(indexA).every(
      (key) => indexB.hasOwnProperty(key) && indexA[key] === indexB[key]
    );
  return shallowCompare;
}

module.exports = anagrams;
