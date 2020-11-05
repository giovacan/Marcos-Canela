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
	}, [])

	const handleLeftControlClick = () => {}

	const handleRightControlClick = () => {}

	return { handleLeftControlClick, handleRightControlClick }
}

export default useCarousel
