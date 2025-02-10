import Header from "@/components/atoms/Header";
import Footer from "@/components/atoms/Footer";
import styles from "../page.module.css";
export default function About() {
	return (
		<>
			<Header />
			<main>
				<section className={styles.heroAbout}>
					<div className={styles.textAbout}>
						<h1>I'm Kate!</h1>
						<h2>UX/UI Designer | Frontend Developer </h2>
						<h3>Vancouver, BC</h3>
						<p>
							I'm a UX/UI designer based in Vancouver with a background in
							psychology and nursing. My journey from healthcare to design was
							driven by a deep passion for accessibility and user-centered
							experiences. Having worked closely with individuals facing
							cognitive and physical challenges, I understand the critical role
							that thoughtful, inclusive design plays in everyday life.
							<p>
								Now, I apply my problem-solving skills and empathy to create
								intuitive, functional, and beautiful digital experiences. My
								goal is to bridge the gap between technology and people,
								ensuring that products are not just visually appealing but also
								accessible to all. Let's create designs that make a difference.
							</p>
							<p> </p>
						</p>
					</div>
					<div className={styles.imageContainerAbout}>
						<img src="/images/katelyn2.jpg" alt="Kate's Portrait" />
						<div className={styles.imageGrid}>
							<img src="/images/katelyn3.jpg" alt="Kate's Portrait" />
							<img src="/images/katelyn.png" alt="Kate's Portrait" />
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
}
