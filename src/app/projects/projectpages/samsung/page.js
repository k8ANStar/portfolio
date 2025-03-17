import Header from "@/components/atoms/Header";
import Footer from "@/components/atoms/Footer";
import styles from "./page.module.css";
import Image from "next/image";

export default function SamsungProject() {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<div className={styles.container}>
					<div className={styles.imageContainer}>
						<Image
							src="/images/samsunghero.png"
							alt="Samssung Galaxy Ads"
							width={800}
							height={450}
						/>
					</div>
					<div className={styles.infoContainer}>
						<h1 className={styles.headingOne}>Digital Advertisments</h1>
						<h2 className={styles.headingTwo}>
							Samsung Galaxy Series Mobile Ads
						</h2>
						<p className={styles.paragraph}>
							<strong>Timeline:</strong> November 2024
						</p>

						<p className={styles.paragraph}>
							<strong>Tools:</strong> Photoshop, Illustrator
						</p>
					</div>
				</div>

				<div className={styles.info}>
					<h4>Design Summary</h4>
					<p>
						The Samsung Galaxy Series ad campaign is designed to create a
						cohesive and immersive visual experience, where every element—from
						product color to interface design—feels intentionally connected. The
						color scheme is carefully selected to mirror the device itself,
						seamlessly blending the product's physical design, screen
						background, and interactive elements to establish a unified
						aesthetic.
						<p>
							Each ad's palette is pulled directly from the device's signature
							hues, ensuring that the background, buttons, and key visual
							elements harmonize with the screen's dynamic display. This
							approach reinforces the sleek, premium feel of the Galaxy series,
							while subtly guiding the viewer's eye toward the product as the
							focal point.
						</p>
					</p>

					<h4>Original Designs</h4>
					<div className={styles.originalAds}>
						<Image
							src="/images/samsung1.png"
							alt="Samsung Galxey Earbuds"
							width={470}
							height={630}
						/>
						<Image
							src="/images/samsung2.png"
							alt="Samsung Galxy Phone"
							width={470}
							height={630}
						/>
						<Image
							src="/images/samsung3.png"
							alt="Samsung Galxy Tablet"
							width={470}
							height={630}
						/>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
