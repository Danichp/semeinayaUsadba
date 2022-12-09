import React from "react";
import classes from "./../Header.module.css"
import mapMarker from "./../../../image/map marker48.png"

const Overnavbar = function () {
    return (
        <div className={classes.overnavbar}>
            <div className={classes.overnavbarWrapper}>
                <div className={classes.overnavbarAdress}>
                    <img className={classes.mapMarker} src={mapMarker} />
                    <div>Иркутск, ул. Чайковского, д. 4</div>
                </div>
                <div className={classes.overnavbarContacts}>
                    <a href="tel:83952380462">8 (3952) 38-04-62</a>
                    <a href="tel:89642109631">8 (964) 210-96-31</a>
                    <a href="mailto:semeinayausadba@mail.ru">semeinayausadba@mail.ru</a>
                </div>
            </div>
        </div>

    )
}

export default Overnavbar;