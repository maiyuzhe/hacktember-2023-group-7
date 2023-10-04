import React from "react";
// import { Button } from "./Button";
import Frame from "../Components/Home/Togglex";

const Home = () => {
    return (
        <div className="hero-section">
            <div className="overlap">
                {/* <Button className="button-instance" mode="default" type="default" /> */}
                <p className="AI-powered-learning">Ai-powered Learning: Bridging Knowledge And Possibilities</p>
            </div>
            <div className="frame-wrapper">
                <Frame
                    className="frame-1"
                    darkLightClassName="frame-instance"
                    ellipseClassName="frame-1-instance"
                    property1="default"
                />
            </div>
        </div>
    );
};

export default Home
