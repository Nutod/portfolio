import { Component } from "react";

export default class extends Component {
	state = {
		width: window.innerWidth
	};

	componentDidMount = () => {
		window.addEventListener("resize", this.updateWidth);
	};

	componentWillUnmount = () => {
		window.removeEventListener("resize", this.updateWidth);
	};

	updateWidth = () => {
		this.setState(() => ({ width: window.innerWidth }));
	};

	render() {
		const { children } = this.props;
		return children({ width: this.state.width });
	}
}
