let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(secretMessage.length)
//pop takes last
secretMessage.pop()
//push adds to back
secretMessage.push('to', 'Program')
console.log(secretMessage.length)
//find index of 'word'
console.log(secretMessage.indexOf('easily'))
secretMessage[7] = 'right'
//shift takes first element
secretMessage.shift()
//unshift moves in words to first positions
secretMessage.unshift('Programming')
//splice out (start, num of eles, [optional add a word])
secretMessage.splice(6,5,'know')
//.join('character for comma replace')
console.log(secretMessage.join(' '))
