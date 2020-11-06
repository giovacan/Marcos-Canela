import React from 'react'
import useCarousel from './carousel'

function Slider({ id, children }) {
	const numberOfSlides = children ? 1 : children.length || null
	const carousel = useCarousel(id, numberOfSlides)
	return (
		<div className='slider'>
			<div className='slider-box'>
				<div className='slide'></div>
			</div>
		</div>
	)
}

export default Slider
