import React from "react";
import { HeadingOne } from "../elements/Headers";
import { Wrapper } from "../elements/Wrapper";

export default function Hero() {
	return (
		<Wrapper>
			<div style={{ width: "40vw" }}>
				<HeadingOne>Hi, I'm Dotun</HeadingOne>
			</div>
			<div
				style={{
					backgroundImage: "url(hero-wave.png)",
					height: "100%",
					width: "100%",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "right center",
					position: "absolute",
					top: 0,
					left: 0,
					zIndex: -1,
					opacity: 0.3
				}}
			/>
		</Wrapper>
	);
}
