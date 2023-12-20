import React from "react";
import { Carousel } from 'antd';
import i1 from '../../../public/i1.png'
import i2 from '../../../public/i2.png'
import i3 from '../../../public/i3.png'


const contentStyle: React.CSSProperties = {
    height: '430px',
    width:'800px',
    color: '#fff',

};


const About = () => {
    return (
        <Carousel autoplay>

                <img alt='2' src={i1} style={contentStyle}/>

                <img alt='2' src={i2} style={contentStyle}/>

                <img alt='2' src={i3} style={contentStyle}/>

        </Carousel>
    );
};

export default About;
