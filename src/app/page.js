"use client";
import { useEffect } from "react";
import Header from "@/components/atoms/Header";
import Footer from "@/components/atoms/Footer";
import styles from "./page.module.css";
import styled from "styled-components";

export default function Home() {
	useEffect(() => {
		const image = document.querySelector(`.${styles.portrait}`);
		if (image) {
			image.classList.add(styles.pulsate);
		}
	}, []);

	const projects = [
		{
			title: "Civica Web App",
			description: "A comprehensive case study on UX/UI design.",
			image: "/images/civicacover.png",
			link: "/projects/projectpages/civica",
		},
		{
			title: "Print Magazine",
			description: "A magazine design for a local Japanese garden.",
			image: "/images/printmag.png",
			link: "/projects/projectpages/print",
		},
		{
			title: "Halloween Children's Book",
			description: "A digital book design for children.",
			image: "/images/halloweencover.png",
			link: "/projects/projectpages/halloween",
		},
		{
			title: "Benefits of Vitamin D",
			description: "An animated infographic on the benefits of Vitamin D.",
			image: "/images/vitamindcover.png",
			link: "/projects/projectpages/vitamind",
		},
	];

	const StyledLink = styled.a`
		text-decoration: none;
	`;

	return (
		<>
			<meta name="Kate's Portfolio" content="Kate's Portfolio" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>Kate's Portfolio</title>
			<Header />
			<main className={styles.home}>
				<section className={styles.hero}>
					<div className={styles.text}>
						<h1>Hello, I'm Kate Starchuk</h1>
						<h2>UX/UI Designer | Frontend Developer</h2>
						<p>
							Based in Vancouver, BC, I design functional, user-friendly, and
							visually engaging experiences with a passion for intuitive
							problem-solving.
						</p>
					</div>
				</section>

				<h2 className={styles.featuredTitle}>Featured Projects</h2>
				<section className={styles.featuredProjects}>
					<div className={styles.projectsContainer}>
						{projects.map((project, index) => (
							<StyledLink href={project.link} key={index}>
								<div className={styles.projectCard}>
									<img
										src={project.image}
										alt={project.title}
										className={styles.projectImage}
									/>
									<h3 className={styles.projectTitle}>{project.title}</h3>
									<p className={styles.projectDescription}>
										{project.description}
									</p>
								</div>
							</StyledLink>
						))}
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
}
