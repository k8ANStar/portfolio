import Header from "@/components/atoms/Header";
import Footer from "@/components/atoms/Footer";
import styles from "./page.module.css";

export default function Home() {
	return (
		<>
			<Header />
			<main className={styles.home}>
				{/* Hero Section */}
				<section className={styles.hero}>
					<div className={styles.text}>
						<h1>Hello, I'm Kate</h1>
						<h2>UX/UI Designer | Frontend Developer</h2>
						<p>
							Based in Vancouver, BC, specializing in creating user-centered
							designs that are both functional and visually engaging. I’m
							passionate about solving problems through intuitive interfaces and
							meaningful user experiences.
						</p>
					</div>
					<div className={styles.imageContainer}>
						<img
							src="/images/sleepykate.svg"
							alt="Kate's Portrait"
							className={styles.portrait}
						/>
					</div>
				</section>

				{/* Work Collage Section */}
				<section className={styles.collageContainer}>
					<div className={styles.collage}></div>
				</section>
				<h2 className={styles.projectsText}>Work</h2>
			</main>

			<Footer />
		</>
	);
}
