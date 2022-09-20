import React from "react";
import yannick from ".././Yannick.jpg"

const FrontPage = () => {
    return(
        <div className="image-and-p-container">
            <div className="nav">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Work</a></li>
                    <li><a href="">About</a></li>
                </ul>
            </div>
            <img src={yannick} alt="Yannick" width="15%" />
            <blockquote>
            <h1 id="front-h1">Hello!</h1>
            </blockquote>
            <blockquote>
            <p id="front-p">My name is Yannick Wessidjam.<br /> I am full stack web developer working<br /> primarily in JavaScript, Python, HTML <br />CSS, Node.js, Redis, React, Flask<br /> FlaskAdmin, curently learning more Go, AWS.</p>
            </blockquote>
        </div>
    )
}

export default FrontPage;