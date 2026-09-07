//Translate border-left-width to borderLeftWidth
//Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

function camelize(str) {
    return str
        .split('-')  // splits 'my-long-word' into array ['my', 'long', 'word']
        .map((word, index) => index == 0 ? word : word[0]).toUpperCase() + word.slice(1)
        // If index is 0, i,e first word return that word, else return the first character of that word at uppercase + copy characters from index 1 of the string onwards
        .join('')
}

console.log(camelize("background-color"))

