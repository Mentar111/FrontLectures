import React from "react";
import Carousel from "react-bootstrap/Carousel";
import galeryImg1 from "../Assets/galery-img1.webp";
import galeryImg2 from "../Assets/galery-img2.jpg";
import galeryImg3 from "../Assets/galery-img3.jpg";

export default function Galery() {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={galeryImg1} />

                    <Carousel.Caption>
                        <h3>Хотите грамотно верстать? Мы вас научим!</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={galeryImg2} />

                    <Carousel.Caption>
                        <h3>Хотите изучить библиотеку React? Мы вас научим!</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={galeryImg3} />

                    <Carousel.Caption>
                        <h3>
                            Хотите изучить framework Angular? Мы вас научим!
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}
