"use client";
import Header from "@/components/atoms/Header";
import Footer from "@/components/atoms/Footer";
import styles from "./page.module.css";
import WorkShowcase from "@/components/molecules/WorkShowcase";
import styled from "styled-components";

export default function Home() {
	const projectImages = [
		"/images/civicacover.png",
		"/images/samsungcover.png",
		"/images/printmag.png",
		"/images/halloweencover.png",
		"/images/spacehero.png",
		"/images/vitamindcover.png",
	];

	const meImages = [
		"/images/katelyn.png",
		"/images/katelyn2.jpg",
		"/images/katelyn3.jpg",
	];
	const StyledLink = styled.a`
		text-decoration: none;
	`;
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
				<div className={styles.showcaseContainer}>
					<div className={styles.showcase}>
						<StyledLink href="/projects">
							<WorkShowcase images={projectImages} />
							<h2 className={styles.heading}>Projects</h2>
						</StyledLink>
					</div>
					<div className={styles.showcase}>
						<StyledLink href="/about">
							<WorkShowcase images={meImages} />
							<h2 className={styles.heading}>About</h2>
						</StyledLink>
					</div>
				</div>
			</main>

			<Footer />
		</>
	);
}
