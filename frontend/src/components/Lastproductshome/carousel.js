// Import useState and useEffect hooks
import { useState, useEffect } from 'react'

/**
 * @function useCarousel A custom hook for carousel logic
 * @param {String} id Id of carousel
 * @param {Number} numberOfSlides Number of slides to show
 */
function useCarousel(id, numberOfSlides) {
	const [elements, setElements] = useState({
		carousel: null
	})

	const [values, setValues] = useState({
		offset: 0
	})

	useEffect(() => {
		const carousel = document.querySelector(`#${id}`)
		setElements({ carousel })
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const handleSlideChange = () => {
		elements.carousel.style.transform = `translateX(${values.offset}%)`
	}

	useEffect(handleSlideChange, [elements.carousel, values])

	const handleLeftControlClick = () => {
		const { offset } = values
		setValues({
			offset: offset <= 0 ? offset : offset - 100
		})
	}

	const handleRightControlClick = () => {
		const { offset } = values
		setValues({
			offset: offset >= numberOfSlides ? offset : offset + 100
		})
	}

	return { handleLeftControlClick, handleRightControlClick }
}

export default useCarousel
