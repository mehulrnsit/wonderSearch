import React, { useState } from "react";
import "./Home.css";
import axios from "axios";
import { json } from "react-router-dom";

const Home = () => {
    const [searchText, setSearchText] = useState("");
    const [resultText, setResultText] = useState("");
    const [loading, setLoading] = useState(false);

    const getResults =  async () => {
        setLoading(true);
        const url = `/.netlify/functions/wonderSearch?searchText=${searchText}`;
        fetch(url).then(response => response.text())
        .then((result) => {
            // console.log(JSON.stringify(result))
            const data = JSON.parse(result);
            // console.log(data.choices[0].text)
            setResultText(data.choices[0].text)
            // console.log(typeof(JSON.parse(result)))
            setLoading(false)
        }).catch((error) => {
            setResultText(error.message);
            setLoading(false);
        })
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
                    <div className="col-md-6 col-sm-6 search-box">
                        <p>Ask wonderSearch any question that comes in your mind, You can even ask wonderaSearch to write an email, code for you.</p>
                        <textarea placeholder="Ask wonderSearch Anything....." onChange={(e) => {
                            setSearchText(e.target.value)
                            setResultText("");
                            }}></textarea>
                        <button onClick={() => getResults()}>Get Result</button>
                    </div>
                    <div className="col-md-6 col-sm-6 result-box">
                        <p>Your result will show up here.</p>
                        <div className="text-area">
                            {searchText.length !== 0 ? <p>{resultText}</p> : <></>}
                        </div>
                    </div>
                </div>
            </div>
            {loading === true ? <>

                <div className="center">
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                </div>
            </> : <></>}

        </>
    );
}

export default Home;
