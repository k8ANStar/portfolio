import Header from "@/components/atoms/Header";
import Footer from "@/components/atoms/Footer";
import styles from "./page.module.css";
import Image from "next/image";
import Flipbook from "@/components/molecules/Flipbook";
export default function PrintProject() {
	const printMagazinePages = [
		"/images/printcover.png",
		"/images/print1.png",
		"/images/print2.png",
		"/images/print3.png",
		"/images/print4.png",
		"/images/print5.png",
		"/images/print6.png",
		"/images/print7.png",
		"/images/print8.png",
		"/images/print9.png",
		"/images/print10.png",
		"/images/print11.png",
	];
	return (
		<>
			<Header />
			<main className={styles.main}>
				<div className={styles.container}>
					<div className={styles.imageContainer}>
						<Image
							src="/images/printmag.svg"
							alt="Print Magazine Design"
							width={400}
							height={600}
						/>
					</div>
					<div className={styles.infoContainer}>
						<h1 className={styles.headingOne}>Print Magazine Design</h1>
						<h2 className={styles.headingTwo}>
							Outdoor Space: Elements of Japanese Gardens
						</h2>
						<h3 className={styles.type}>Graphic Design</h3>
						<p className={styles.paragraph}>
							<strong>Timeline:</strong> 4 weeks
						</p>

						<p className={styles.paragraph}>
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
				<div className={styles.info}>
					<p>
						Outdoor Spaces is a magazine that explores unique landscape designs.
						This edition focuses on Japanese gardens, highlighting their use of
						natural elements like stone, water, and plants to create peaceful
						environments. From koi ponds to Zen rock gardens, this issue
						showcases the key design principles that make these spaces timeless
						and serene.
					</p>
				</div>
				<h2 className={styles.magInteractive}>Interactive Magazine</h2>
				<p className={styles.info}>
					Click on the right page side to view the magazine. Click on the left
					side page to go back.
				</p>
				<Flipbook images={printMagazinePages} />
			</main>
			<Footer />
		</>
	);
}
