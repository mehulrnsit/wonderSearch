import React, { useState } from "react";
import "./Home.css";
import axios from "axios";

const Home = () => {
    const [searchText, setSearchText] = useState("");
    const [resultText, setResultText] = useState("");
    const [loading, setLoading] = useState(false);
    const getResults = () => {

        setLoading(true);
        var data = JSON.stringify({
            "model": "text-davinci-002",
            "prompt": searchText,
            "temperature": 0.7,
            "max_tokens": 256,
            "top_p": 1,
            "frequency_penalty": 0,
            "presence_penalty": 0
        });

        var config = {
            method: 'post',
            url: 'https://api.openai.com/v1/completions',
            headers: {
                'Authorization': 'Bearer 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' ,
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                const responseData = response.data;
                const resultText = responseData.choices[0].text;
                setResultText(resultText);
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
                setLoading(false);
                alert(error);
            });

    }
    return (
        <>
            <div className="container-fluid body">
                <div className="row">
                    <div className="col-md-12 col-sm-12 bold-text">
                        <h1 className="">WonderSearch</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 search-box">
                        <p>Ask wonderSearch any question that comes in your mind, You can even ask wonderaSearch to write an email, code for you.</p>
                        <textarea placeholder="Ask wonderSearch Anything....." onChange={(e) => setSearchText(e.target.value)}></textarea>
                        <button onClick={() => getResults()}>Get Result</button>
                    </div>
                    <div className="col-md-6 result-box">
                        <p>Your result will show up here.</p>
                        <p className="text-area">
                            {searchText.length !== 0 ? <p>{resultText}</p> : <></>}
                        </p>
                    </div>
                </div>
            </div>
            {loading === true ? <>

                <div class="center">
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>
                </div>
            </> : <></>}

        </>
    );
}

export default Home;