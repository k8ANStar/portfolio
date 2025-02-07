import Header from "@/components/atoms/Header";
import Footer from "@/components/atoms/Footer";
import ProjectCard from "@/components/molecules/ProjectCard";

export default function Projects() {
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
					image="/printmag.png"
					title="Print Magaizine Design"
					type="Graphic Design"
					date="October 2024"
				/>
				<ProjectCard
					image="/samsungad.png"
					title="Samsung Ad Campaign"
					type="Graphic Design"
					date="November 2024"
				/>
				<ProjectCard
					image="/vitamind.png"
					title="Benefits of Vitamin D"
					type="Motion Graphics"
					date=" March-May 2024"
				/>
			</main>
			<Footer />
		</>
	);
}
