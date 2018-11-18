import React from "react";
import Hero from "../components/Hero/Hero";
import Experience from "../components/Experience/Experience";
import SideProject from "../components/SideProject/SideProject";
import Footer from "../components/Footer/Footer";

export default function Layout() {
		return (
			<>
				<Hero />
				<Experience />
				<SideProject />
				<Footer />
			</>
		);
}
