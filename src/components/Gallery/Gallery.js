/* @flow */
import React from 'react'
import Slider from 'react-slick'

type Props = {

}

export const MainMenu = (props: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  }
  return (
    <Slider {...settings}>
      <div><img src="http://lorempixel.com/300/300/technics" alt="Slide 1" /></div>
      <div><img src="http://lorempixel.com/300/300/animals" alt="Slide 2" /></div>
      <div><img src="http://lorempixel.com/300/300/sports" alt="Slide 3" /></div>
      <div><img src="http://lorempixel.com/300/300/food" alt="Slide 4" /></div>
      <div><img src="http://lorempixel.com/300/300/fashion" alt="Slide 5" /></div>
      <div><img src="http://lorempixel.com/300/300/business" alt="Slide 6" /></div>
    </Slider>
  )
}

export default MainMenu
