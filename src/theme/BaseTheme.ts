import { extendTheme, type ThemeConfig, theme as baseTheme } from "@chakra-ui/react";
import { ButtonTheme as Button } from "./Components";


const config: ThemeConfig = {
	initialColorMode: 'dark',
	useSystemColorMode: true,
  }

export const theme = extendTheme({
	config,
	fonts: {
		heading: `Playfair Display, ${baseTheme.fonts?.heading}`,
		body: `Poppins, ${baseTheme.fonts?.body}`,
	},
	components: {
		Button,
	},
});
