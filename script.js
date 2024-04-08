function firstWord(str) {
  // your code here
	if (!str || !str.includes(' ')) {
        return str;
    }
    // Split the string by spaces and return the first element
    return str.split(' ')[0];
	
}

// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
