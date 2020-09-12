import React, { Component } from "react";
import Slider from "react-slick";


export default class SliderDiv extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            speed: 500
        };
        return (
            <div>
                <h2>Center Mode</h2>
                <Slider {...settings} style={{ height: "200px" }}>
                    <div style={{ backgroundColor: "blue" }}>
                        <h3>1</h3>
                    </div>
                    <div style={{ backgroundColor: "blue" }}>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>

                </Slider>
            </div >
        );
    }
}