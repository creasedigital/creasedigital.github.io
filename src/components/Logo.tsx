import { Box, ChakraProps, OmitCommonProps } from "@chakra-ui/react";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import LOGO from "assets/svgs/ohjay.svg";

export default function Logo(
	props: JSX.IntrinsicAttributes &
		OmitCommonProps<
			DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
			keyof ChakraProps
		> &
		ChakraProps & { as?: "div" | undefined },
) {
	return (
		<Box {...props}>
			<Link to="/">
				<img src={LOGO} width="36px" alt="Ojore Chris" />
			</Link>
		</Box>
	);
}
