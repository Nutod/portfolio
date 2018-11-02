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
	align-items: start;
	margin-top: 2rem;
	padding-top: 6rem;
	background-image: linear-gradient(to right, #007bff26, #007bff26);
`;

export const SideProjectWrapper = styled(Wrapper)`
	align-items: start;
	padding-top: 6rem;
	background-image: linear-gradient(to right, #dc354566, #dc354566);
`;

export const FooterWrapper = styled(Wrapper)`
	align-items: start;
	padding-top: 6rem;
	background-image: linear-gradient(to right, #1151d3, #1151d3);
`;
