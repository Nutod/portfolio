import React from "react";
import { ExperienceWrapper } from "../elements/Wrapper";
import { SectionHeader } from "../elements/Headers";
import { Card, CardSide, CardSideFront, CardSideBack } from "../elements/Card";

export default function Experience() {
	return (
		<ExperienceWrapper>
			<SectionHeader>Previous Projects</SectionHeader>
			<div style={{ display: "flex" }}>
				<Card>
					<CardSide>
						<CardSideFront>Front</CardSideFront>
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
			</div>
		</ExperienceWrapper>
	);
}
