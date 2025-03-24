import Header from "@/components/atoms/Header";
import Footer from "@/components/atoms/Footer";
import styles from "./page.module.css";
import Image from "next/image";
import Flipbook from "@/components/molecules/Flipbook";

export default function SpaceProject() {
	const spaceEmag = [
		"/images/spacecover.jpg",
		"/images/space1.jpg",
		"/images/space2.jpg",
		"/images/space3.jpg",
		"/images/space4.jpg",
	];
	return (
		<>
			<Header />
			<main className={styles.main}>
				<div className={styles.container}>
					<div className={styles.imageContainer}>
						<Image
							src="/images/space.svg"
							alt="Print Magazine Design"
							width={500}
							height={700}
						/>
					</div>
					<div className={styles.infoContainer}>
						<h1 className={styles.headingOne}> Digital Magazine Design</h1>
						<h2 className={styles.headingTwo}>
							Cosomos: Solar Eclipse Magazine
						</h2>
						<h3 className={styles.type}>Graphic Design</h3>

						<p className={styles.paragraph}>
							<strong>Timeline:</strong> 2 weeks
						</p>
						<p className={styles.paragraph}>
							<strong>Tools:</strong> InDesign, Photoshop, Illustrator
						</p>
					</div>
				</div>
				<div className={styles.info}>
					<p>
						Cosmos is a magazine that delves into the science and significance
						of astronomical events. This edition focuses on solar eclipses,
						exploring the rare alignment of the sun, moon, and Earth. It
						explains the science behind these phenomena, why they occur, and how
						they have been observed and studied throughout history. The issue
						highlights the role of solar eclipses in advancing our understanding
						of space and their cultural and scientific importance.
					</p>
				</div>
				<h2 className={styles.magInteractive}>Interactive Digital Magazine</h2>
				<p className={styles.info}>
					Click on the right page side to view the magazine. Click on the left
					side page to go back.
				</p>
				<Flipbook images={spaceEmag} />
			</main>
			<Footer />
		</>
	);
}
