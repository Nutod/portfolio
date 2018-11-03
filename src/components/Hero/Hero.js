import React from "react";
import { HeadingOne, HeadingThree, HeroHeader } from "../elements/Headers";
import { HeroWrapper, HeroBackground } from "../elements/Wrapper";
import { Button } from "../elements/Buttons";

export default function Hero() {
	return (
		<HeroWrapper>
			<div style={{ width: "80vw" }}>
				<HeadingThree>Hi! I'm</HeadingThree>
				<HeroHeader>Aluko Oladotun</HeroHeader>
				<HeadingOne>Frontend Developer</HeadingOne>
				<p style={{ marginTop: "2.7rem" }}>
					<Button>Download Resume</Button>
				</p>
			</div>
			<HeroBackground />
		</HeroWrapper>
	);
}
