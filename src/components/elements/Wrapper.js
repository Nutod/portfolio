import styled from "styled-components";

export const Wrapper = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
`;

export const ExperienceWrapper = styled(Wrapper)`
	height: auto;
	flex-direction: column;
	align-items: center;
	margin-top: 2rem;
	padding-top: 6rem;
	background: url(contact-bg-1.png);
`;

export const SideProjectWrapper = styled(Wrapper)`
	height: auto;
	flex-direction: column;
	margin-top: 2rem;
	align-items: center;
	padding-top: 6rem;
	background: url(hello-bg-2.png);
`;

export const FooterWrapper = styled(Wrapper)`
	flex-direction: column;
	align-items: center;
	padding-top: 6rem;
	background-color: #032973;
	height: 50vh;
	color: #fff;

	&:before {
		background: url(contact-bg.png) top center no-repeat;
		margin-top: -1rem;
		position: absolute;
		top: 0px;
		left: 0px;
		height: 100%;
		width: 100%;
		content: "";
		z-index: 1;
	}
`;
