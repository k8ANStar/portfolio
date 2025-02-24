import Header from "@/components/atoms/Header";
import Footer from "@/components/atoms/Footer";
import styles from "./page.module.css";
import Image from "next/image";

export default function VitaminProject() {
	const assets = [
		"/images/cheese.svg",
		"/images/Fish.svg",
		"/images/Milk.svg",
		"/images/Egg.svg",
		"/images/brocoli.svg",
		"/images/Bone.svg",
		"/images/fridge.svg",
		"/images/Picture.svg",
		"/images/Bed.svg",
		"/images/Window1.svg",
		"/images/Window2.svg",
		"/images/Bookshelft.svg",
	];

	return (
		<>
			<Header />
			<main className={styles.main}>
				<div className={styles.container}>
					<div className={styles.imageContainer}>
						<iframe
							src="https://drive.google.com/file/d/11sY5_5ZQQUEcdZF8qrp7dw6IBCFuB4IF/preview"
							width="800"
							height="500"
							allow="autoplay"
						></iframe>
					</div>
					<div className={styles.infoContainer}>
						<h1 className={styles.headingOne}>Educational Video</h1>
						<h2 className={styles.headingTwo}>Benefits of Vitamin D</h2>
						<p className={styles.paragraph}>
							<strong>Timeline:</strong> March - May 2024
						</p>

						<p className={styles.paragraph}>
							<strong>Tools:</strong> After Effects, Illustrator
						</p>
					</div>
				</div>
				<div className={styles.info}>
					<p>
						The Benefits of Vitamin D is an informative video that follows the
						story of Jess, who is struggling with a vitamin D deficiency.
						Throughout the video, we explore how this essential nutrient affects
						overall health and show various ways Jess can obtain vitamin D to
						improve her well-being, from diet changes to safe sun exposure.
						<p>
							To make the information accessible and engaging, the video uses
							simple animations and clear visuals to illustrate these concepts,
							following Jess's journey in a relatable way. The production
							process was streamlined to allow for efficient development, with
							each segment being built in parallel to maintain clarity and
							ensure a steady workflow.
						</p>
						<p>
							The final result is an engaging, educational resource that
							empowers viewers to understand how to incorporate vitamin D into
							their daily routines, just like Jess, for improved health and
							vitality.
						</p>
					</p>
					<h2 className={styles.process}>Creative Process</h2>
					<h4>Color Palette</h4>
					{/* Color Palette */}
					<div className={styles.colorPalette}>
						<div
							className={styles.color}
							style={{ backgroundColor: "#313D39" }}
						></div>
						<div
							className={styles.color}
							style={{ backgroundColor: "#435A52" }}
						></div>
						<div
							className={styles.color}
							style={{ backgroundColor: "#90A182" }}
						></div>
						<div
							className={styles.color}
							style={{ backgroundColor: "#7A9991" }}
						></div>
						<div
							className={styles.color}
							style={{ backgroundColor: "#C3DDD4" }}
						></div>
						<div
							className={styles.color}
							style={{ backgroundColor: "#955A80" }}
						></div>
						<div
							className={styles.color}
							style={{ backgroundColor: "#9C6D5C" }}
						></div>
					</div>

					<h4>Concept Drawings</h4>
					<div className={styles.conceptDrawings}>
						<Image
							src="/images/vitconcept1.jpg"
							alt="Concept Drawing 1"
							width={400}
							height={300}
						/>
						<Image
							src="/images/vitconcept2.jpg"
							alt="Concept Drawing 2"
							width={400}
							height={300}
						/>
						<Image
							src="/images/vitconcept3.jpg"
							alt="Concept Drawing 3"
							width={400}
							height={300}
						/>
						<Image
							src="/images/vitconcept4.jpg"
							alt="Concept Drawing 4"
							width={400}
							height={300}
						/>
						<Image
							src="/images/vitconcept5.jpg"
							alt="Concept Drawing 5"
							width={400}
							height={300}
						/>
						<Image
							src="/images/vitconcept6.jpg"
							alt="Concept Drawing 6"
							width={400}
							height={300}
						/>
					</div>

					<h4>Assets</h4>
					<div className={styles.assets}>
						{assets.map((asset, index) => (
							<div key={index} className={styles.asset}>
								<Image
									src={asset}
									alt={`Asset ${index + 1}`}
									width={200}
									height={200}
								/>
							</div>
						))}
					</div>

					<h4>Mockups</h4>
					<div className={styles.mockup}>
						<Image
							src="/images/vitamind.png"
							alt="mockup 1 desktop"
							width={800}
							height={500}
						/>
						<Image
							src="/images/vitmockup1.svg"
							alt="mockup 2 ipad"
							width={800}
							height={500}
						/>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
