let quoteString = 'Failure is simply the opportunity to begin again this time more intelligently.'
console.log(quoteString);

let upperCaseString = quoteString.toUpperCase()
console.log(upperCaseString);

let authorString = '- Henry Ford'
let completeString = quoteString.concat(authorString)
console.log(completeString);

let secondQuote = 'Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King'
let lowerCaseString = secondQuote.toLowerCase()
console.log(lowerCaseString);

console.log(secondQuote.charAt(3));

secondQuote = secondQuote.replace('What separates the talented individual from the successful one is a lot of hard work.', '');
findString = ('What separates the talented individual from the successful one is a lot of hard work.');

console.log('Find string: ' + findString);
console.log('Updated Second Quote: ' + secondQuote);