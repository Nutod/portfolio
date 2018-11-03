import styled from "styled-components";

export const CardContainer = styled.div`
	display: flex;
`;

export const Card = styled.div`
	perspective: 150rem;
	-moz-perspective: 150rem;
	width: 30rem;
	height: 35rem;
	margin: 3rem;
	position: relative;
`;

export const CardSide = styled.div`
	height: 35rem;
	transition: all 0.8s ease;
	color: #fff;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	backface-visibility: hidden;
	border-radius: 3px;
	box-shadow: 0 15px 40px rgba(0, 0, 0, 0.09);
`;

export const CardSideFront = styled(CardSide)`
	background-color: #fff;

	${Card}:hover & {
		transform: rotateY(-180deg);
	}
`;

export const CardSideBack = styled(CardSide)`
	background: linear-gradient(
		to right bottom,
		${props => props.from},
		${props => props.to}
	);
	transform: rotateY(180deg);

	${Card}:hover & {
		transform: rotateY(0deg);
	}
`;

export const CardHeading = styled.h3`
	font-size: 2.8rem;
	font-weight: 300;
	text-transform: uppercase;
	color: #fff;
	position: absolute;
	top: 24rem;
	right: 2rem;
	text-align: right;
	padding: 1rem;
	background-image: linear-gradient(
		to right bottom,
		${props => props.from},
		${props => props.to}
	);
	width: 70%;
`;

export const CardPicture = styled.div`
	background-size: cover;
	height: 28rem;
	background-blend-mode: screen;
	background-image: linear-gradient(
			to right bottom,
			${props => props.from},
			${props => props.to}
		),
		url(${props => props.url});
	clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
`;
