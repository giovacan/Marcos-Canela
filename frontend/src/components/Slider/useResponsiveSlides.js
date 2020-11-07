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

	const handleChildrenSplit = data => {
		if (data.length % 2 === 0) {
			if (data.length === 2) {
				return data
			} else {
				const result = data.map((elem, index) => {
					const temp = []
					if (temp.length !== 2) {
						temp.push(elem)
					}
					return temp
				})
				console.log({ result })
				return result
			}
		} else {
			return data
		}
	}

	let totalChildren = []
	if (Array.isArray(children)) {
		if (!matchesLargeScreen) {
			children.forEach(({ props }) => {
				if (matchesExtraSmallScreen || matchesSmallScreen) {
					totalChildren = totalChildren.concat(props.children)
				} else if (matchesMediumScreen) {
					totalChildren = handleChildrenSplit(props.children)
				}
			})
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
