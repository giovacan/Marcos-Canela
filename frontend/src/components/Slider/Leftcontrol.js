import React, { Component } from 'react'
import { FaChevronLeft } from 'react-icons/fa'

export default class Leftcontroller extends Component {
	constructor(props) {
		super(props)
		this.state = {
			color: '#2f3640'
		}
	}
	changeColor = () => {
		this.setState({ color: 'lightslategrey' })
	}
	baseColor = () => {
		this.setState({ color: '#2f3640' })
	}
	render() {
		return (
			<FaChevronLeft
				color={this.state.color}
				onMouseOver={this.changeColor}
				onMouseOut={this.baseColor}
			/>
		)
	}
}
