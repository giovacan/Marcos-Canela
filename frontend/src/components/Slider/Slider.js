import React from 'react'
import useSlider from './useSlider'
import useResponsiveSlides from './useResponsiveSlides'
import Rightcontroller from './Rightcontrol.js'
import Leftcontroller from './Leftcontrol.js'
import './styles/slider.scss'

function Slider({ id, children }) {
	const renderSlides = useResponsiveSlides(children)
	const numberOfSlides = renderSlides.length
	const slider = useSlider(id, numberOfSlides)
	const { handleLeftControlClick, handleRightControlClick } = slider
	return (
		<div className='slider'>
			<div className='slider-box'>
				<div className='control-box previous'>
					<button className='control' onMouseDown={handleLeftControlClick}>
						<Leftcontroller id='previous' />
					</button>
				</div>
				<div id={id} className='slides' style={{ transitionDuration: '0.3s' }}>
					{renderSlides}
				</div>
				<div className='control-box next'>
					<button className='control' onMouseDown={handleRightControlClick}>
						<Rightcontroller id='next' />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Slider
