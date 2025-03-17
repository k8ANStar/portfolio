import Header from "@/components/atoms/Header";
import Footer from "@/components/atoms/Footer";
import ProjectCard from "@/components/molecules/ProjectCard";

export default function ProjectsHome() {
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
					href="/projects/projectpages/civica"
					image="/images/civicacover.png"
					title="Civica Case Study"
					type="UX/UI Design"
					date="September - December 2024"
				/>
				<ProjectCard
					href="/projects/projectpages/print"
					image="/images/printmag.png"
					title="Print Magazine Design"
					type="Graphic Design"
					date="October 2024"
				/>
				<ProjectCard
					href="/projects/projectpages/vitamind"
					image="/images/vitamindcover.png"
					title="Benefits of Vitamin D"
					type="Motion Graphics"
					date="March-May 2024"
				/>
				<ProjectCard
					href="/projects/projectpages/halloween"
					image="/images/halloweencover.png"
					title="Children's Digital Book"
					type="Graphic Design"
					date="October-December 2024"
				/>
				<ProjectCard
					href="/projects/projectpages/space"
					image="/images/spacehero.png"
					title="Cosmos Magazine Design"
					type="Graphic Design"
					date="March 2024"
				/>
				<ProjectCard
					href="/projects/projectpages/cans"
					image="/images/cancover.png"
					title="Can Packaging Design"
					type="Graphic Design"
					date="October 2024"
				/>
				<ProjectCard
					href="/projects/projectpages/samsung"
					image="/images/samsungcover.png"
					title="Samnsung Mobile Ads"
					type="Graphic Design"
					date="November 2024"
				/>
			</main>
			<Footer />
		</>
	);
}
