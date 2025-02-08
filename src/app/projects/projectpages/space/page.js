import Header from "@/components/atoms/Header";
import Footer from "@/components/atoms/Footer";
import styles from "./page.module.css";
import Image from "next/image";

export default function SpaceProject() {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<div className={styles.container}>
					<div className={styles.imageContainer}>
						<Image
							src="/images/space.svg"
							alt="Print Magazine Design"
							width={350}
							height={500}
						/>
					</div>
					<div className={styles.infoContainer}>
						<h1 className={styles.headingOne}>Digital Design Advertisment</h1>
						<h2 className={styles.headingTwo}>
							Samsung Galaxy Earbuds2 Pro Digital Ad
						</h2>
						<p className={styles.paragraph}>
							<strong>Timeline:</strong> 3 weeks
						</p>
						<p>
							<strong>Role:</strong> Graphic Designer
						</p>
						<p>
							<strong>Tools:</strong> Photoshop, Illustrator
						</p>
					</div>
				</div>
				<div className={styles.blurb}>
					<p></p>
				</div>
			</main>
			<Footer />
		</>
	);
}
