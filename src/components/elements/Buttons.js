import styled from "styled-components";

export const Button = styled.a`
	text-transform: uppercase;
	text-decoration: none;
	color: #fff;
	cursor: pointer;
	background: #1d2b4c;
	font-size: 2rem;
	padding: 1.5rem 3rem;
	border-radius: 2px;
	font-weight: 400;
	transition: all 0.3s;
	box-shadow: 0px 4px 7px rgba(11, 224, 176, 0.5);
	position: relative;
	z-index: 10;

	&:hover {
		box-shadow: 0 8px 15px rgba(11, 224, 176, 0.5);

		&:after {
			transform: scale(1.5);
			opacity: 0;
		}
	}

	&:active {
		box-shadow: 0 3px 15px rgba(11, 224, 176, 0.5);
	}

	&:after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		z-index: -1;
		background-color: #1d2b4c;
		border-radius: 2px;
		transition: all 0.4s;
	}
`;
