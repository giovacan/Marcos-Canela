// Import useState and useEffect hooks
import { useState, useEffect } from 'react'

/**
 * @function useCarousel A custom hook for carousel logic
 * @param {String} id Id of carousel
 * @param {Number} numberOfSlides Number of slides to show
 */
function useCarousel(id, numberOfSlides) {
	// Elements state for storing values od elements
	const [elements, setElements] = useState({
		carousel: null
	})

	// Values state for translation effect and changing slides
	const [values, setValues] = useState({
		offset: 0
	})

	// An effect that sets the value of the carousel element into state
	useEffect(() => {
		const carousel = document.querySelector(`#${id}`)
		setElements({ carousel })
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	// Handles translation/change of slides
	const handleSlideChange = () => {
		elements.carousel.style.transform = `translateX(${values.offset}%)`
	}

	// An effect that triggers when values state changes
	useEffect(handleSlideChange, [elements.carousel, values])

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

export default useCarousel
