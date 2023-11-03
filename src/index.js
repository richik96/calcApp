/**
 * @file index.js
 * @module index
 * @description A simple calculator app.
 * @requires {@link https://www.npmjs.com/package/path}
 * @author Richik Dutta
 * @date 03/11/2023
 * @copyright Copyright @ 2023-.. by Richik Dutta. All rights reserved
 */

let path = require('path');
global.appRoot = path.resolve(process.cwd());
let rootPath = '';
let basefileName = path.basename(module.filename, path.extname(module.filename));
let namespacePrefix = 'application.${basefileName}.';

/**
 * @function application
 * @description This is the main programming loop. The init for the entire application.
 * @returns {void}
 * @author Richik Dutta
 * @date 03/11/2023
 */
function application() {
    let functionName = application.name;
    let argumentDriveInterface = false;
    let commandInput, commandResult;
    let inputData1 = 0;
    let inputData2 = 0;
    console.log('BEGIN ${namespacePrefix}${functionName}.function');
    console.log('BEGIN main program loop');
    //console.log('BEGIN command parser');
    if(argumentDriveInterface === false) {
        while(programRunning) {
            commandInput = prompt.prompt('Enter a math operation: ');
            if(commandInput.toUpperCase().trim() === 'EXIT' || 
            commandInput.toUpperCase().trim() === 'QUIT' ||
            commandInput.toUpperCase().trim() === 'Q' ||
            commandInput.toUpperCase().trim() === 'X') {
                console.log('END command parser');
                programRunning = false;
                console.log('END main program loop');
                console.log('Exiting, Good Bye!');
            }
        }
    }
    console.log('END ${namespacePrefix}${functionName} function');
}



let programRunning = false;
//bootStrapApplication
programRunning = true;
application();