// window.setTimeout( () => {
//   alert('HAMMERTIME');
// }, 5000)

const readline = require('readline');

const reader  = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.question("Would you like some tea?", function(teaAnswer) {
  reader.question("Would you like some biscuits?", function(bisAnswer) {
    const teaRes = ( teaAnswer === 'yes') ? 'do' : 'don\'t';
    const bisRes = ( bisAnswer === 'yes') ? 'do' : 'don\'t';
    console.log(`So you ${teaRes} want tea and you ${bisRes} want biscuits.`);
    reader.close();
  });
});
