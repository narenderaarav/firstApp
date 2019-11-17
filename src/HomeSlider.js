import React from 'react';
import Carousel from 'nuka-carousel';

export default class extends React.Component {
  render() {
    return (
      <div className="sliderDiv">
      <Carousel>
        <img src="banner-1.jpg" />
        <img src="banner-2.jpg" />
      </Carousel>
      </div>
    );
  }
}