import React from 'react'
import useSlider from './useSlider'
import Rightcontroller from './Rightcontrol.js'
import Leftcontroller from './Leftcontrol.js'
import './styles/slider.scss'

function Slider({ id, children }) {
	const numberOfSlides = children ? 1 : children.length || null
	const slider = useSlider(id, numberOfSlides)
	const { handleLeftControlClick, handleRightControlClick } = slider

	return (
		<div className='slider'>
			<div className='slider-box'>
				<div className='control-box previous'>
					<button className='control' onClick={handleLeftControlClick}>
						<Leftcontroller id='previous' />
					</button>
				</div>
				<div id={id} className='slides' style={{ transitionDelay: '0.3s' }}>
					{children}
				</div>
				<div className='control-box next'>
					<button className='control' onClick={handleRightControlClick}>
						<Rightcontroller id='next' />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Slider
