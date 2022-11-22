import { Flex } from "@chakra-ui/react";

interface INavBarContainer {
	children: any;
	props: any;
}

const NavBarContainer: React.FC<INavBarContainer> = ({
	children,
	...props
}) => {
	return (
		<Flex
			as="nav"
			align="center"
			justify="space-between"
			wrap="wrap"
			w="100%"
			// w="100vw"
			// maxWidth={"1100px"}
			mb={8}
			p={8}
			// bg="green"
			// color="white"
			// bg={[]}
			// color={[]}
			{...props}
		>
			{children}
		</Flex>
	);
};
export default NavBarContainer;
