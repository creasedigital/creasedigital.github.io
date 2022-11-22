import { useColorMode, Button } from "@chakra-ui/react";
import { TiWeatherNight, TiWeatherSunny } from "react-icons/ti";

function ColorToggler() {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Button
			onClick={toggleColorMode}
			_active={{ border: "none", outline: "none" }}
			_focus={{ border: "none", outline: "none" }}
			display="block"
			/* pos="absolute"
			top="0"
			left="0" */
			// m="1rem"
		>
			{colorMode === "light" ? (
				<TiWeatherNight size={32} />
			) : (
				<TiWeatherSunny size={32} />
			)}
		</Button>
	);
}

export default ColorToggler;
