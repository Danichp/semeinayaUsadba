import React from "react";
import classes from "./Advantages.module.css"
import advantages1 from "./../../../image/Main/advantages1.jpg"
import advantages2 from "./../../../image/Main/advantages2.jpg"
import advantages3 from "./../../../image/Main/advantages3.jpg"

const Advantages = function () {
    return (
        <div className={classes.advantages}>
            <div className={classes.itemsWrapper}>
                <div className={classes.item}>
                    <div className={classes.imgWrapper}>
                        <img src={advantages1} alt="" />
                    </div>
                    <h1 className={classes.title}>25 лет работы в социальной сфере</h1>
                    <p className={classes.text}>Социальная адаптация, абилитация детей и взрослых людей с нарушениями развития, с синдромом Дауна, с аутизмом</p>
                </div>
                <div className={classes.item}>
                    <div className={classes.imgWrapper}>
                        <img src={advantages2} alt="" />
                    </div>
                    <h1 className={classes.title}>Преемственность методов работы</h1>
                    <p className={classes.text}>Подготовка детей и инвалидов старше 18 лет с нарушениями развития  к максимально возможной самостоятельной жизни с сопровождением</p>
                </div>
                <div className={classes.item}>
                    <div className={classes.imgWrapper}>
                        <img src={advantages3} alt="" />
                    </div>
                    <h1 className={classes.title}>Стационаро-замещающие технологии</h1>
                    <p className={classes.text}>Возможность для граждан старше 18 лет с ментальной инвалидностью жить и трудиться в условиях социальной деревни</p>
                </div>
            </div>
        </div>
    )

}

export default Advantages