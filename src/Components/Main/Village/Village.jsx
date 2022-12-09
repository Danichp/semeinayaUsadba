import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./Village.module.css"
import Carousel from 'react-bootstrap/Carousel';
import slider1 from "./../../../image/Main/slider1.jpg"
import slider2 from "./../../../image/Main/slider2.jpg"
import slider3 from "./../../../image/Main/slider3.jpg"
import slider4 from "./../../../image/Main/slider4.jpg"



const Village = function () {
  return (
    <div className={classes.village}>
      <div className={classes.wrapper}>
        <div className={classes.textWrapper}>
          <h1 className={classes.title}>СОЦИАЛЬНАЯ ДЕРЕВНЯ “ЗАРЕЧНАЯ”</h1>
          <p className={classes.text}>В 1999 году первыми жителями социальной деревни стали выпускники школы “Семейной усадьбы”. Они назвали социальную деревню “Заречной” и считают ее своим домом.</p>
          <p className={classes.text}>Социальная деревня это не просто место жизни, это - образ жизни. Здесь вместе, одной семьей живут люди, нуждающиеся в заботе и опеке, и те, кто может обеспечить им сопровождаемое проживание.</p>
          <p className={classes.text}>В деревне есть жилой дом, огород с теплицей, есть живность, работают ткацкая и столярная мастерские. Ребята занимаются спортом, выступают с концертами, интересно проводят праздники.</p>
        </div>
        <div className={classes.slider}>
          <Carousel interval="3000" className={classes.carousel}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slider1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slider2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slider3}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slider4}
                alt="Fourth slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>

  )

}


export default Village