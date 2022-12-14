import React from "react";
import classes from "./Trirdparagraph.module.css"

const Trirdparagraph = function () {
    return (
        <div className={classes.wrapper}>
            <div className={classes.text}>
            <p>У «Семейной усадьбы» нет и не было специальной тренировочной квартиры. Подготовку к максимально возможной самостоятельной жизни дети и молодые инвалиды проходили в центре дневного пребывания в Иркутске на ул. Чайковского, который они сами называли школой. Этот центр дневной занятости и абилитации работает и сейчас. Первые выпускники нашей школы стали первыми жителями социальной деревни. В 2019 году деревня Заречная отметила свое 20-летие.</p>
                <p>Взрослеют и становятся на ноги не только дети. ИОООИ «Семейная усадьба» на 4 года старше своего детища – социальной деревни «Заречной». Все годы существования деревни родительская организация сопровождает ее, помогает расти и развиваться.</p>
                <p>А деревня становится всё более самостоятельной за счет развития подсобного хозяйства и помощи друзей, за счет разработки новых технологий и авторских методик, за счет возрастания опыта работы с людьми с ограниченными возможностями.</p>
            </div>
            <iframe className={classes.video} width="800" height="400" src="https://www.youtube.com/embed/LCti_Ais2RA" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default Trirdparagraph