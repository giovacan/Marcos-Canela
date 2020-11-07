import React, { Component } from 'react'
import { FaChevronRight } from 'react-icons/fa'

export default class Rightcontroller extends Component {
	constructor(props) {
		super(props)
		this.state = {
			color: '#2f3640',
			size: '6.5rem'
		}
	}
	shouldComponentUpdate() {
		return true
	}
	changeColor = () => {
		this.setState({ color: 'lightslategrey' })
	}
	baseColor = () => {
		this.setState({ color: '#2f3640' })
	}
	changeSize = () => {
		this.setState({ size: '6rem' })
	}
	baseSize = () => {
		this.setState({ size: '6.5rem' })
	}
	render() {
		return (
			<FaChevronRight
				size={this.state.size}
				color={this.state.color}
				onMouseOver={this.changeColor}
				onMouseOut={this.baseColor}
				onMouseUp={this.baseSize}
				onMouseDown={this.changeSize}
			/>
		)
	}
}
