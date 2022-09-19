import React from "react";
import yannick from ".././Yannick.jpg"

const About = () => {
    return(
        <div className="About">
            <img src={yannick} alt="Yannick" width="15%" />
            <p>My name is Yannick Wessidjam, I am full stack web developer working primarily in JavaScript, Python, HTML, CSS, Node.js, Redis, React, Flask, FlaskAdmin, curently learning more Go, AWS. Recently, I worked on adding features to a redis cli tool and unit testing a content management system. Also, I built a custom geolocation application tool that will be used by over five million users. It was very interesting to work on a project of such large scale</p>
        </div>
    )
}

export default About;