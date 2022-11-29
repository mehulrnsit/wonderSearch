import React, { useDebugValue } from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import svg from "./svg.svg"
const LandingPage = () => {
    let navigate = useNavigate();
    const redirect = () => {
        navigate("/wonderSearch/home");
    }
    return (
        <>
            <div className="container-fluid body">
                <div className="row">
                    <div className="col-md-10 col-sm-10 bold-text">
                        <h1 className="">WonderSearch</h1>
                    </div>
                    <div className="col-md-2 col-sm-2 sub-heading">
                        <Link to={"/home"}><h1>Get Started</h1></Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <h1 className="tag-line">
                            Get Answer of Everything using the power of AI.
                        </h1>
                        <button className="get-started-button" onClick={() => redirect()}>
                            Get Started
                        </button>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <img src={svg} className="landing-page-image"></img>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingPage;