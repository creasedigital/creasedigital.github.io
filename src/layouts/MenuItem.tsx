import { Text, Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

interface IMenuItem {
	link: any;
	isLast?: boolean;
	rest?: any;
}

const MenuItem: React.FC<IMenuItem> = ({ link, isLast, ...rest }) => {
	return (
		<NavLink to={link.to}>
			<Flex alignItems="center">
				<link.icon size={16} />
				<Text
					display="block"
					fontSize={"1.4rem"}
					{...rest}
					textTransform="capitalize"
					ml={2}
				>
					{link.title}
				</Text>
			</Flex>
		</NavLink>
	);
};
export default MenuItem;
