// Write a program to check if two strings are a rotation of each other?
function areRotations(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
  
    const concatenated = str1 + str1;
  
    if (concatenated.includes(str2)) {
      return true;
    }
  
    return false;
  }
  
  const string1 = "abcde";
  const string2 = "deabc";
  
  if (areRotations(string1, string2)) {
    console.log("The two strings are rotations of each other.");
  } else {
    console.log("The two strings are not rotations of each other.");
  }
  