import React from "react";
import classes from "./ScrollToTop.module.css"
import { useState, useEffect } from "react";
import image from "./../../image/scrollButton.svg"

const ScrollToTop = function () {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 400) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    // This function will scroll the window to the top 
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
        });
    };
    return (
        <div>
            {showButton && (
                <button onClick={scrollToTop} className={classes.backToTop}>
                    <img src={image} alt="" />
                </button>
            )}
        </div>
    )
}

export default ScrollToTop