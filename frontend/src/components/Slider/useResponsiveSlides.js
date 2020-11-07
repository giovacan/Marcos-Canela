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
	const matchesSmallScreen = useMatches(breakpoints.sm)
	let totalChildren = []
	if (Array.isArray(children)) {
		children.forEach(({ props }) => {
			if (matchesSmallScreen) {
				totalChildren = totalChildren.concat(props.children)
			}
		})
	} else {
		totalChildren = totalChildren.concat(children.props.children)
	}
	const result = totalChildren.map((childList, index) => <Slide key={index}>{childList}</Slide>)
	return result
}

export default useResponsiveSlides
