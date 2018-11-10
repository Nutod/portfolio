import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { HeadingThree, HeroHeader } from "../elements/Headers";
import { HeroWrapper, HeroBackground } from "../elements/Wrapper";
import { Button } from "../elements/Buttons";
import "./Hero.css";

export default function Hero() {
	const Text = ["Frontend Developer", "UI/UX Developer"];
	const typingConfig = {
		text: Text,
		className: "HeadingOne",
		speed: 100,
		eraseDelay: 3000,
		cursor: "_"
	};

	return (
		<HeroWrapper>
			<div style={{ width: "80vw" }}>
				<HeadingThree>Hi! I'm</HeadingThree>
				<HeroHeader>Oladotun Aluko</HeroHeader>
				<ReactTypingEffect {...typingConfig} />
				<p style={{ marginTop: "2.7rem" }}>
					<Button href="Résume.pdf" download="Oladotun Aluko Résume">
						Download Resume
					</Button>
				</p>
			</div>
			<HeroBackground />
		</HeroWrapper>
	);
}
