import React, {useState} from "react";
import "./Testimonials.css";
import author1 from "../../images/testimonial-author1.jpg"
import author2 from "../../images/testimonial-author2.jpg"
import author3 from "../../images/testimonial-author3.jpg"

const Testimonials = () => {

    const [testimonials, setTestimonials] = useState({tes1: true, tes2: false, tes3: false})


    const handleClick = (tesNr) => {
        setTestimonials(prevState => ({
            tes1: false,
            tes2: false,
            tes3: false,
            [tesNr]: true,
        }))
    }

    return (
        <section className="testimonials">
            <h2 className="testimonials--title">Testimonials</h2>
            <div className={testimonials.tes1 ? "testimonial active" : "testimonial"}>
                <div className="testimonial--content">
                    <p className="testimonial--text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, assumenda eligendi.
                     Laboriosam dolores blanditiis id deleniti quo a ipsam officiis
                    </p>
                </div>
                <h4 className="testimonial--author">Robin Clark</h4>
            </div>
            <div className={testimonials.tes2 ? "testimonial active" : "testimonial"}>
            <div className="testimonial--content">
                    <p className="testimonial--text">
                       Gambling? Who said anything about gambling? It's not gambling when you know you're gonna win.
                       Counting cards is a foolproof system.
                    </p>
                </div>
                <h4 className="testimonial--author">Alan Garner</h4>
            </div>
            <div className={testimonials.tes3 ? "testimonial active" : "testimonial"}>
            <div className="testimonial--content">
                    <p className="testimonial--text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, assumenda eligendi.
                     Laboriosam dolores blanditiis id deleniti quo a ipsam officiis
                    </p>
                </div>
                <h4 className="testimonial--author">Jade Philips</h4>
            </div>

            <div className="author__container">
                <div className={testimonials.tes1 ? "author--img active" : "author--img"} onClick={() => handleClick("tes1")}>
                    <img src={author1}/>
                </div>
                <div className={testimonials.tes2 ? "author--img active" : "author--img"} onClick={() => handleClick("tes2")}>
                    <img src={author2}/>
                </div>
                <div className={testimonials.tes3 ? "author--img active" : "author--img"} onClick={() => handleClick("tes3")}>
                    <img src={author3}/>
                </div>
            </div>
        </section>
    )
}

export default Testimonials