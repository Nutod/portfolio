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
	CardHeading,
	CardContent,
	CardLink
} from "../elements/Card";

export default function Experience() {
	return (
		<ExperienceWrapper>
			<SectionHeader>Previous Projects</SectionHeader>
			<CardContainer>
				<Card>
					<CardSide>
						<CardSideFront>
							<CardPicture url="kudi-min.jpg" from="#2193b0" to="#6dd5ed">
								&nbsp;
							</CardPicture>
							<CardHeading from="#2193b0" to="#6dd5ed">
								Kudi.ai
							</CardHeading>
						</CardSideFront>
						<CardSideBack from="#2193b0" to="#6dd5ed">
							<CardContent>
								<CardLink href="https://kudi.ai" target="_blank">
									View Project
								</CardLink>
							</CardContent>
						</CardSideBack>
					</CardSide>
				</Card>
				<Card>
					<CardSide>
						<CardSideFront>
							<CardPicture url="cleaners-min.jpg" from="#FDC830" to="#F37335">
								&nbsp;
							</CardPicture>
							<CardHeading from="#FDC830" to="#F37335">
								Instant Cleaners
							</CardHeading>
						</CardSideFront>
						<CardSideBack from="#FDC830" to="#F37335">
							<CardContent>
								<CardLink href="http://instantcleaners.com" target="_blank">
									View Project
								</CardLink>
							</CardContent>
						</CardSideBack>
					</CardSide>
				</Card>
				<Card>
					<CardSide>
						<CardSideFront>
							<CardPicture url="capro-min.jpg" from="#FF4B2B" to="#FF416C">
								&nbsp;
							</CardPicture>
							<CardHeading from="#FF4B2B" to="#FF416C">
								Capro Usa
							</CardHeading>
						</CardSideFront>
						<CardSideBack from="#FF4B2B" to="#FF416C">
							<CardContent>
								<CardLink href="http://caprousa.org" target="_blank">
									View Project
								</CardLink>
							</CardContent>
						</CardSideBack>
					</CardSide>
				</Card>
			</CardContainer>
		</ExperienceWrapper>
	);
}
