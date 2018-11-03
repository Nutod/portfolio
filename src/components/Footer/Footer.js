import React from "react";
import { FooterWrapper } from "../elements/Wrapper";
import { MailText, NumberText, CopyrightText } from "../elements/Texts";

export default function Footer() {
	return (
		<FooterWrapper>
			<div style={{ width: "50vw" }}>
				You can send me a mail here:
				<MailText>alukodotun@gmail.com</MailText>
				Or call me:
				<NumberText>0803.769.9140</NumberText>
				<CopyrightText>&copy; 2018 Oladotun Aluko</CopyrightText>
			</div>
		</FooterWrapper>
	);
}
