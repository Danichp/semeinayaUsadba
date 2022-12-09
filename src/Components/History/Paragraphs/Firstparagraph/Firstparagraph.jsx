import React from "react";
import classes from "./Firstparagraph.module.css"
import FirstParagraph from "./../../../../image/History/FirstParagraph.jpg"

const Firstparagraph = function(){
    return (
        <div className={classes.wrapper}>
  
            <div className={classes.text}>
                <img className={classes.image} src={FirstParagraph} alt="" />
                <h2 className={classes.subTitle}>Сопровождаемое проживание</h2>
                <h1 className={classes.title}>Путь длиной в четверть века </h1>
                <p>Опыт жизнеустройства людей с ментальной инвалидностью в форме сопровождаемого проживания пришел в Россию в начале 90-х годов прошлого века вместе с лечебной педагогикой и социальной терапией. Сейчас этот образ жизни называют стационарозамещающей технологией, а тогда, в трудные 90-е, мечты о достойной жизни людей с умственной отсталостью казались утопией.</p>
                <p>Но были родители, которые сказали: будем делать сами и в 1995 году объединились в общественную организацию «Семейная усадьба». Результатом знакомства с зарубежными технологиями стала авторская «Базовая программа реабилитации детей, подростков и молодежи с отклонениями в умственном развитии», разработанная в 1996 году. Эта бесхитростная программа становления личности человека с нарушениями с детства и во взрослую жизнь оказалась очень эффективной.</p>
            </div>
        </div>
    )
}

export default Firstparagraph