import { Box, Flex } from "@chakra-ui/react";
import ColorToggler from "../components/ColorToggler";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Page = () => {
	return (
		<Box minHeight={"100vh"} mx="auto">
			<Flex justify="end" p="1rem" pb="0">
				<ColorToggler />
			</Flex>
			<Navbar />
			<Box px={8} mx="auto" maxWidth={"1100px"}>
				<Outlet />
			</Box>
		</Box>
	);
};
export default Page;
