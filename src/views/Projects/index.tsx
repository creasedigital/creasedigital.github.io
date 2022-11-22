import { Box, Grid, Heading } from "@chakra-ui/react";
import { liveProjects, sideProjects } from "data";
// import Colors from "constants/Colors";
import "./styles.css";
import ProjectCmp from "components/ProjectCmp";

const Projects = () => {
	// const { cLightOrangeHover } = Colors;
	// const { colorMode } = useColorMode();

	return (
		<>
			<Box paddingBottom={"4rem"}>
				<Heading
					fontSize={{ base: "2rem", sm: "2.4rem", md: "3.6rem" }}
					lineHeight={{ base: "2.4rem", sm: "3.2rem", md: "3.6rem" }}
					letterSpacing="150%"
					mb={{ base: "2rem", md: "3.2rem" }}
					pb="0.5rem"
					fontWeight="100"
					textTransform="uppercase"
				>
					Live Projects
				</Heading>

				<Grid
					templateColumns={{ lg: "repeat(2, 1fr)" }}
					gap={{ base: "2.4rem", md: "3.2rem" }}
				>
					{liveProjects.map(
						(
							p: {
								id: number;
								img: string;
								title: string;
								desc: string;
								link: string;
								role: string | undefined;
								stack: string[];
							},
							idx: string | number,
						) => (
							<ProjectCmp
								id={p.id}
								img={p.img}
								title={p.title}
								desc={p.desc}
								link={p.link}
								role={p.role}
								stack={p.stack}
								type="live"
								key={idx}
							/>
						),
					)}
				</Grid>
			</Box>
			<Box paddingBottom={"4rem"}>
				<Heading
					fontSize={{ base: "2rem", sm: "2.4rem", md: "3.6rem" }}
					lineHeight={{ base: "2.4rem", sm: "3.2rem", md: "3.6rem" }}
					letterSpacing="150%"
					mb={{ base: "2rem", md: "3.2rem" }}
					pb="0.5rem"
					fontWeight="100"
					textTransform="uppercase"
				>
					Side Projects
				</Heading>

				<Grid
					templateColumns={{ lg: "repeat(2, 1fr)" }}
					gap={{ base: "2.4rem", md: "3.2rem" }}
				>
					{sideProjects.map(
						(
							q: {
								id: number;
								img: string;
								title: string;
								desc: string;
								link: string;
								stack: string[];
							},
							idx: string | number,
						) => (
							<ProjectCmp
								id={q.id}
								img={q.img}
								title={q.title}
								desc={q.desc}
								link={q.link}
								stack={q.stack}
								type="side"
								key={idx}
							/>
						),
					)}
				</Grid>
			</Box>
		</>
	);
};
export default Projects;
