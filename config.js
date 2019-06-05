var fs = require('fs');

// ----- Setting environment | Start | -----
try {
    // Read env file
    let envDataRaw = fs.readFileSync('.env', { encoding: 'utf8' });
    
    // parse the environment data to JSON
    envDataObject = JSON.parse(envDataRaw);
    console.log("envDataObject.environment",envDataObject.environment);
    
    // Set the Environment variables
    process.env.ENV = envDataObject.environment;
    
} catch (ENVReadError) {
    // In case of error handle and show the error and add other condition as required
    console.log("ENVReadError",ENVReadError);
}
// ----- Setting environment | End | -----

// Just Checking
console.log("ENV :", process.env.ENV);





// Common configuration
var config = {
    // Some Setting
    someKey : "SomeValue-try"
};

// Configuration for QA Environment
var configQA = {
    // Some Setting
    someKeyQA : "someValueQA"
};

// Configuration for Producion environment
var configPROD = {
    // Some Setting
    someKeyPROD : "someValuePROD"
}
console.log("process.env.ENV",process.env.ENV)
// Appeding the config with environment specific variables and values
switch (process.env.ENV) {
    case "QA": console.log('QA'); Object.assign(config, configQA);break;
    default: console.log('PROD1'); Object.assign(config, configPROD); break;
};

// Exporting the config
module.exports = config