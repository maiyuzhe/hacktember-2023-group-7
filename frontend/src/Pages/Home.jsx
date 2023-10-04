import React from "react";
// import { Button } from "./Button";
import ImageQueue from "../Components/Home/ImageQueue";

const Home = () => {
    return (
        <div className="hero-section">
            <div className="overlap">
                <p className="AI-powered-learning">Ai-powered Learning: Bridging Knowledge And Possibilities</p>
            </div>
            <div className="frame-wrapper">
                <ImageQueue/>
            </div>
        </div>
    );
};

export default Home
