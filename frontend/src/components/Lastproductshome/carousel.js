import { useState } from 'react'

function useCarousel() {
	const [elements, setElements] = useState({
		leftControl: null,
		rightControl: null,
		carousel: null
	})

	const [values, setValues] = useState({
		offset: 0
	})
}

export default useCarousel
