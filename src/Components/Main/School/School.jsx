import React from "react";
import classes from "./School.module.css"
import schoolPhoto1 from "./../../../image/Main/schoolPhoto1.jpg"
import schoolPhoto2 from "./../../../image/Main/schoolPhoto2.jpg"
import schoolPhoto3 from "./../../../image/Main/schoolPhoto3.jpg"



const School = function () {
    return (
        <div className={classes.wrapper}>
            <div className={classes.school}>
                <div className={classes.images}>
                    <img className={classes.photo1} src={schoolPhoto1} alt="" />
                    <img className={classes.photo2} src={schoolPhoto2} alt="" />
                    <img className={classes.photo3} src={schoolPhoto3} alt="" />
                </div>
                <div className={classes.textWrapper}>
                    <h1 className={classes.title}>ЦЕНТР ДНЕВНОГО ПРЕБЫВАНИЯ – “ШКОЛА”</h1>
                    <p className={classes.about}>Центр дневного пребывания стал школой для детей-инвалидов в возрасте до 18 лет, которые никогда и нигде не учились и не имели возможности посещать общеобразовательные учреждения.</p>
                    <p className={classes.about}>Дети сами назвали Центр школой, потому что они приходят сюда учиться. Здесь они получают представление об окружающем мире, познают себя, учатся навыкам общения и самообслуживания, трудятся и отдыхают, проводят праздники.</p>
                    <p className={classes.about}>Дети работают с деревом, воском, шерстью, глиной, изучают основы народных ремесел, рисуют, поют. Главное назначение школы –подготовить детей к максимально возможной самостоятельной жизни.</p>
                </div>
            </div>
        </div>
    )

}


export default School