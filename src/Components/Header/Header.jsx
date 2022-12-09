import React from "react";
import classes from "./Header.module.css"
import Navbar from "./Navbar/Navbar";
import Overnavbar from "./Overnavbar/Overnavbar";
import HeaderImg from "./../../image/Header.jpg"
import Undernavbar from "./Undernavbar/Undernavbar";


const Header = function () {
    return (
        <div className={classes.header}>
            <div className={classes.shadow}>
                <div className={classes.wrapper}>
                    <Overnavbar />
                    <Navbar />
                    <Undernavbar />
                </div>
            </div>
            <div className={classes.ibg}>
                <img className={classes.headerImg} src={HeaderImg} alt="" />
            </div>
        </div>
    )
}

export default Header