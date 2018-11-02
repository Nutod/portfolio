import styled from "styled-components";

export const Wrapper = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
`;

export const HeroWrapper = styled(Wrapper)`
	&::before {
    background-image: url(hero-wave.png),
		background-repeat: no-repeat;
		background-position: right center;
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		z-index: -1;
	}
`;
