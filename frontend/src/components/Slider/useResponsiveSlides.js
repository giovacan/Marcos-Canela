import Slide from './Slide'
import useMediaQuery, { breakpoints } from './useMediaQuery'

/**
 * A hook that makes the slider component responsive
 * @param {Array|Object} children Slider children from props.chlildren
 * @returns {Array}
 */
function useResponsiveSlides(children) {
	const matchesExtraSmallScreen = useMediaQuery(breakpoints.xs)
	const matchesSmallScreen = useMediaQuery(breakpoints.sm)
	const matchesMediumScreen = useMediaQuery(breakpoints.md)
	const matchesLargeScreen = useMediaQuery(breakpoints.lg)

	/**
	 * Splits an array into an array of arrays
	 * @param {Array} data
	 * @returns {Array}
	 */
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
