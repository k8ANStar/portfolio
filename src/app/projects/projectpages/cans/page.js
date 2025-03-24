import Header from "@/components/atoms/Header";
import Footer from "@/components/atoms/Footer";
import styles from "./page.module.css";
import Image from "next/image";

export default function CanProject() {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<div className={styles.container}>
					<div className={styles.imageContainer}>
						<Image
							src="/images/canhero.png"
							alt="Can Mockups"
							width={800}
							height={450}
						/>
					</div>
					<div className={styles.infoContainer}>
						<h1 className={styles.headingOne}>Can Packaging Design</h1>
						<h2 className={styles.headingTwo}>Ghost Lab Energy Drinks</h2>
						<p className={styles.paragraph}>
							<strong>Timeline:</strong> October 2024
						</p>

						<p className={styles.paragraph}>
							<strong>Tools:</strong> Photoshop, Illustrator
						</p>
					</div>
				</div>

				<div className={styles.info}>
					<h4>Design Summary</h4>
					<p>
						The Ghost Lab Energy design embodies a bold fusion of mystery,
						innovation, and high-energy performance. Inspired by the unknown and
						the power of discovery, the visual identity leverages a futuristic
						yet eerie aesthetic to captivate thrill-seekers and high-performance
						individuals alike.
						<p>
							The color palette features a mix of electric neons and deep
							shadows, creating a striking contrast that evokes both
							supernatural intrigue and scientific precision. The typography is
							sleek and modern, reinforcing the brand's commitment to
							cutting-edge energy enhancement. The can's ghostly elements, such
							as wisps of vapor or hidden spectral details, add a layer of
							mystique, drawing consumers into the Ghost Lab experience.
						</p>
						<p>
							The branding is designed to stand out on shelves while appealing
							to gamers, night owls, and adrenaline junkies—those who crave an
							energy boost with an edge of the unknown. With Ghost Lab Energy,
							every sip fuels the mind, body, and spirit, unlocking the power to
							push beyond limits.
						</p>
					</p>

					<h4>Die Lines</h4>
					<div className={styles.dieLines}>
						<Image
							src="/images/berry_flavor_proof.png"
							alt="Berry Flavor Die Line"
							width={800}
							height={570}
						/>
						<Image
							src="/images/citrus_flavor_proof.png"
							alt="Citrus Flavor Die Line"
							width={800}
							height={570}
						/>
						<Image
							src="/images/phantom_flavor_proof.png"
							alt="Phantom Flavor Die Line"
							width={800}
							height={570}
						/>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
