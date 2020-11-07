import React, { Component } from 'react'
import { FaChevronRight } from 'react-icons/fa'

export default class Rightcontroller extends Component {
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
			<FaChevronRight
				size='3rem'
				color={this.state.color}
				onMouseOver={this.changeColor}
				onMouseOut={this.baseColor}
			/>
		)
	}
}
