import React from "react";
import { ExperienceWrapper } from "../elements/Wrapper";
import { SectionHeader } from "../elements/Headers";
import {
	CardContainer,
	Card,
	CardSide,
	CardSideFront,
	CardSideBack,
	CardPicture,
	CardHeading
} from "../elements/Card";

export default function Experience() {
	return (
		<ExperienceWrapper>
			<SectionHeader>Previous Projects</SectionHeader>
			<CardContainer>
				<Card>
					<CardSide>
						<CardSideFront>
							<CardPicture url="blog-1-2.jpg" from="#43c6ac" to="#f8ffae">
								&nbsp;
							</CardPicture>
							<CardHeading from="red" to="orange">
								The Explorer
							</CardHeading>
						</CardSideFront>
						<CardSideBack from="#43c6ac" to="#f8ffae">
							Back
						</CardSideBack>
					</CardSide>
				</Card>
				<Card>
					<CardSide>
						<CardSideFront>Front</CardSideFront>
						<CardSideBack>Back</CardSideBack>
					</CardSide>
				</Card>
				<Card>
					<CardSide>
						<CardSideFront>Front</CardSideFront>
						<CardSideBack>Back</CardSideBack>
					</CardSide>
				</Card>
			</CardContainer>
		</ExperienceWrapper>
	);
}
