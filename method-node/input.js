var prompt = require('prompt');

prompt.start();

prompt.get(['input','input2'], function(err,response){
    console.log(`The input is ${response.input}`);
    console.log(`The second input is ${response.input2}`)
})