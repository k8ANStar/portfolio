"use client";
import Header from "@/components/atoms/Header";
import Footer from "@/components/atoms/Footer";
import styles from "./page.module.css";
import Image from "next/image";
import ImageCarousel from "@/components/molecules/ImageCarousel";
import ImageComparisonSlider from "@/components/molecules/ImageComparisonSlider";
export default function QuestifyProject() {
	const personaImages = [
		"/images/persona1quest.png",
		"/images/persona3quest.png",
		"/images/persona2quest.png",
	];

	const testingImages = [
		"/images/questusability1.png",
		"/images/questusability2.png",
		"/images/questusability3.png",
		"/images/questusability4.png",
		"/images/questusability5.png",
		"/images/questusability6.png",
		"/images/questusability7.png",
		"/images/questusability8.png",
		"/images/questusability9.png",
		"/images/questusability10.png",
		"/images/questusability11.png",
		"/images/questusability12.png",
		"/images/questusability13.png",
		"/images/questusability14.png",
	];
	return (
		<>
			<Header />
			<main className={styles.main}>
				<div className={styles.container}>
					<div className={styles.imageContainer}>
						<Image
							src="/images/questifyhero.png"
							alt="Quesifty App Mockup"
							width={900}
							height={600}
						/>
					</div>
					<div className={styles.infoContainer}>
						<h1 className={styles.headingOne}>Questify Web Application</h1>
						<h2 className={styles.headingTwo}>A Comprehensive Case Study</h2>
						<h3 className={styles.type}>UX/UI Design</h3>
						<p className={styles.paragraph}>
							<strong>Timeline:</strong> 5 months
						</p>
						<p className={styles.paragraph}>
							<strong>Role:</strong> Lead Developer, UX/UI Designer, Researcher
						</p>
						<p className={styles.paragraph}>
							<strong>Tools:</strong> Next.js, VSCode, Creative Cloud Suite,
							Google Suite
						</p>
						<p className={styles.paragraph}>
							<strong>Description:</strong> Questify is an interactive quiz app
							that takes users on an adventure through British Columbia's
							nature, history, and urban landscapes. Explore the province's
							breathtaking wilderness, uncover its rich history, and test your
							knowledge of vibrant city life—all through engaging quests. Each
							challenge unlocks new facts, fun trivia, and rewards, making
							learning about BC an exciting journey.
						</p>
						<a
							href="https://questify-application.vercel.app/"
							className={styles.chip}
							target="_blank"
							rel="noopener noreferrer"
						>
							View Website
						</a>
						<a
							href="https://www.figma.com/proto/FLKIsoglVdn51PTYezSN6j/MDIA-2106---Questify-Set-F?node-id=76-208&starting-point-node-id=76%3A208"
							className={styles.chip}
							target="_blank"
							rel="noopener noreferrer"
						>
							Prototype
						</a>
						<a
							href="https://questify-a5-styleguide.vercel.app/"
							className={styles.chip}
							target="_blank"
							rel="noopener noreferrer"
						>
							Style Guide
						</a>
					</div>
				</div>
				<h2 className={styles.headings}>Problem</h2>
				<div className={styles.container}>
					<div className={styles.info}>
						<p>
							Many British Columbians and visitors want to learn more about the
							province's nature, history, and urban landscapes, but there are
							limited engaging and interactive ways to do so. Traditional
							learning methods can be dull or inaccessible, and existing quiz
							apps often lack localized content specific to BC. Additionally,
							users need a fun, easy-to-use experience that keeps them engaged
							over time.
							<h4>Site Map Visulization</h4>
							<p>
								The site map is included as a visual representation of
								Questify's initial structure, highlighting the navigation flow
								and organization of content. It helps illustrate the core
								challenge of designing a seamless user experience while ensuring
								clear category selection between BC's nature, history, and urban
								quizzes. By mapping out the app's structure, we identified
								potential navigation issues, such as users struggling to switch
								between quiz categories or access their progress easily.
							</p>
						</p>
					</div>
					<div className={styles.imageContainer}>
						<Image
							src="/images/questsitemap.png"
							alt="Questify Sitemap"
							width={800}
							height={500}
						/>
					</div>
				</div>

				<h2 className={styles.headings}>Challenges</h2>
				<div className={styles.container}>
					<div className={styles.info}>
						<ul>
							<li className={styles.list}>
								<strong>Lack of Interactive Learning Experiences:</strong> Many
								people want to learn more about BC but struggle to find engaging
								ways to do so.
							</li>
							<li className={styles.list}>
								<strong>Limited Awareness of BC's Diverse Aspects: </strong>
								While BC is known for its natural beauty, its urban culture and
								history are often overlooked.
							</li>
							<li className={styles.list}>
								<strong>Trust and Accessibility:</strong> Building trust through
								design elements while maintaining simplicity for a
								non-intimidating experience.
							</li>

							<li className={styles.list}>
								<strong>User Retention & Engagement:</strong> Keeping users
								interested and motivated to continue playing over time.
							</li>
						</ul>
					</div>
					<div className={styles.imageContainer}>
						<Image
							src="/images/learningquest.png"
							alt="questify learning screen"
							width={250}
							height={500}
						/>

						<Image
							src="/images/questhome.png"
							alt="questify home screen"
							width={250}
							height={500}
						/>
						<Image
							src="/images/sidemenu.png"
							alt="questify side menu screen"
							width={250}
							height={500}
						/>
					</div>
				</div>
				<h2 className={styles.headings}>Solutions</h2>

				<div className={styles.container}>
					<div className={styles.info}>
						<ul>
							<li className={styles.list}>
								<strong>Gamified Learning Experience:</strong> Questify turns
								learning into a quest, rewarding users for completing challenges
								and progressing through different levels.
							</li>
							<li className={styles.list}>
								<strong>Balanced Content Across Three Themes:</strong> The app
								ensures equal representation of BC's nature, history, and urban
								aspects to provide a well-rounded experience.
							</li>
							<li className={styles.list}>
								<strong> User-Friendly Design & Engagement Features:</strong>
								Intuitive navigation, leaderboards, and achievements encourage
								users to return and explore more.
							</li>
						</ul>
					</div>
					<div className={styles.imageContainer}>
						<Image
							src="/images/questresults.png"
							alt="questify results screen"
							width={250}
							height={500}
						/>

						<Image
							src="/images/questquiz.png"
							alt="questify quiz screen"
							width={250}
							height={500}
						/>
						<Image
							src="/images/questtacker.png"
							alt="questify tracker screen"
							width={250}
							height={500}
						/>
					</div>
				</div>

				<h2 className={styles.headings}>Research</h2>
				<h3 className={styles.subHeading}>Personas</h3>

				<div className={styles.container}>
					<div className={styles.info}>
						<ul>
							<li className={styles.list}>
								<strong>Persona 1: Emily (Young Professional, Single):</strong>A
								busy 28-year-old who enjoys quick, engaging ways to learn about
								BC in her free time.
							</li>
							<li className={styles.list}>
								<strong>Persona 2: Mark (40, Dad with Kids): </strong>A father
								looking for fun, educational activities to share with his kids
								while exploring BC.
							</li>
							<li className={styles.list}>
								<strong>
									Persona 3: Manny (Marketing Professional, In a Relationship):
								</strong>
								A 38-year-old who wants to stay informed about BC's history and
								urban development for work and social settings.
							</li>
						</ul>
					</div>

					<div className={styles.personaContainer}>
						<ImageCarousel images={personaImages} />
					</div>
				</div>

				<h3 className={styles.subHeading}>Usablity Report</h3>

				<div className={styles.container}>
					<div className={styles.info}>
						<ul>
							<li className={styles.list}>
								<strong>Navigation Issues:</strong> Some users found it
								difficult to switch between quiz categories.
							</li>
							<li className={styles.list}>
								<strong>Clarity of Questions: </strong> A few quiz questions
								were too vague or unclear.
							</li>
							<li className={styles.list}>
								<strong>Lack of Immediate Feedback :</strong> Users wanted
								explanations for incorrect answers.
							</li>

							<li className={styles.list}>
								<strong>Engagement Features :</strong> Participants suggested
								more interactive elements like achievements and daily
								challenges.
							</li>
						</ul>
					</div>

					<div className={styles.testingContainer}>
						<ImageCarousel images={testingImages} />
					</div>
				</div>

				<h2 className={styles.headings}>Design Process</h2>
				<h3 className={styles.subHeading}>Color Palette</h3>

				<div className={styles.colorPalette}>
					<div
						className={styles.color}
						style={{ backgroundColor: "#1C6C5F" }}
					></div>
					<div
						className={styles.color}
						style={{ backgroundColor: "#669788" }}
					></div>
					<div
						className={styles.color}
						style={{ backgroundColor: "#8DC63F" }}
					></div>
					<div
						className={styles.color}
						style={{ backgroundColor: "#98FF88" }}
					></div>
					<div
						className={styles.color}
						style={{ backgroundColor: "#F7AB44" }}
					></div>
					<div
						className={styles.color}
						style={{ backgroundColor: "#FFC805" }}
					></div>
					<div
						className={styles.color}
						style={{ backgroundColor: "#FFDCC8" }}
					></div>
				</div>
				<h3 className={styles.subHeading}>Typography</h3>
				<div className={styles.container}>
					<div className={styles.info}>
						<ul>
							<li className={styles.list}>
								<strong>Primary Font: </strong>
								Sora was chossen for the body text because of its modern, clean,
								and highly readable design. This font ensures that quiz
								questions and app instructions are easy to follow, providing a
								smooth reading experience across all devices.
							</li>
							<li className={styles.list}>
								<strong>Secondary Font: </strong> Paytone One was selected for
								headings due to its bold, eye-catching style. It adds a sense of
								excitement and energy, making key sections of the app stand out
								while maintaining a friendly and engaging feel.
							</li>
							<li className={styles.list}>
								<strong>Logo Font: </strong> The Zion font gives the Questify
								logo a unique and adventurous look. Its strong, distinctive
								lettering enhances the theme of exploration and discovery,
								making the logo memorable and reinforcing the app's identity.
							</li>
						</ul>
					</div>
					<Image
						src="/images/questfonts.png"
						alt="Typography"
						width={900}
						height={450}
					/>
				</div>

				<h3 className={styles.subHeading}>Logo and Mascot</h3>
				<div className={styles.container}>
					<div className={styles.info}>
						<ul>
							<li className={styles.list}>
								<strong>Logo:</strong> The Questify logo features a yellow flag
								with the app name displayed on it, symbolizing adventure,
								discovery, and achievement. The flag represents the idea of
								completing quests and exploring new knowledge about BC's nature,
								history, and urban landscapes. The bold yet simple design
								ensures the logo is recognizable and inviting.
							</li>
							<li className={styles.list}>
								<strong>Mascot: </strong> JayC is the friendly and quirky mascot
								of Questify, wearing an orange helmet that gives him a slightly
								derpy but endearing appearance. He embodies the spirit of
								exploration and curiosity, guiding users through their learning
								journey. His cute and approachable design makes the app feel fun
								and engaging, especially for users of all ages.
							</li>
						</ul>
					</div>
					<div className={styles.icons}>
						<Image
							src="/images/questify_logo.png"
							alt="questify logo"
							width={270}
							height={200}
						/>
						<Image
							src="/images/jayc1.png"
							alt="icon 3"
							width={180}
							height={200}
						/>
					</div>
				</div>
				<h3 className={styles.subHeading}>Icons</h3>
				<div className={styles.container}>
					<div className={styles.info}>
						<ul>
							<li className={styles.list}>
								<strong>Orange Icons:</strong> The orange icons were used in the
								side menu to represent the different sections of the app.
							</li>
							<li className={styles.list}>
								<strong>Character Icons: </strong> These character icons
								represented each creator of the app.
							</li>
						</ul>
					</div>

					<div className={styles.icons}>
						<Image
							src="/images/About-Creators-icon.png"
							alt="icon about creators"
							width={50}
							height={50}
						/>
						<Image
							src="/images/FAQ-Icon.png"
							alt="faq icon"
							width={50}
							height={50}
						/>
						<Image
							src="/images/Home-Icon.png"
							alt="home icon"
							width={50}
							height={50}
						/>
						<Image
							src="/images/Learning-Icon.png"
							alt="learning icon"
							width={50}
							height={50}
						/>
						<Image
							src="/images/Quiz-icon.png"
							alt="quiz icon"
							width={50}
							height={50}
						/>
						<Image
							src="/images/Settings-icon.png"
							alt="settings icon"
							width={50}
							height={50}
						/>
						<Image
							src="/images/icon1.png"
							alt="icon 3"
							width={69}
							height={73}
						/>
						<Image
							src="/images/icon2.png"
							alt="icon 2"
							width={80}
							height={70}
						/>
						<Image
							src="/images/icon3.png"
							alt=" icon 3"
							width={70}
							height={70}
						/>
					</div>
				</div>
				<h3 className={styles.subHeading}>Graphics</h3>
				<div className={styles.container}>
					<div className={styles.info}>
						<ul>
							<li className={styles.list}>
								<strong>Nature:</strong>Focuses on British Columbia's diverse
								ecosystems, wildlife, and natural landmarks. Includes quiz
								questions about forests, mountains, oceans, and provincial
								parks. Encourages users to learn about conservation efforts and
								outdoor activities.
							</li>
							<li className={styles.list}>
								<strong>Urban: </strong> Highlights BC's cities, architecture,
								culture, and modern development. Covers topics such as
								landmarks, transportation, local businesses, and entertainment.
								Showcases the growth and diversity of urban life in the
								province.
							</li>
							<li className={styles.list}>
								<strong>History: </strong> Explores BC's rich past, Indigenous
								heritage, and significant historical events. Includes quiz
								topics on explorers, early settlements, political milestones,
								and cultural traditions. Helps users understand the historical
								context that shaped British Columbia today.
							</li>
						</ul>
					</div>
					<div className={styles.conceptDrawings}>
						<Image
							src="/images/nature1.png"
							alt="nature graphics 1"
							width={400}
							height={200}
						/>
						<Image
							src="/images/nature2.png"
							alt="nature graphic 2"
							width={400}
							height={200}
						/>
						<Image
							src="/images/urban1.png"
							alt="urban graphics 1"
							width={400}
							height={200}
						/>
						<Image
							src="/images/urban2.png"
							alt="urban graphics 2"
							width={400}
							height={200}
						/>
						<Image
							src="/images/history1.png"
							alt="history graphics 1"
							width={400}
							height={200}
						/>
						<Image
							src="/images/history2.png"
							alt="history graphics 2"
							width={400}
							height={200}
						/>
					</div>
				</div>

				<h3 className={styles.subHeading}>Wireframes</h3>
				<div className={styles.container}>
					<div className={styles.info}>
						<ul>
							<li className={styles.list}>
								<strong>Low Fidelity (Top):</strong> A basic wireframe
								showcasing the initial layout and structure of Questify. It
								focused on navigation flow, screen placement, and key
								interactions without detailed design elements.
							</li>
							<li className={styles.list}>
								<strong>High Fidelity (Bottom): </strong> A fully designed
								version of the app with final UI elements, colors, typography,
								and interactive components. This prototype closely resembles the
								finished product, allowing for refined usability testing and
								feedback.
							</li>
						</ul>
					</div>
					<div className={styles.fidelity}>
						<Image
							src="/images/questlowfid.jpg"
							alt="history graphics 2"
							width={500}
							height={600}
						/>
						<Image
							src="/images/questhighfid.jpg"
							alt="history graphics 2"
							width={800}
							height={600}
						/>
					</div>
				</div>
				<h2 className={styles.headings}>Walkthrough Video</h2>
				<div className={styles.container}>
					<div className={styles.info}>
						<p>
							This walkthrough video provides an overview of Questify,
							showcasing how users navigate the app, select quiz categories,
							answer trivia questions, and track their progress. It highlights
							the app's interactive features and user-friendly design, offering
							a step-by-step look at how Questify makes learning about BC's
							nature, history, and urban landscapes engaging and fun.
						</p>
					</div>
					<div className={styles.imageContainer}>
						<iframe
							src="https://drive.google.com/file/d/1UBEUtg6JvPCXLe2KNy-1IaeJkekelyJz/preview"
							width={1000}
							height={500}
							allow="autoplay"
						></iframe>
					</div>
				</div>
			</main>

			<Footer />
		</>
	);
}
