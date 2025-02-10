"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./WorkShowcase.module.css";
import Link from "next/link";

export default function WorkShowcase({ images }) {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 4000); // Change image every 4 seconds

		return () => clearInterval(interval);
	}, [images]);

	return (
		<div className={styles.showcaseContainer}>
			<AnimatePresence mode="wait">
				<motion.img
					key={images[index]}
					src={images[index]}
					alt="Project showcase"
					className={styles.showcaseImage}
					initial={{ opacity: 0, scale: 1.05 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.95 }}
					transition={{ duration: 1 }}
				/>
			</AnimatePresence>
		</div>
	);
}
