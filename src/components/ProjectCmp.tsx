import {
	Box,
	Heading,
	Image,
	Text,
	Badge,
	Link,
	useColorModeValue,
} from "@chakra-ui/react";
import Colors from "constants/Colors";
import { useState } from "react";
import ReactModal from "react-modal";
// import Button from "./Button";

interface IProjectCmp {
	id: number;
	img: string;
	title: string;
	desc: string;
	role?: string;
	stack: string[];
	link: string;
	key: string | number;
	type?: string;
	openModal?: () => void;
}

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		margin: "0  auto",
		transform: "translate(-50%, -50%)",
		width: "60%",
	},
};

ReactModal.setAppElement("#root");

const ProjectCmp: React.FC<IProjectCmp> = ({
	id,
	img,
	title,
	link,
	desc,
	role,
	stack,
	type,
	key,
}) => {
	const [modalIsOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
		// subtitle.style.backgroundColor = "blue";
	}

	function closeModal() {
		setIsOpen(false);
	}

	const { cLightBg, cDarkBg, cDarkGrey, cLightBlue } = Colors;
	const bg = useColorModeValue(cLightBg, cDarkBg);
	const color = useColorModeValue(cDarkGrey, cLightBlue);

	return (
		<Box
			bg={bg}
			cursor="pointer"
			p={8}
			borderRadius={"24px"}
			boxShadow="1px 5px 15px rgba(0,0,0,0.2)"
		>
			<Box key={key}>
				<Image src={img} alt="project" onClick={openModal} />
				<Box maxWidth="800px" color={color}>
					<Heading
						fontWeight="400"
						fontFamily={"Poppins, sans-serif"}
						letterSpacing="150%"
						my={{ base: "1rem", md: "1.6rem" }}
					>
						{title}
					</Heading>
					<Text>{desc}</Text>
				</Box>
			</Box>
			<ReactModal
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				style={customStyles}
				// contentLabel="Example Modal"
			>
				<Box>
					<Image
						src={img}
						alt="project"
						boxSize="20rem"
						objectFit={"contain"}
					/>
					<Heading
						fontSize="2.2rem"
						textTransform="uppercase"
						fontWeight="500"
						letterSpacing="150%"
						color="cDarkGrey"
					>
						{title}
					</Heading>
					<Text color="black">{desc}</Text>
					{role && <Text>{role}</Text>}
					<Box mb={"1rem"}>
						{stack.map((data, index: number) => (
							<Badge
								fontSize="1rem"
								borderColor={cDarkBg}
								variant="outline"
								borderRadius="full"
								p={{ base: "0.2rem", md: "0.5rem" }}
								m={{ base: "0.2rem", md: "0.5rem" }}
								key={index}
								color={cDarkGrey}
							>
								{data}
							</Badge>
						))}
					</Box>
					<Link
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						variant="outline"
						color={"white"}
						fontWeight="100"
						letterSpacing="150%"
						padding="0.5rem 1.2rem"
						backgroundColor={cDarkBg}
						fontSize={"1.8rem"}
						borderRadius={"100px"}
						textAlign="center"
						display={{ base: "block", md: "inline-block" }}
						_hover={{
							color: cDarkBg,
							background: "transparent",
							borderWidth: "2px",
							borderColor: { cDarkBg },
						}}
						// isExternal
					>
						View Project
					</Link>
				</Box>
			</ReactModal>
		</Box>
	);
};
export default ProjectCmp;
