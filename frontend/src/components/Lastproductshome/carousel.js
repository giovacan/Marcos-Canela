import { useState, useEffect } from 'react'

function useCarousel(id) {
	const [elements, setElements] = useState({
		leftControl: null,
		rightControl: null,
		carousel: null
	})

	const [values, setValues] = useState({
		offset: 0
	})

	useEffect(() => {
		const leftControl = document.querySelector(`#${id}-left-control`)
		const rightControl = document.querySelector(`#${id}-right-control`)
		const carousel = document.querySelector(`#${id}`)
		setElements({ leftControl, rightControl, carousel })
	}, [])

	const handleLeftControlClick = () => {}

	const handleRightControlClick = () => {}

	return { handleLeftControlClick, handleRightControlClick }
}

export default useCarousel
