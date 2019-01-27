import React, { Component } from "react";

export default class ErrorBoundary extends Component {
	state = {
		error: null
	};

	componentDidCatch = error => {
		this.setState({error})
	}

	render() {
		const {children} = this.props

		if (this.state.error) {
			return <h2>Something went wrong!!!</h2>
		}
		return (
			<>
			{children}
			</>
		)
	}
}
