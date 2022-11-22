import { Box } from "@chakra-ui/react";
import { BoxProps } from "@chakra-ui/react";

export interface IButton extends BoxProps {
	text?: any;
	px?: string;
	py?: string | any;
	color?: string;
	bg?: string;
	borderRadius?: string;
	border?: string;
	type?: "button" | "submit" | "reset";
	handleClick?(): void;
	width?: string | object;
	maxWidth?: string | object;
	fontSize?: string;
}

const Button: React.FC<IButton> = ({
	text,
	px,
	py,
	bg,
	color,
	borderRadius,
	border,
	type,
	width,
	maxWidth,
	handleClick,
	fontSize,
}) => {
	return (
		<Box
			as="button"
			type={type || "submit"}
			px={px}
			maxWidth={maxWidth}
			width={width}
			bg={bg || "#333333"}
			color={color || "white"}
			borderRadius={borderRadius || "3xl"}
			border={border || "hidden"}
			py={"8px" || py}
			fontSize={"14px" || fontSize}
			onClick={handleClick}
		>
			{text}
		</Box>
	);
};

export default Button;
