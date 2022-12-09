import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Undernavbar.module.css"

const Undernavbar = function () {
    return (
        <div className={classes.undernavbar}>
            <div className={classes.undernavbarWrapper}>
                <div className={classes.item}>
                    <NavLink to="/" >
                        <div className={classes.title}>Программы для детей</div>
                        <div className={classes.subTitle}>Альтернативная коммуникация</div>
                        <ul className={classes.programsForChild}>
                            <li><NavLink to="/">Альтернативная коммуникация</NavLink></li>
                            <li><NavLink to="/">Песочная терапия</NavLink></li>
                            <li><NavLink to="/">Сенсорнаря интеграция</NavLink></li>
                            <li><NavLink to="/">Двигательная коррекция</NavLink></li>
                            <li><NavLink to="/">Рукоделие</NavLink></li>
                            <li><NavLink to="/">Подготовка к школе и помощь в учебе</NavLink></li>
                        </ul>
                    </NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/" >
                        <div className={classes.title}>Программы для молодежи</div>
                        <div className={classes.subTitle}>Социальная практика</div>
                        <ul className={classes.programsForTeenager}>
                            <li><NavLink to="/">Ткацкая мастерская</NavLink></li>
                            <li><NavLink to="/">Картонажная мастерская</NavLink></li>
                            <li><NavLink to="/">Кулинария</NavLink></li>
                            <li><NavLink to="/">Рукоделие</NavLink></li>
                            <li><NavLink to="/">Социальная практика</NavLink></li>
                            <li><NavLink to="/">Спорт и туризм</NavLink></li>
                        </ul>
                    </NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/" >
                        <div className={classes.title}>Программы для родителей</div>
                        <div className={classes.subTitle}>Родительская школа</div>
                        <ul className={classes.programsForParents}>
                            <li><NavLink to="/">Семейная гостиная</NavLink></li>
                            <li><NavLink to="/">Мастер-классы</NavLink></li>
                            <li><NavLink to="/">Родительская школа</NavLink></li>
                            <li><NavLink to="/">Полезные материалы</NavLink></li>
                            <li><NavLink to="/">Консультации психолога</NavLink></li>
                        </ul>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Undernavbar