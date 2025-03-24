"use client";
import { useEffect } from "react";
import Header from "@/components/atoms/Header";
import Footer from "@/components/atoms/Footer";
import styles from "./page.module.css";

const locations = ["Bali", "France", "Italy", "Greece"];

export default function ParallaxProject() {
	useEffect(() => {
		const sections = document.querySelectorAll(`.${styles.parallaxSection}`);
		const options = {
			threshold: 0.5,
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("active");
				} else {
					entry.target.classList.remove("active");
				}
			});
		}, options);

		sections.forEach((section) => {
			observer.observe(section);
		});

		return () => {
			sections.forEach((section) => {
				observer.unobserve(section);
			});
		};
	}, []);

	return (
		<>
			<Header />
			<header className={styles.header}>
				<div className={styles.headerMask}></div>
				<h1 className={styles.title}>Sunsets In Travelled Places</h1>
			</header>
			<main>
				{locations.map((location) => (
					<section
						key={location}
						className={styles.parallaxSection}
						data-location={location.toLowerCase()}
					>
						<h1 className={styles.title}>{location}</h1>
						<div className={styles.foregroundMask}></div>
					</section>
				))}
			</main>
			<Footer />
		</>
	);
}