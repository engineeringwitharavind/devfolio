import React from "react";
import Title from "./Title"
import { FaQuoteLeft } from "react-icons/fa";

const Quotes = () => {
    return (
        <section className="section bg-grey">
            <Title title="Favourite Quote" />
            <div className="section-center quote-center fa-quote-left" id="single-quote">
                <p>
                <FaQuoteLeft style={{marginRight: "0.3em", color: "#49aeba"}}/>
                    Your work is going to fill a large part of your life, and
                    the only way to be truly satisfied is to do what you believe
                    is great work. And the only way to do great work is to love
                    what you do. If you haven’t found it yet, keep looking.
                    Don’t settle. As with all matters of the heart, you’ll know
                    when you find it.
                </p>
                <p className="about-steve"><span style={{color: "#49aeba",fontWeight:"600"}}>- Steve Jobs</span></p>
            </div>
        </section>
    )
}

export default Quotes;