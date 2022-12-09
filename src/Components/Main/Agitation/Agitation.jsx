import React from "react";
import classes from "./Agitation.module.css"
import image from "./../../../image/Main/agitation.jpg"

const Agitation = function(){
    return(
        <div className={classes.background}>
            <div className={classes.agitation}>
                <div className={classes.wrapper}>
                    <div className={classes.item}>
                        <h1 className={classes.title}>ПРИСОЕДИНЯЙТЕСЬ!</h1>
                        <p className={classes.text}>- если у Вас в семье или у Ваших близких растет ребенок с нарушением развития</p>
                    </div>
                    <div className={classes.item}>
                        <h1 className={classes.title}>ПРИХОДИТЕ К НАМ!</h1>
                        <p className={classes.text}>- если Вы хотите попробовать себя в качестве сотрудника или волонтера в работе с детьми и взрослыми с ментальными нарушениями</p>
                    </div>
                    <div className={classes.item}>
                        <h1 className={classes.title}>ПОМОГИТЕ НАМ!</h1>
                        <p className={classes.text}>- если у Вас есть возможность и желание оказать любую поддержку</p>
                    </div>
                    <div className={classes.item}>
                        <h1 className={classes.title}>БУДЕМ ПАРТНЕРАМИ!</h1>
                        <p className={classes.text}>- если Вы видите, что наши цели совпадают с Вашими ценностями</p>
                    </div>
                    <div className={classes.item}>
                        <h1 className={classes.title}>БУДЕМ ДРУЗЬЯМИ</h1>
                        <p className={classes.text}>- если Вы готовы быть с нами и в трудные, и в радостные дни</p>
                    </div>
                    <div className={classes.item}>
                        <h1 className={classes.title}>БЛАГОДАРИМ!</h1>
                        <p className={classes.text}>- всех, кто откликнулся на наши просьбы и предложения</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Agitation