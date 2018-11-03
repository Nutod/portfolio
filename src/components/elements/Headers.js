import styled from "styled-components";

export const HeadingOne = styled.h1`
	font-family: "Open Sans", sans-serif;
	-webkit-font-smoothing: antialiased;
	color: #bbb;
	font-size: 4rem;
	font-weight: 200;
	line-height: 1.4;
	margin: 0 0 10px;
	letter-spacing: 3px;
	text-transform: uppercase;

	@media (max-width: 701px) {
		font-size: 3.8rem;
	}

	@media (max-width: 533px) {
		font-size: 3.3rem;
	}

	@media (max-width: 465px) {
		font-size: 3rem;
	}
`;

export const HeroHeader = styled(HeadingOne)`
	font-family: "Playfair Display", serif;
	font-size: 7rem;
	font-weight: 900;
	color: #1d2b4c;
`;

export const HeadingThree = styled.h3`
	font-family: "Playfair Display", serif;
	-webkit-font-smoothing: antialiased;
	color: #1d2b4c;
	font-size: 5rem;
	font-weight: 400;
	line-height: 1.4;
	margin: 0 0 10px;
	letter-spacing: -0.05em;
`;

export const SectionHeader = styled.h1`
	font-family: "Open Sans", serif;
	-webkit-font-smoothing: antialiased;
	color: #999;
	margin: 1rem;
	margin-top: 1.5rem;
	font-weight: 400;
	text-transform: uppercase;
	font-size: 3.5rem;

	@media (max-width: 533px) {
		font-size: 2.5rem;
	}

	@media (max-width: 465px) {
		font-size: 2rem;
	}
`;
