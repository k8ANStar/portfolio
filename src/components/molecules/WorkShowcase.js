"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./WorkShowcase.module.css";

export default function WorkShowcase({ images }) {
	const [index, setIndex] = useState(0);
	const [fadeClass, setFadeClass] = useState(styles.fadeIn);

	useEffect(() => {
		const interval = setInterval(() => {
			setFadeClass(styles.fadeOut);
			setTimeout(() => {
				setIndex((prevIndex) => (prevIndex + 1) % images.length);
				setFadeClass(styles.fadeIn);
			}, 1000); // Match the duration of the fadeOut animation
		}, 3000);

		return () => clearInterval(interval);
	}, [images]);

	return (
		<div className={styles.showcaseContainer}>
			<AnimatePresence mode="wait">
				<motion.img
					key={images[index]}
					src={images[index]}
					alt="Project showcase"
					className={`${styles.showcaseImage} ${fadeClass}`}
					initial={{ opacity: 0, scale: 1.05 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.95 }}
					transition={{ duration: 1 }}
				/>
			</AnimatePresence>
		</div>
	);
}