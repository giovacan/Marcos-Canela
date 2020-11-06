// Import useState and useEffect hooks
import { useState, useEffect } from 'react'

/**
 * @function useSlider A custom hook for creating a slider/carousel
 * @param {String} id Id of slider/carousel
 * @param {Number} numberOfSlides Number of slides to show
 */
function useSlider(id, numberOfSlides) {
	// Elements state for storing values od elements
	const [elements, setElements] = useState({
		sliderBox: null
	})

	// Values state for translation effect and changing slides
	const [values, setValues] = useState({
		offset: 0
	})

	// An effect that sets the value of the carousel element into state
	useEffect(() => {
		const sliderBox = document.querySelector(`#${id}`)
		setElements({ sliderBox })
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	// Handles translation/change of slides
	const handleSlideChange = () => {
		if (elements.sliderBox) {
			elements.sliderBox.style.transform = `translateX(${values.offset}%)`
		}
	}

	// An effect that triggers when values state changes
	useEffect(handleSlideChange, [elements.sliderBox, values])

	// Handles the click function of the left controller
	const handleLeftControlClick = () => {
		const { offset } = values
		setValues({
			offset: offset <= 0 ? offset : offset - 100
		})
	}

	// Handles the click function of the right controller
	const handleRightControlClick = () => {
		const { offset } = values
		setValues({
			offset: offset >= numberOfSlides ? offset : offset + 100
		})
	}

	return { handleLeftControlClick, handleRightControlClick }
}

export default useSlider
