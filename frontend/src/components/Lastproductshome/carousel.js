import { useState, useEffect } from 'react'

function useCarousel(id) {
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
		elements.carousel.style.transform = `translateX(${values.offset})`
	}

	useEffect(handleSlideChange, [elements.carousel, values])

	const handleLeftControlClick = () => {
		setValues({
			offset: values.offset - 100
		})
	}

	const handleRightControlClick = () => {
		setValues({
			offset: values.offset + 100
		})
	}

	return { handleLeftControlClick, handleRightControlClick }
}

export default useCarousel
