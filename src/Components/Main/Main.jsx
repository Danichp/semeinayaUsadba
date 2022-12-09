import React from "react";
import classes from "./Main.module.css"
import Whoweare from "./Whoweare/Whoweare"
import School from "./School/School";
import Village from "./Village/Village";
import Advantages from "./Advantages/Advantages";
import Agitation from "./Agitation/Agitation";


const Main = function(){
    return(
        <div className={classes.main}>
            <Whoweare/>
            <School />
            <Village />
            <Advantages />
            <div className={classes.video}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/LCti_Ais2RA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <Agitation />
            <button>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt sequi quo quas. Minima illum laboriosam sapiente nostrum doloremque voluptate non possimus aliquam, quam, expedita necessitatibus tenetur in consectetur. Vel, rem?</button>
        </div>

    )

}


export default Main