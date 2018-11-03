import React from "react";
import { HeadingOne, HeadingThree, HeroHeader } from "../elements/Headers";
import { Wrapper } from "../elements/Wrapper";
import { Button } from "../elements/Buttons";

export default function Hero() {
	return (
		<Wrapper>
			<div style={{ width: "80vw" }}>
				<HeadingThree>Hi! I'm</HeadingThree>
				<HeroHeader>Aluko Oladotun</HeroHeader>
				<HeadingOne>Frontend Developer</HeadingOne>
				<p style={{ marginTop: "2.7rem" }}>
					<Button>Download Resume</Button>
				</p>
			</div>
			<div
				style={{
					backgroundImage: "url(hero-bg.png)",
					height: "100%",
					width: "100%",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "right center",
					position: "absolute",
					top: 0,
					left: 0,
					zIndex: -1
				}}
			/>
		</Wrapper>
	);
}
