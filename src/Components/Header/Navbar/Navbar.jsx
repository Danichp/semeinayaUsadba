import React from "react";
import classes from "./Navbar.module.css"
import logotype from "./../../../image/logo.jpg"
import { NavLink } from "react-router-dom";

function currentPage() {
    console.log(window.location.href)
}

const Navbar = function () {
    return (
        <div className={classes.navbar}>
            <div className={classes.navbarWrapper}>
                <NavLink to="/" className={classes.logo}>
                    <img src={logotype} alt="" />
                    <div className={classes.titleLogo}>Семейная усадьба</div>
                </NavLink>
                <div className={classes.navigation}>
                    <nav>
                        <ul className={classes.menu}>
                            <li className={classes.menuItem}>
                                <NavLink className={classes.home} to="/">
                                    <svg width="18" height="18" viewBox="0 0 20 22" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.568 21.0448H12.579C12.133 21.0442 11.7054 20.8551 11.3899 20.5187C11.0744 20.1824 10.8968 19.7264 10.896 19.2506V13.2965H8.35498V19.2506C8.35419 19.7264 8.17656 20.1824 7.86108 20.5187C7.5456 20.8551 7.11802 21.0442 6.672 21.0448H1.68298C1.23696 21.0442 0.809377 20.8551 0.493896 20.5187C0.178416 20.1824 0.000793795 19.7264 0 19.2506V9.75729C0.000216176 9.50523 0.0502437 9.25613 0.146729 9.02604C0.243213 8.79594 0.383929 8.59006 0.559937 8.42187L8.50098 0.798434C8.80907 0.501313 9.20965 0.336716 9.625 0.336716C10.0403 0.336716 10.4409 0.501313 10.749 0.798434L18.694 8.42395C18.8689 8.59237 19.0088 8.79807 19.1046 9.02773C19.2004 9.2574 19.2499 9.50593 19.25 9.75729V19.2506C19.2495 19.7263 19.072 20.1824 18.7567 20.5187C18.4414 20.8551 18.0139 21.0442 17.568 21.0448V21.0448ZM13.197 18.5915H16.95V10.0475L9.625 3.0181L2.30103 10.0486V18.5915H6.05396V12.6374C6.05475 12.1618 6.23222 11.7059 6.54749 11.3697C6.86275 11.0334 7.29011 10.8441 7.73596 10.8432H11.515C11.9609 10.8441 12.3882 11.0334 12.7035 11.3697C13.0188 11.7059 13.1962 12.1618 13.197 12.6374V18.5915Z" />
                                    </svg>
                                </NavLink>
                            </li>
                            <li className={classes.menuItem}>
                                <NavLink to="/history">О нас</NavLink>
                                <ul>
                                    <li><NavLink to="/">Документы</NavLink></li>
                                    <li><NavLink to="/">Команда</NavLink></li>
                                    <li><NavLink to="/">Отчеты</NavLink></li>
                                    <li><NavLink to="/">Галерея</NavLink></li>
                                    <li><NavLink to="/">Награды</NavLink></li>
                                </ul>
                            </li>
                            <li className={classes.menuItem}>
                                <NavLink to="/">Наши проекты</NavLink>
                            </li>
                            <li className={classes.menuItem}>
                                <NavLink to="/">Новости</NavLink>
                            </li>
                            <li className={classes.menuItem}>
                                <NavLink to="/">Контакты</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar