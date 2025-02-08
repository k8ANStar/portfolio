import Header from "@/components/atoms/Header";
import Footer from "@/components/atoms/Footer";
import styles from "./page.module.css";
import Image from "next/image";

export default function PrintProject() {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<div className={styles.container}>
					<div className={styles.imageContainer}>
						<Image
							src="/images/printmag.svg"
							alt="Print Magazine Design"
							width={300}
							height={600}
						/>
					</div>
					<div className={styles.infoContainer}>
						<h1 className={styles.headingOne}>Print Magazine Design</h1>
						<h2 className={styles.headingTwo}>
							Outdoor Space: Elements of Japanese Gardens
						</h2>
						<p className={styles.paragraph}>
							<strong>Timeline:</strong> 4 weeks
						</p>
						<p>
							<strong>Role:</strong> UX and Graphic Designer
						</p>
						<p>
							<strong>Tools:</strong> InDesign, Illustrator, Photoshop
						</p>
						<a
							href="https://indd.adobe.com/view/34caeb92-d778-4637-8480-3542adecbe89"
							className={styles.chip}
							target="_blank"
							rel="noopener noreferrer"
						>
							View Digital Version
						</a>
					</div>
				</div>
				<div className={styles.blurb}>
					<p>
						This project involved designing a print magazine focused on the
						elements of Japanese gardens. The goal was to create a visually
						appealing and informative magazine that highlights the beauty and
						tranquility of these outdoor spaces. The project required extensive
						research, design skills, and attention to detail to ensure that the
						final product was both aesthetically pleasing and informative.
					</p>
				</div>
			</main>
			<Footer />
		</>
	);
}
