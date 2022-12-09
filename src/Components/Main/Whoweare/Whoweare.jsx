import React from "react";
import classes from "./Whoweare.module.css"
import school from "./../../../image/Main/school.jpg"
import village from "./../../../image/Main/village.jpg"


const Whoweare = function () {
    return (
        <div>
            <div className={classes.whoAreWe}>
                <div className={classes.wrapper}>
                    <h1 className={classes.title}>ИОООИ “СЕМЕЙНАЯ УСАДЬБА”</h1>
                    <p className={classes.text}>“СЕМЕЙНАЯ УСАДЬБА” - это общественная организация, цель которой - создание условий для социализации детей-инвалидов и инвалидов с детства с ограниченными умственными возможностями, формирование у них жизненной компетенции.</p>
                    <p className={classes.subText}>“СЕМЕЙНАЯ УСАДЬБА” развивает два взаимосвязанных проекта:</p>
                    <div className={classes.childs}>
                            <div className={classes.child}>
                                <img src={school} alt="" />
                                <p><span>ШКОЛА</span> в Иркутске работает как Центр дневного пребывания детей с нарушениями умственного развития;</p>
                            </div>
                            <div className={classes.child}>
                                <img src={village} alt="" />
                                <p><span>СОЦИАЛЬНАЯ ДЕРЕВНЯ “ЗАРЕЧНАЯ”</span> в поселке Усть-Балей Иркутского района - для молодежи и взрослых людей, нуждающихся в постоянном сопровождении.</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>

    )

}


export default Whoweare