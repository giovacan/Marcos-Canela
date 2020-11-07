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
	md: '(min-width: 901px) and (max-width: 1024px)',
	lg: '(min-width: 1025px)'
}

function useResponsiveSlides(children) {
	const matchesExtraSmallScreen = useMatches(breakpoints.xs)
	const matchesSmallScreen = useMatches(breakpoints.sm)
	const matchesMediumScreen = useMatches(breakpoints.md)
	const matchesLargeScreen = useMatches(breakpoints.lg)

	const handleDataSplit = data => {
		const factor = Math.round(data.length / 2)
		const result = []
		let counter = 0
		while (counter < factor) {
			if (counter < 1) {
				result.push([data[counter], data[counter + 1]])
			} else {
				if (data[counter + 2] && counter + 2 !== data.length - 1) {
					result.push([data[counter + 1], data[counter + 2]])
				} else {
					result.push([data[counter + 1]])
				}
			}
			counter += 1
		}
		return result
	}

	let totalChildren = []
	if (Array.isArray(children)) {
		if (!matchesLargeScreen) {
			children.forEach(({ props }) => {
				if (matchesExtraSmallScreen || matchesSmallScreen || matchesMediumScreen) {
					const result = totalChildren.concat(props.children)
					totalChildren = result
				}
			})
			if (matchesMediumScreen) {
				totalChildren = handleDataSplit(totalChildren)
			}
		} else {
			return children
		}
	} else {
		totalChildren = totalChildren.concat(children.props.children)
	}
	const result = totalChildren.map((childList, index) => <Slide key={index}>{childList}</Slide>)
	return result
}

export default useResponsiveSlides
