// Function to find the first unique character in a string
function findFirstUniqueChar(input) {
    const charCount = new Map();
  
    // Count occurrences of each character
    for (const char of input) {
      charCount.set(char, (charCount.get(char) || 0) + 1);
    }
  
    // Find the first unique character
    for (let i = 0; i < input.length; i++) {
      if (charCount.get(input[i]) === 1) {
        return i;
      }
    }
  
    return -1;
  }
  
  module.exports = { findFirstUniqueChar };
  