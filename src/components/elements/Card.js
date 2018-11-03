import styled from "styled-components";

export const Card = styled.div`
	perspective: 150rem;
	-moz-perspective: 150rem;
	width: 30rem;
	height: 30rem;
	margin: 2rem;
	position: relative;
`;

export const CardSide = styled.div`
	height: 30rem;
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
