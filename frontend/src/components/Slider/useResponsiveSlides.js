import { useState } from 'react'
import Slide from './Slide'

export const useMatches = query => {
	const [isMatch, setIsMatch] = useState(matchMedia(query).matches)
	matchMedia(query).onchange = () => {
		setIsMatch(matchMedia(query).matches)
	}
	return isMatch
}

const breakpoints = {
	xs: '(min-width: 0px) and (max-width: 600px)',
	sm: '(min-width: 601px) and (max-width: 900px)',
	md: '(min-width: 901px) and (max-width: 800px)',
	lg: '(min-width: 801px)'
}

function useResponsiveSlides(children) {
	let totalChildren = []
	if (Array.isArray(children)) {
		children.forEach(({ props }) => {
			totalChildren = totalChildren.concat(props.children)
		})
	} else {
		totalChildren = totalChildren.concat(children.props.children)
	}
	return totalChildren.map((children, index) => <Slide key={index}>{children}</Slide>)
}

export default useResponsiveSlides
