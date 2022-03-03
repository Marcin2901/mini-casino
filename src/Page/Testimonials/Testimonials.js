import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
    return (
        <section className="testimonials">
            <h2 className="testimonials--title">Testimonials</h2>
            <div className="testimonial active">
                <div className="testimonial--content">
                    <p className="testimonial--text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, assumenda eligendi.
                     Laboriosam dolores blanditiis id deleniti quo a ipsam officiis
                    </p>
                </div>
                <h4 className="testimonial--author">Robin Clark</h4>
                
            </div>
            <div className="testimonial">
                <header className="testimonial--header">
                    <img />
                    <h4 className="testimonial--author">XYZ</h4>
                </header>
                <div className="testimonial--content">
                    <p className="testimonial--text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates placeat atque ipsa,
                        cupiditate molestias laboriosam!
                    </p>
                </div>
                
            </div>
            <div className="testimonial">
                <header className="testimonial--header">
                    <img />
                    <h4 className="testimonial--author">XYZ</h4>
                </header>
                <div className="testimonial--content">
                    <p className="testimonial--text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates placeat atque ipsa,
                        cupiditate molestias laboriosam!
                    </p>
                </div>
                
            </div>

            <div className="author__container">
                <div className="author--img">
                    <img src=""/>
                </div>
            </div>
        </section>
    )
}

export default Testimonials