import React from "react";
import classes from "./History.module.css"
import Firstparagraph from "./Paragraphs/Firstparagraph/Firstparagraph";
import Secondparagraph from "./Paragraphs/Secondparagraph/Secondparagraph";
import Trirdparagraph from "./Paragraphs/Trirdparagraph/Trirdparagraph";

const History = function () {
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <Firstparagraph />
                <Secondparagraph />
                <Trirdparagraph />
            </div>
        </div>
    );
}

export default History