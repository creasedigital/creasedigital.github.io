import { Box, useColorModeValue } from "@chakra-ui/react";
import Page from "layouts/Page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "views/About";
import Contact from "views/Contact";
import Projects from "views/Projects";
import { ROUTES } from "./utils/routes";
import Home from "./views/Home";
import Colors from "constants/Colors";

function App() {
	const { cLightBg, cDarkBg, cDarkGrey, cLightBlue } = Colors;
	const bg = useColorModeValue(cLightBg, cDarkBg);
	const color = useColorModeValue(cDarkGrey, cLightBlue);

	return (
		<Box color={color} bg={bg} m="0px">
			<BrowserRouter>
				<Routes>
					<Route path={ROUTES.home} element={<Page />}>
						<Route index element={<Home />} />
						<Route path={ROUTES.projects} element={<Projects />} />
						<Route path={ROUTES.about} element={<About />} />
						<Route path={ROUTES.contact} element={<Contact />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</Box>
	);
}

export default App;
