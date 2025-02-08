import Header from "@/components/atoms/Header";
import Footer from "@/components/atoms/Footer";
import styles from "./page.module.css";

export default function VitaminProject() {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<div className={styles.container}>
					<div className={styles.imageContainer}>
						<video
							src="/vitamind.mp4"
							alt="benefits of vitamin d"
							width={800}
							height={500}
							controls
							autoPlay
							loop
						/>
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
				</div>
			</main>
			<Footer />
		</>
	);
}
