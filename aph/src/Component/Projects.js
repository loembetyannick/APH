import React from 'react'
import ImageSlider from '../features/ImageSlider';
import { SliderData } from '../features/SliderData';

const Projects = () => {
  return (
        <ImageSlider slides={SliderData}/>
  )
}

export default Projects