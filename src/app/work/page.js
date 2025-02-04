import Header from "@/components/atoms/Header";
import Footer from "@/components/atoms/Footer";
import ProjectCard from "@/components/molecules/ProjectCard";

export default function Work() {
	return (
		<>
			<Header />
			<main
				style={{
					display: "flex",
					gap: "20px",
					flexWrap: "wrap",
					justifyContent: "center",
					padding: "2rem",
				}}
			>
				<ProjectCard
					image="/project1.jpg"
					title="Brand Identity Design"
					type="Graphic Design"
					date="Jan 2024"
				/>
				<ProjectCard
					image="/project2.jpg"
					title="UX Research Case Study"
					type="UX Design"
					date="Feb 2024"
				/>
				<ProjectCard
					image="/project3.jpg"
					title="Web App Prototype"
					type="Frontend Dev"
					date="March 2024"
				/>
			</main>
			<Footer />
		</>
	);
}
