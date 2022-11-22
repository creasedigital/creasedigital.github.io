import { Box } from "@chakra-ui/react";
import { TiTimes, TiThMenu } from "react-icons/ti";

interface IMenuToggle {
	toggle: () => void;
	isOpen: boolean;
}

const MenuToggle: React.FC<IMenuToggle> = ({ toggle, isOpen }) => {
	return (
		<Box
			as="button"
			_focus={{ border: "none", outline: "none" }}
			_active={{ border: "none", outline: "none" }}
			onClick={toggle}
			display={{ base: "block", md: "none" }}
		>
			{isOpen ? <TiTimes size={32} /> : <TiThMenu size={32} />}
		</Box>
	);
};
export default MenuToggle;
