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
      <div><img src='http://lorempixel.com/300/300/technics' /></div>
      <div><img src='http://lorempixel.com/300/300/animals' /></div>
      <div><img src='http://lorempixel.com/300/300/sports' /></div>
      <div><img src='http://lorempixel.com/300/300/food' /></div>
      <div><img src='http://lorempixel.com/300/300/fashion' /></div>
      <div><img src='http://lorempixel.com/300/300/business' /></div>
    </Slider>
  )
}

export default MainMenu
