import React from "react";
import classes from "./Footer.module.css"
import facebook from "./../../image/Footer/social/facebook.png"
import odnoklassniki from "./../../image/Footer/social/odnoklassniki.png"
import vkontakte from "./../../image/Footer/social/vkontakte.png"
import { NavLink } from "react-router-dom";
import logotype from "./../../image/logo.jpg"
import print from "./../../image/Footer/print.png"
import pictSergey from "./../../image/Footer/pictSergey.jpg"


const Footer = function () {
    return (
        <footer classNameName={classes.footer}>
            <div className={classes.footerTop}>
                <div className={classes.footerMain}>
                    <div className={classes.footerColumn}>
                        <NavLink to="/" className={classes.footerLabelLogo}>
                            <img src={logotype} alt="" />
                            <div className={classes.titleLogo}>Семейная усадьба</div>
                        </NavLink>
                        <div className={classes.subTitle}>Иркутская областная общественная организация инвалидов</div>
                        <div className={classes.contactsFooter}>
                            <a href="tel:83952380462" className={classes.contactsFooterItemPhone}>8 (3952) 38-04-62</a>
                            <a href="tel:89642109631" className={classes.contactsFooterItemPhone}>8 (964) 210-96-31</a>
                            <a href="" className={classes.contactsFooterItemMap}>Иркутск, ул. Чайковского, д. 4</a>
                            <a href="mailto:semeinayausadba@mail.ru" className={classes.contactsFooterItemEmail}>semeinayausadba@mail.ru</a>
                        </div>
                    </div>
                    <div className={classes.footerColumn}>
                        <div className={classes.footerLabel}>Полезные ссылки</div>
                        <nav>
                            <ul>
                                <li className={classes.menuFooterItem}><NavLink to="/" className={classes.menuFooterLink}>🢒 Об организации</NavLink></li>
                                <li className={classes.menuFooterItem}><NavLink to="/" className={classes.menuFooterLink}>🢒 Документы</NavLink></li>
                                <li className={classes.menuFooterItem}><NavLink to="/"className={classes.menuFooterLink}>🢒 Награды</NavLink></li>
                                <li className={classes.menuFooterItem}><NavLink to="/" className={classes.menuFooterLink}>🢒 Наши проекты</NavLink></li>
                                <li className={classes.menuFooterItem}><NavLink to="/" className={classes.menuFooterLink}>🢒 Галерея</NavLink></li>
                                <li className={classes.menuFooterItem}><NavLink to="/" className={classes.menuFooterLink}>🢒 Контакты</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                    <div className={classes.footerColumn}>
                        <div className={classes.printWrapper}>
                        <img className={classes.print} src={print} alt="" />
                            <div className={classes.sergeyWrapper}>
                                <p className={classes.slogan}>Расширяем возможности, повышаем способности!</p>
                                <img className={classes.pictSergey} src={pictSergey} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.footerBottom}>
                <div className={classes.footerContainer}>
                    <div className={classes.footerCopy}>© ИОООИ "Семейная усадьба" Центр дневной занятости и развития. 2022 г. Все права защищены.</div>
                    <div className={classes.social}>
                        <a href="" className={classes.socialItem}>
                            <img src={facebook} alt="Facebook"></img>
                        </a>
                        <a href="https://vk.com/semeinaya_usadba" target="_blank" className={classes.socialItem}>
                            <img src={vkontakte} alt="Вконтакте"></img>
                        </a>
                        <a href="" className={classes.socialItem}>
                            <img src={odnoklassniki} alt="Одноклассники"></img>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer