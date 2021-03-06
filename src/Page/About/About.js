import React from "react";
import "./About.css";
import aboutImg from "../../images/about.jpg";
import aboutTreasure from "../../images/about-treasure.png";
import { useNavigate } from "react-router";

const About = () => {

    const navigate = useNavigate();

    return (
        <section className="about">
            <div className="about--images">
                <img className="about--img" src={aboutImg} alt={"example"}/>
                <img className="about--treasure" src={aboutTreasure} alt={"example"}/>
            </div>
            <div className="about--content">
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet.</p>
                <h2>Software</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae enim,
                   hic obcaecati maxime adipisci nesciunt.
                </p>
                <h2>Security</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae enim,
                   hic obcaecati maxime adipisci nesciunt.
                </p>
                <button className="primary--btn primary--btn-m" onClick={() => navigate("/about")}>Read More</button>
            </div>
        </section>
    )
}

export default About;