"use client";
import React from "react";
import HTMLFlipBook from "react-pageflip";
import Image from "next/image";
import styles from "./Flipbook.module.css";

export default function Flipbook({ images }) {
	if (!images || images.length === 0) {
		return <div>No images to display</div>;
	}

	return (
		<div className={styles.bookContainer}>
			<HTMLFlipBook
				width={600}
				height={800}
				startPage={1}
				className={styles.book}
			>
				{/* Cover Page */}
				<div className={styles.coverPage}>
					<Image src={images[0]} alt="Cover Page" width={600} height={800} />
				</div>

				{/* Blank Page to ensure the first page stands alone */}
				<div className={styles.blankPage}></div>

				{/* Inner Pages */}
				{images.slice(1, -1).map((image, index) => (
					<div key={index} className={styles.page}>
						<Image
							src={image}
							alt={`Page ${index + 1}`}
							width={600}
							height={800}
						/>
					</div>
				))}

				{/* Last Page */}
				<div className={styles.lastPage}>
					<Image
						src={images[images.length - 1]}
						alt="Last Page"
						width={600}
						height={800}
					/>
				</div>
			</HTMLFlipBook>
		</div>
	);
}
