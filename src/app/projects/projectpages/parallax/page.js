"use client";
import { useEffect } from "react";
import Image from "next/image";
import Header from "@/components/atoms/Header";
import Footer from "@/components/atoms/Footer";
import styles from "./page.module.css";

const locations = {
	Bali: {
		description:
			"After a full day of motorbiking through winding island roads, we ended the adventure on the shores of Nusa Lembongan, where the sky burned in hues of gold and tangerine. The waves whispered against the sand, and for a moment, time stood still.",
	},
	France: {
		description:
			"The sky was a masterpiece—deep purples and stormy blues melting into the horizon as we walked the boardwalk of Evian-les-Bains. Just as the sun dipped behind the lake, the rain arrived, soft and sudden, turning the world into a dreamlike haze. We ran for cover, drenched but laughing, under a sky painted by nature's most dramatic brushstrokes.",
	},
	Italy: {
		description:
			"Piazzale Michelangelo at sunset—where golden light spills over terracotta rooftops and the Arno River glows like liquid fire. We climbed with the crowd, anticipation buzzing in the warm air. Then, as the sun dipped low, Florence unfolded before us, timeless and breathtaking, a city bathed in twilight's embrace.",
	},
	Greece: {
		description:
			"Perched atop ancient rock formations, we watched as the sky ignited in hues of amber and rose, casting long shadows over Meteora's otherworldly landscape. The monasteries stood silent, timeless, as the last light kissed the mountaintops. A sunset not just seen, but felt—vast, sacred, and unforgettable.",
	},
};

export default function ParallaxProject() {
	useEffect(() => {
		const sections = document.querySelectorAll(`.${styles.parallaxSection}`);

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add(styles.active);
					} else {
						entry.target.classList.remove(styles.active);
					}
				});
			},
			{ threshold: 0.3 }
		);

		sections.forEach((section) => observer.observe(section));

		return () => sections.forEach((section) => observer.unobserve(section));
	}, []);

	return (
		<>
			<Header />
			<div className={styles.floatingImageContainer}>
				<Image
					className={styles.floatingImage}
					src="/images/sleeping2.png"
					alt="Floating Object"
					width={200}
					height={200}
				/>
			</div>
			<header className={styles.header}>
				<h1 className={styles.headerTitle}>Parallax Project</h1>
				<span className={styles.headerSubtitle}>
					An immersive journey through stunning sunsets.
				</span>
				<div className={styles.headerMask}></div>
			</header>
			<main>
				{Object.entries(locations).map(([location, { description }]) => (
					<section
						key={location}
						className={styles.parallaxSection}
						data-location={location.toLowerCase()}
					>
						<div className={styles.textWrapper}>
							<h1 className={styles.title}>{location}</h1>
							<p className={styles.description}>{description}</p>
						</div>
						<div className={styles.foregroundMask}></div>
					</section>
				))}
			</main>
			<Footer />
		</>
	);
}
