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
	background-image: linear-gradient(to right, #007bff0a, #007bff0a);
`;

export const SideProjectWrapper = styled(Wrapper)`
	height: auto;
	flex-direction: column;
	align-items: center;
	padding-top: 6rem;
	background-image: linear-gradient(to right, #e83e8c21, #e83e8c21);
`;

export const FooterWrapper = styled(Wrapper)`
	align-items: start;
	padding-top: 6rem;
	height: 50vh;
	background-image: linear-gradient(to right, #1151d3, #1151d3);
`;
