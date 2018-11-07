import React from "react";
import { SideProjectWrapper } from "../elements/Wrapper";
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

export default function SideProject() {
	return (
		<SideProjectWrapper>
			<SectionHeader>Side Projects</SectionHeader>
			<CardContainer>
				<Card>
					<CardSide>
						<CardSideFront>
							<CardPicture from="#F0CB35" to="#C02425">
								&nbsp;
							</CardPicture>
							<CardHeading from="#F0CB35" to="#C02425">
								Burger Builder
							</CardHeading>
						</CardSideFront>
						<CardSideBack from="#F0CB35" to="#C02425">
							<CardContent>
								<CardLink
									href="http://burger-react-d3b90.firebaseapp.com"
									target="_blank"
								>
									View Project
								</CardLink>
							</CardContent>
						</CardSideBack>
					</CardSide>
				</Card>
				<Card>
					<CardSide>
						<CardSideFront>
							<CardPicture from="#F15F79" to="#B24592">
								&nbsp;
							</CardPicture>
							<CardHeading from="#F15F79" to="#B24592">
								Teams App
							</CardHeading>
						</CardSideFront>
						<CardSideBack from="#F15F79" to="#B24592">
							<CardContent>
								<CardLink
									href="https://codesandbox.io/s/m5v40q9n2p"
									target="_blank"
								>
									View Project
								</CardLink>
							</CardContent>
						</CardSideBack>
					</CardSide>
				</Card>
				<Card>
					<CardSide>
						<CardSideFront>
							<CardPicture from="#DBD5A4" to="#649173">
								&nbsp;
							</CardPicture>
							<CardHeading from="#DBD5A4" to="#649173">
								Robots App
							</CardHeading>
						</CardSideFront>
						<CardSideBack from="#DBD5A4" to="#649173">
							<CardContent>
								<CardLink
									href="https://codesandbox.io/s/xojv3zw5mp"
									target="_blank"
								>
									View Project
								</CardLink>
							</CardContent>
						</CardSideBack>
					</CardSide>
				</Card>
			</CardContainer>
		</SideProjectWrapper>
	);
}
