import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { HeadingOne, HeadingThree, HeroHeader } from "../elements/Headers";
import { HeroWrapper, HeroBackground } from "../elements/Wrapper";
import { Button } from "../elements/Buttons";
import "./Hero.css";

export default function Hero() {
	// const Text = ['Frontend Developer', 'UI Designer']
	return (
		<HeroWrapper>
			<div style={{ width: "80vw" }}>
				<HeadingThree>Hi! I'm</HeadingThree>
				<HeroHeader>Oladotun Aluko</HeroHeader>
				<ReactTypingEffect
					className="HeadingOne"
					text="Hello." //text=["Hello.", "World!"]
				/>
				<HeadingOne>Frontend Developer</HeadingOne>
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
