const fetch = require('node-fetch')
const { Headers } = fetch;
require('dotenv').config();


exports.handler = async function (event, context) {
    // return {
    //     statusCode: 200,
    //     body: JSON.stringify({message: "Hello World"})
    // }
    console.log("I am inside the api call functiom")
    try {
        const { searchText } = event.queryStringParameters;
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + process.env.REACT_APP_SECRET_KEY);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "model": "text-davinci-002",
            "prompt": searchText,
            "temperature": 0.7,
            "max_tokens": 256,
            "top_p": 1,
            "frequency_penalty": 0,
            "presence_penalty": 0
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const response = await fetch("https://api.openai.com/v1/completions", requestOptions);
        let responseText = await response.text();
        console.log("RESPONSE API: ", responseText)
        return {
            statusCode: response.status,
            body: responseText
        }
        

    }
    catch (error) {
        console.log("Error")
        return {
            statusCode: 200,
            body: error
        };
    }
}