"use client";
import Header from "@/components/atoms/Header";
import Footer from "@/components/atoms/Footer";
import styles from "./page.module.css";
import Image from "next/image";
import ImageCarousel from "@/components/molecules/ImageCarousel";
import ImageComparisonSlider from "@/components/molecules/ImageComparisonSlider";
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
		"/images/compan8.png",
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
	const testingImages = [
		"/images/civicausability1.png",
		"/images/civicausability2.png",
		"/images/civicausability3.png",
	];

	return (
		<>
			<Header />
			<main className={styles.main}>
				<div className={styles.container}>
					<div className={styles.imageContainer}>
						<Image
							src="/images/mockupVid-1.gif"
							alt="Civica App Mockup"
							width={800}
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
						<p className={styles.paragraph}>
							<strong>Description:</strong> Civica is a legal aid app providing
							accessible guidance for women, especially immigrants and
							marginalized groups. It offers step-by-step guides, legal
							resources, and connections to support services for issues like
							workplace exploitation, domestic violence, and rental harassment.
						</p>
						<a
							href="https://www.civicalaw.ca/"
							className={styles.chip}
							target="_blank"
							rel="noopener noreferrer"
						>
							View Website
						</a>
						<a
							href="https://www.figma.com/proto/0NxjFtht1BziwLShVjdx5B/Civica-2.0?node-id=30-1676&starting-point-node-id=30%3A1600"
							className={styles.chip}
							target="_blank"
							rel="noopener noreferrer"
						>
							Prototype
						</a>
						<a
							href="https://www.instagram.com/civicalaw_/"
							className={styles.chip}
							target="_blank"
							rel="noopener noreferrer"
						>
							Instagram
						</a>
					</div>
				</div>
				<h2 className={styles.headings}>Problem</h2>
				<div className={styles.container}>
					<div className={styles.info}>
						<p className={styles.paragraph}>
							Legal aid is often costly and inaccessible for vulnerable women,
							such as immigrant caregivers and abuse survivors. Lacking
							resources and legal awareness, they face barriers to justice.
							Civica bridges this gap with accessible, user-friendly support.
						</p>
					</div>
					<div className={styles.probContainer}>
						<Image
							src="/images/homecivica.png"
							alt="home civica"
							width={260}
							height={500}
						/>
						<Image
							src="/images/professionalcivica.png"
							alt="professional civica"
							width={260}
							height={500}
						/>
						<Image
							src="/images/supportciv.png"
							alt="support civcic"
							width={260}
							height={500}
						/>
					</div>
				</div>

				<h2 className={styles.headings}>Challenges</h2>
				<h3 className={styles.subHeading}>
					Designing Civica required addressing the following challenges
				</h3>
				<div className={styles.container}>
					<div className={styles.info}>
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
								<strong>Trust and Accessibility:</strong> Building trust through
								design elements while maintaining simplicity for a
								non-intimidating experience.
							</li>

							<li className={styles.list}>
								<strong>Limited Budget:</strong> Developing a cost-efficient
								solution for users who could not afford traditional legal aid.
							</li>
						</ul>
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
						<ul>
							<li className={styles.list}>
								<strong>User Personas:</strong> Developed based on in-depth
								research, personas highlighted the specific needs of users like
								immigrant women or live-in caregivers.
							</li>
							<li className={styles.list}>
								<strong>Visual Design:</strong> A calming color palette, rounded
								UI elements, and clear typography were chosen to create a
								welcoming environment.
							</li>
							<li className={styles.list}>
								<strong>Step-by-Step Guides:</strong> Interactive,
								plain-language guides were implemented for common legal issues,
								with visual cues and tooltips to assist navigation.
							</li>

							<li className={styles.list}>
								<strong>Resource Connectivity:</strong> Links to regional
								helplines and women's rights organizations were seamlessly
								integrated into the app for immediate support.
							</li>

							<li className={styles.list}>
								<strong>Technology Stack:</strong> The front end was built using
								React Native for cross-platform functionality, ensuring the app
								was accessible on both iOS and Android.
							</li>
						</ul>
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
				<h3 className={styles.subHeading}>Cases </h3>
				<div className={styles.container}>
					<div className={styles.info}>
						<p className={styles.list}>
							A collection of real-world legal challenges faced by women,
							particularly immigrants and marginalized groups. These cases
							highlight common issues like workplace exploitation, domestic
							violence, and rental harassment, demonstrating how Civica provides
							accessible guidance and resources.
						</p>
					</div>

					<div className={styles.caseContainer}>
						<ImageCarousel images={caseImages} />
					</div>
				</div>
				<h3 className={styles.subHeading}>Personas</h3>
				<div className={styles.container}>
					<div className={styles.info}>
						<p className={styles.list}>
							Detailed user profiles representing Civica's target audience,
							including their demographics, pain points, and behaviors. These
							personas help shape Civica's features by ensuring the platform
							meets the real needs of women seeking legal assistance.
						</p>
					</div>
					<div className={styles.personaContainer}>
						<Image
							src="/images/civicaPersona1.png"
							alt="persona 1"
							width={450}
							height={700}
						/>
						<Image
							src="/images/civicaPersona2.png"
							alt="persona 2"
							width={450}
							height={700}
						/>
					</div>
				</div>
				<h3 className={styles.subHeading}>Competitive Analysis</h3>
				<div className={styles.container}>
					<div className={styles.info}>
						<p className={styles.paragraph}>
							A comparison of existing legal aid services, identifying gaps in
							affordability, accessibility, and usability. This research
							highlights Civica's unique approach to bridging the gap in legal
							support for women.
						</p>
					</div>
					<div className={styles.compContainer}>
						<ImageCarousel images={compImages} />
					</div>
				</div>
				<h3 className={styles.subHeading}>Survey Results</h3>
				<div className={styles.container}>
					<div className={styles.info}>
						<p className={styles.paragraph}>
							Data-driven insights from user research, focusing on the
							challenges women face when seeking legal help. The findings guided
							Civica's development to ensure it meets user needs effectively.
						</p>
					</div>
					<div className={styles.compContainer}>
						<ImageCarousel images={surveyImages} />
					</div>
				</div>
				<h3 className={styles.subHeading}>Usability Testing</h3>
				<div className={styles.container}>
					<div className={styles.info}>
						<p className={styles.paragraph}>
							Hands-on testing of Civica's interface and features to refine its
							usability. Feedback from real users helped improve navigation,
							clarity, and accessibility, ensuring a seamless experience.
						</p>
					</div>
					<div className={styles.testingContainer}>
						<Image
							src="/images/civicausability1.png"
							alt="persona 1"
							width={380}
							height={500}
						/>
						<Image
							src="/images/civicausability2.png"
							alt="persona 2"
							width={380}
							height={500}
						/>
						<Image
							src="/images/civicausability3.png"
							alt="persona 2"
							width={380}
							height={500}
						/>
					</div>
				</div>
				<h2 className={styles.headings}>Design Process</h2>
				<h3 className={styles.subHeading}>Color Palette</h3>
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
				<div className={styles.container}>
					<div className={styles.info}>
						<ul>
							<li className={styles.list}>
								<strong>Primary Font:</strong> The primary font, Lexend, was
								chosen for its clarity and readability, particularly for users
								who may experience reading difficulties. Its clean and modern
								design ensures that text is easy to read across different
								devices and screen sizes.
							</li>
							<li className={styles.list}>
								<strong>Spacing: </strong>
								There was careful considerations in creating comfortable reading
								experience, with sufficient space between lines and letters to
								enhance legibility. This intentional spacing helps reduce visual
								clutter and improves overall user comprehension and
								accessibility.
							</li>
						</ul>
					</div>
					<div className={styles.typoContainer}>
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
					</div>
				</div>
				<h3 className={styles.subHeading}>Logo and Icons</h3>
				<div className={styles.container}>
					<div className={styles.info}>
						<ul>
							<li className={styles.list}>
								<strong>Logo:</strong> The Civica logo features two hearts
								coming together, symbolizing care, support, and unity, aligning
								with the app's mission to provide compassionate legal aid and
								empowerment for women.
							</li>
							<li className={styles.list}>
								<strong>Icons: </strong>
								The icons were designed to clearly represent each core feature,
								ensuring intuitive navigation. Each icon is simple and
								recognizable, guiding users to essential services like legal
								guides and mental health support.
							</li>
						</ul>
					</div>
					<div className={styles.icons}>
						<Image
							src="/images/civicalogo.png"
							alt="civilogo"
							width={120}
							height={90}
						/>
						<Image
							src="/images/supportDark.png"
							alt="Typography"
							width={100}
							height={90}
						/>
						<Image
							src="/images/docscanDark.png"
							alt="Typography"
							width={100}
							height={90}
						/>
						<Image
							src="/images/chatDark.png"
							alt="Typography"
							width={100}
							height={90}
						/>
						<Image
							src="/images/civicon1.png"
							alt="Typography"
							width={90}
							height={90}
						/>
						<Image
							src="/images/civicon2.png"
							alt="Typography"
							width={90}
							height={90}
						/>
						<Image
							src="/images/civicon3.png"
							alt="Typography"
							width={100}
							height={80}
						/>
						<Image
							src="/images/civicon4.png"
							alt="Typography"
							width={100}
							height={70}
						/>
					</div>
				</div>
				<h3 className={styles.subHeading}>Wireframes</h3>
				<div className={styles.container}>
					<div className={styles.info}>
						<ul>
							<li className={styles.list}>
								<strong>Low Fidelity Prototype (Top):</strong> On the top our
								first iteration featured a mascot, making the design feel more
								playful and juvenile. While visually engaging, it didn't align
								with the serious nature of a legal aid app, potentially
								affecting credibility and user trust.
							</li>
							<li className={styles.list}>
								<strong>High Fidelity Prototype (Bottom): </strong>
								The final wireframe on the right adopts a more professional and
								refined design, removing the mascot and focusing on a clean,
								structured layout. This shift ensures Civica conveys trust,
								reliability, and authority, making it more suitable for users
								seeking legal assistance.
							</li>
						</ul>
					</div>
					<div className={styles.imageContainer}>
						<Image
							src="/images/civicawireframes1.png"
							alt="Typography"
							width={700}
							height={430}
						/>
						<Image
							src="/images/civicawireframes2.png"
							alt="Typography"
							width={700}
							height={430}
						/>
					</div>
				</div>

				<h2 className={styles.headings}>Promotionals</h2>
				<h3 className={styles.subHeading}>Video</h3>
				<div className={styles.container}>
					<div className={styles.info}>
						<p>
							A compelling introduction to Civica, showcasing its mission,
							features, and impact. The video highlights real challenges women
							face, the gaps in existing legal aid services, and how Civica
							empowers users with accessible legal resources and support.
						</p>
					</div>
					<div className={styles.imageContainer}>
						<iframe
							src="https://drive.google.com/file/d/1jjsG_t9_f4lbwEW9TI6Oj7rTqX60weDT/preview"
							width={800}
							height={500}
							allow="autoplay"
						></iframe>
					</div>
				</div>
				<h3 className={styles.subHeading}>Business Card and Brochure</h3>
				<div className={styles.container}>
					<div className={styles.info}>
						<p>
							The brochure presents Civica's mission and services in a clear,
							engaging layout, using balanced text, imagery, and a professional
							color scheme to enhance readability and trust.
						</p>
						<p>
							The business card maintains a clean, modern design, ensuring key
							details are easily accessible while reinforcing Civica's brand
							identity and professionalism.
						</p>
					</div>
					<Image
						src="/images/businesscard.png"
						alt="business card"
						width={270}
						height={500}
					/>
					<div className={styles.brochure}>
						<Image
							src="/images/civicabrochure.png"
							alt="brochure 1"
							width={400}
							height={300}
						/>
						<Image
							src="/images/civicabrochure2.png"
							alt="brochure 2"
							width={400}
							height={300}
						/>
					</div>
				</div>
				<h2 className={styles.headings}>Key Takeaways</h2>

				<div className={styles.container}>
					<div className={styles.info}>
						<ul>
							<li className={styles.list}>
								<strong>Understanding User Needs:</strong> Conducting research
								on legal challenges faced by women, particularly in workplace
								exploitation, domestic violence, and immigration issues, helped
								shape the app's features.
							</li>
							<li className={styles.list}>
								<strong>AI Integration for Legal Assistance: </strong>
								Implementing AI-driven guidance to assist users in understanding
								legal rights and next steps.
							</li>
							<li className={styles.list}>
								<strong>Accessibility & Usability:</strong> Prioritizing a
								simple, intuitive UI to ensure accessibility for all users,
								including those with limited tech experience.
							</li>

							<li className={styles.list}>
								<strong>Privacy & Security Considerations:</strong> Ensuring the
								document scanning and storage process adhered to data protection
								best practices.
							</li>
							<li className={styles.list}>
								<strong>Scalability & Future Growth:</strong> Designing Civica
								to accommodate future expansions, such as additional legal
								resources and multilingual support.
							</li>
						</ul>
					</div>
					<div className={styles.imageContainer}>
						<Image
							src="/images/mockup-lap.webp"
							alt="Civica App Mockup"
							width={700}
							height={450}
						/>
					</div>
				</div>
			</main>

			<Footer />
		</>
	);
}
