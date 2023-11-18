/**
 * @file prompt.js
 * @module prompt
 * @description simple prompt module to get input from user using process.stdin
 * @requires {@link https://www.npmjs.com/package/path}
 * @requires {@link https://www.npmjs.com/package/fs}
 * @author Richik Dutta
 * @date 03/11/2023
 * @copyright Copyright @ 2023-.. by Richik Dutta. All rights reserved
 */

const { Console } = require('console');
let fs = require('fs');
let path = require('path');
let basefileName = path.basename(module.filename, path.extname(module.filename));
let namespacePrefix = 'prompt.${basefileName}.';
let term = 13; //carriage return

/**
 * @function prompt
 * @description Prompts the user for input and return the input
 * @param {string} ask what the prompt should display when asking the user
 * @return {string} A string of whatever input the user gave.
 * @author Richik Dutta
 * @date 03/11/2023
 */

function prompt(ask) {
    let functionName = prompt.name;
    console.log(`${namespacePrefix}${functionName}: ${ask}`);
    console.log('ask is: ${JSON.stringify(ask)}');
    let input = '';
    if(ask) {
        process.stdout.write(ask);

    }
    let 
        buffer = Buffer.alloc(1024),
        fd = process.platform === 'win32' ? process.stdin.fd : fs.openSync('dev/tty','rs'),
        readSize = fs.readSync(0, buffer, 0, 1024);
    input = buffer.toString('utf8', 0, readSize);
    if(input.includes(String.fromCharCode(term))) {
        input = input.slice(0, input.indexOf(String.fromCharCode(term)));
    }       
    else if(input.includes('/r/n')) {
        input = input.slice(0, input.indexOf('/r/n'));
    }

    console.log('Input is : ${JSON.stringify(input)}');
    Console
}