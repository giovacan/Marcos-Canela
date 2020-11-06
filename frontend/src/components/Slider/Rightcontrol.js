import React, { Component } from 'react'
import { FaChevronRight } from 'react-icons/fa'

export default class Rightcontroller extends Component {
	constructor(props) {
		super(props)
		this.state = {
			color: '#2f3640',
			size: '8rem'
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
		this.setState({ size: '7.8em' })
	}
	baseSize = () => {
		this.setState({ size: '8em' })
	}
	render() {
		return (
			<FaChevronRight
				size={this.state.size}
				color={this.state.color}
				onMouseOver={this.changeColor}
				onMouseOut={this.baseColor}
				onMouseDown={this.changeSize}
				onMouseUp={this.baseSize}
			/>
		)
	}
}
