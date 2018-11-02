import React, { Component } from "react";
import Hero from "../components/Hero/Hero";
import Experience from "../components/Experience/Experience";
import SideProject from "../components/SideProject/SideProject";
import Footer from "../components/Footer/Footer";

export default class Layout extends Component {
	render() {
		return (
			<div>
				<Hero />
				<Experience />
				<SideProject />
				<Footer />
			</div>
		);
	}
}
