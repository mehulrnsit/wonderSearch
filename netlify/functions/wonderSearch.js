const fetch = require('node-fetch')
require('dotenv').config();


exports.handler = async function (event, context) {
    console.log("I am inside the api call functiom")
    try {
        const { searchText } = event.queryStringParameters;
        console.log(searchText)
        try {
            fetch("https://api.openai.com/v1/completions", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + process.env.REACT_APP_SECRET_KEY
                },
                body: JSON.stringify({
                    "model": "text-davinci-002",
                    "prompt": "hello ai",
                    "temperature": 0.7,
                    "max_tokens": 256,
                    "top_p": 1,
                    "frequency_penalty": 0,
                    "presence_penalty": 0
                }),
            }).then((result) => {
                console.log(result);
                return {
                    statusCode: 200,
                    body: JSON.stringify({ result : result })
                };
            }).catch((error) => {
                return {
                    statusCode: 200,
                    body: JSON.stringify({ message: error.message })
                };
            })
            
        }
        catch(error) {
            return {
                statusCode: 200,
                body: JSON.stringify({ message: error.message })
            };
        }
    }
    catch {
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Hello World" })
        };
    }
}