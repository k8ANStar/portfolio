import { useState } from "react";
import Image from "next/image";
import styles from "./ImageCarousel.module.css";

export default function ImageCarousel({ images }) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrevClick = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
	};

	const handleNextClick = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		);
	};

	return (
		<div className={styles.carouselContainer}>
			<button className={styles.arrow} onClick={handlePrevClick}>
				&#8592;
			</button>
			<div className={styles.imageContainer}>
				<Image
					src={images[currentIndex]}
					alt={`Image ${currentIndex + 1}`}
					layout="responsive"
					width={600}
					height={800}
				/>
			</div>
			<button className={styles.arrow} onClick={handleNextClick}>
				&#8594;
			</button>
		</div>
	);
}
