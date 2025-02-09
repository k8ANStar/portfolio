import Header from "@/components/atoms/Header";
import Footer from "@/components/atoms/Footer";
import styles from "./page.module.css";
import Image from "next/image";

export default function HalloweenProject() {
	const assets = [
		"/images/tree.svg",
		"/images/tree1.svg",
		"/images/pumpkin.svg",
		"/images/moon.svg",
		"/images/openchest.svg",
		"/images/navarrowforward.svg",
		"/images/hauntedhouse.svg",
		"/images/Witch.svg",
		"/images/PumpkinHead.svg",
		"/images/Ghost.svg",
		"/images/Scarecrow.svg",
		"/images/Vampire.svg",
		"/images/Werewolf.svg",
	];

	return (
		<>
			<Header />
			<main className={styles.main}>
				<div className={styles.container}>
					<div className={styles.imageContainer}>
						<Image
							src="/images/halloweencover.svg"
							alt="mockup 2 ipad"
							width={800}
							height={600}
						/>
					</div>
					<div className={styles.infoContainer}>
						<h1 className={styles.headingOne}>Children's Digital Book</h1>
						<h2 className={styles.headingTwo}>The Halloween Helpers</h2>
						<p className={styles.paragraph}>
							<strong>Timeline:</strong> October - Decemeber 2024
						</p>

						<p className={styles.paragraph}>
							<strong>Tools:</strong> Indesign, Illustrator
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
							style={{ backgroundColor: "#F99D23" }}
						></div>
						<div
							className={styles.color}
							style={{ backgroundColor: "#D03108" }}
						></div>
						<div
							className={styles.color}
							style={{ backgroundColor: "#BFA613" }}
						></div>
						<div
							className={styles.color}
							style={{ backgroundColor: "#77AE69" }}
						></div>
						<div
							className={styles.color}
							style={{ backgroundColor: "#0F3D03" }}
						></div>
						<div
							className={styles.color}
							style={{ backgroundColor: "#301D39" }}
						></div>

						<div
							className={styles.color}
							style={{ backgroundColor: "#463098" }}
						></div>

						<div
							className={styles.color}
							style={{ backgroundColor: "#FFF", border: "1px solid #000" }}
						></div>
						<div
							className={styles.color}
							style={{ backgroundColor: "#000" }}
						></div>
						<div
							className={styles.color}
							style={{ backgroundColor: "#492E0B" }}
						></div>
					</div>

					<h4>Concept Drawings</h4>
					<div className={styles.conceptDrawings}>{/* Concept Drawings */}</div>
					<h4>Storyboard Breakdown</h4>
					<div className={styles.conceptDrawings}>
						<Image
							src="/images/storyboard1.png"
							alt="storyboard"
							width={600}
							height={800}
						/>
						<Image
							src="/images/storyboard2.png"
							alt="storyboard"
							width={600}
							height={800}
						/>
						<Image
							src="/images/storyboard3.png"
							alt="storyboard"
							width={600}
							height={800}
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

					<h4>Mockup</h4>
					<div className={styles.mockup}>
						<Image
							src="/images/halloweencover.svg"
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
