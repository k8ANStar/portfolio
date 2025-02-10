"use client";
import Header from "@/components/atoms/Header";
import Footer from "@/components/atoms/Footer";
import styles from "./page.module.css";
import Image from "next/image";
import ImageCarousel from "@/components/molecules/ImageCarousel";

export default function CivicaProject() {
	const surveyImages = [
		"/images/surveyresults1.png",
		"/images/surveyresults2.png",
		"/images/surveyresults3.png",
		"/images/surveyresults4.png",
		"/images/surveyresults5.png",
		"/images/surveyresults6.png",
		"/images/surveyresults7.png",
		"/images/surveyresults8.png",
		"/images/surveyresults9.png",
		"/images/surveyresults10.png",
	];
	const compImages = [
		"/images/compan1.png",
		"/images/compan2.png",
		"/images/compan3.png",
		"/images/compan4.png",
		"/images/compan5.png",
		"/images/compan6.png",
		"/images/compan7.png",
		"/images/compan18.png",
	];
	const personaImages = [
		"/images/civicaPersona1.png",
		"/images/civicaPersona2.png",
	];

	const caseImages = [
		"/images/case1.png",
		"/images/case2.png",
		"/images/case3.png",
		"/images/case4.png",
		"/images/case5.png",
		"/images/case6.png",
		"/images/case7.png",
	];
	return (
		<>
			<Header />
			<main className={styles.main}>
				<div className={styles.container}>
					<div className={styles.imageContainer}>
						<Image
							src="/images/mockup-1.webp"
							alt="Civica App Mockup"
							width={600}
							height={700}
						/>
					</div>
					<div className={styles.infoContainer}>
						<h1 className={styles.headingOne}>Civica Web Application</h1>
						<h2 className={styles.headingTwo}>A Comprehensive Case Study</h2>
						<h3 className={styles.type}>UX/UI Design</h3>
						<p className={styles.paragraph}>
							<strong>Timeline:</strong> 3 months
						</p>
						<p className={styles.paragraph}>
							<strong>Role:</strong> Fullstack Developer, UX/UI Designer,
							Researcher
						</p>
						<p className={styles.paragraph}>
							<strong>Tools:</strong> React, Firebase, VSCode, Creative Cloud
							Suite, Google Suite
						</p>

						<a
							href="https://www.civicalaw.ca/"
							className={styles.chip}
							target="_blank"
							rel="noopener noreferrer"
						>
							View Website
						</a>
					</div>
				</div>
				<h2 className={styles.headings}>Summary</h2>
				<div className={styles.container}>
					<div className={styles.info}>
						<p>
							Civica is a legal aid application designed to provide accessible
							resources and guidance for women facing legal challenges. The
							project aims to address the gap in affordable and comprehensible
							legal assistance, particularly for immigrant women and those from
							marginalized communities. Civica empowers users by offering
							step-by-step guides, connections to helplines and support
							organizations, and curated legal resources focused on common
							issues like workplace exploitation, domestic violence, and rental
							harassment.
						</p>
					</div>
					<div className={styles.imageContainer}>
						<Image
							src="/images/mockupVid-1.gif"
							alt="Civica App Mockup"
							width={600}
							height={500}
						/>
					</div>
				</div>
				<h2 className={styles.headings}>Problem</h2>
				<div className={styles.container}>
					<div className={styles.info}>
						<p>
							Legal assistance can be prohibitively expensive and inaccessible
							for women in vulnerable situations, such as immigrant caregivers
							or domestic violence survivors. These individuals often lack
							resources, awareness of their rights, or confidence in navigating
							complex legal systems. Existing services are either costly or not
							user-friendly, creating a significant barrier to justice. Civica
							was conceptualized to bridge this gap by providing accessible,
							straightforward, and supportive resources tailored to women's
							unique challenges.
						</p>
					</div>
					<div className={styles.imageContainer}>
						<Image
							src="/images/MacBookmock.png"
							alt="Civica App Mockup"
							width={800}
							height={600}
						/>
					</div>
				</div>
				<h2 className={styles.headings}>Challenges</h2>
				<h3 className={styles.subHeading}>
					{" "}
					Designing Civica required addressing the following challenges
				</h3>
				<div className={styles.container}>
					<div className={styles.info}>
						<p>
							<ul>
								<li className={styles.list}>
									<strong>User-Centric Design:</strong> The app needed to be
									intuitive for users with varying levels of tech literacy.
								</li>
								<li className={styles.list}>
									<strong>Inclusive Content: </strong>Resources had to cater to
									diverse legal needs, including labor laws, domestic abuse, and
									immigration issues.
								</li>
								<li className={styles.list}>
									<strong>Trust and Accessibility:</strong> Building trust
									through design elements while maintaining simplicity for a
									non-intimidating experience.
								</li>

								<li className={styles.list}>
									<strong>Limited Budget:</strong> Developing a cost-efficient
									solution for users who could not afford traditional legal aid.
								</li>
							</ul>
						</p>
					</div>
					<div className={styles.imageContainer}>
						<Image
							src="/images/mockupVid-3.gif"
							alt="Civica App Mockup"
							width={600}
							height={500}
						/>
					</div>
				</div>
				<h2 className={styles.headings}>Solutions</h2>
				<h3 className={styles.subHeading}>
					The app's design prioritizes clarity, empathy, and accessibility
				</h3>
				<div className={styles.container}>
					<div className={styles.info}>
						<p>
							<ul>
								<li className={styles.list}>
									<strong>User Personas:</strong> Developed based on in-depth
									research, personas highlighted the specific needs of users
									like immigrant women or live-in caregivers.
								</li>
								<li className={styles.list}>
									<strong>Visual Design:</strong> A calming color palette,
									rounded UI elements, and clear typography were chosen to
									create a welcoming environment.
								</li>
								<li className={styles.list}>
									<strong>Step-by-Step Guides:</strong> Interactive,
									plain-language guides were implemented for common legal
									issues, with visual cues and tooltips to assist navigation.
								</li>

								<li className={styles.list}>
									<strong>Resource Connectivity:</strong> Links to regional
									helplines and women's rights organizations were seamlessly
									integrated into the app for immediate support.
								</li>

								<li className={styles.list}>
									<strong>Technology Stack:</strong> The front end was built
									using React Native for cross-platform functionality, ensuring
									the app was accessible on both iOS and Android.
								</li>
							</ul>
						</p>
					</div>
					<div className={styles.imageContainer}>
						<Image
							src="/images/hand.webp"
							alt="Civica App Mockup"
							width={700}
							height={500}
						/>
					</div>
				</div>
				<h2 className={styles.headings}>Research</h2>
				<h3 className={styles.subHeading}>Cases</h3>
				<div className={styles.caseContainer}>
					<ImageCarousel images={caseImages} />
				</div>
				<h3 className={styles.subHeading}>Personas</h3>
				<div className={styles.personaContainer}>
					<ImageCarousel images={personaImages} />
				</div>
				<h3 className={styles.subHeading}>Competitive Analysis</h3>
				<div className={styles.compContainer}>
					<ImageCarousel images={compImages} />
				</div>
				<h3 className={styles.subHeading}>Survey Results</h3>
				<div className={styles.compContainer}>
					<ImageCarousel images={surveyImages} className={styles.imgCont} />
				</div>

				<h2 className={styles.headings}>Design Process</h2>
				<h3 className={styles.subHeading}>Color Palettes</h3>
				<h4 className={styles.miniHeading}>First Iteration</h4>
				<div className={styles.colorPalette}>
					<div
						className={styles.color}
						style={{ backgroundColor: "#374375" }}
					></div>
					<div
						className={styles.color}
						style={{ backgroundColor: "#BABDE2" }}
					></div>
					<div
						className={styles.color}
						style={{ backgroundColor: "#FFFCF5", border: "1px solid #000" }}
					></div>
					<div
						className={styles.color}
						style={{ backgroundColor: "#895159" }}
					></div>
					<div
						className={styles.color}
						style={{ backgroundColor: "#DFAEA1" }}
					></div>
				</div>
				<h4 className={styles.miniHeading}>Final Iteration</h4>
				<div className={styles.colorPalette}>
					<div
						className={styles.color}
						style={{ backgroundColor: "#313889" }}
					></div>
					<div
						className={styles.color}
						style={{ backgroundColor: "#909FF2" }}
					></div>
					<div
						className={styles.color}
						style={{ backgroundColor: "#66B2DA" }}
					></div>
					<div
						className={styles.color}
						style={{ backgroundColor: "#FDFFFF", border: "1px solid #000" }}
					></div>
					<div
						className={styles.color}
						style={{ backgroundColor: "#EAF0F6" }}
					></div>
					<div
						className={styles.color}
						style={{ backgroundColor: "#FEFFFD", border: "1px solid #000" }}
					></div>

					<div
						className={styles.color}
						style={{ backgroundColor: "#0E121E" }}
					></div>
				</div>
				<h3 className={styles.subHeading}>Typography</h3>
				<Image
					src="/images/font.png"
					alt="Typography"
					width={400}
					height={350}
				/>
				<Image
					src="/images/spacing.png"
					alt="Typography"
					width={400}
					height={350}
				/>
				<h3 className={styles.subHeading}>Wireframes</h3>
				
			</main>

			<Footer />
		</>
	);
}
