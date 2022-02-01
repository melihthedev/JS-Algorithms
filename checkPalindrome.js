function palindrome(str) {
  let strLowered = str.toLowerCase()
  let trimmedStr = strLowered.replace(/[^a-z0-9]/gi, "")
  let reversedStr = trimmedStr.split("").reverse().join("")
  
  return trimmedStr == reversedStr ? true : false;
}

palindrome("_eye")