import { useRef, useState, useEffect } from "react";
import styles from "./ImageComparisonSlider.module.css";

export default function ImageComparisonSlider({ beforeImage, afterImage }) {
	const sliderRef = useRef(null);
	const [sliderPosition, setSliderPosition] = useState(50);

	const handleMouseMove = (e) => {
		const { left, width } = sliderRef.current.getBoundingClientRect();
		const newPosition = ((e.clientX - left) / width) * 100;
		setSliderPosition(Math.max(0, Math.min(100, newPosition)));
	};

	const handleTouchMove = (e) => {
		const { left, width } = sliderRef.current.getBoundingClientRect();
		const newPosition = ((e.touches[0].clientX - left) / width) * 100;
		setSliderPosition(Math.max(0, Math.min(100, newPosition)));
	};

	const handleMouseDown = () => {
		document.addEventListener("mousemove", handleMouseMove);
		document.addEventListener("mouseup", handleMouseUp);
	};

	const handleTouchStart = () => {
		document.addEventListener("touchmove", handleTouchMove);
		document.addEventListener("touchend", handleMouseUp);
	};

	const handleMouseUp = () => {
		document.removeEventListener("mousemove", handleMouseMove);
		document.removeEventListener("touchmove", handleTouchMove);
		document.removeEventListener("mouseup", handleMouseUp);
		document.removeEventListener("touchend", handleMouseUp);
	};

	useEffect(() => {
		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("touchmove", handleTouchMove);
			document.removeEventListener("mouseup", handleMouseUp);
			document.removeEventListener("touchend", handleMouseUp);
		};
	}, []);

	return (
		<div className={styles.sliderContainer} ref={sliderRef}>
			<div
				className={styles.beforeImage}
				style={{ width: `${sliderPosition}%` }}
			>
				<img src={beforeImage} alt="Before" />
			</div>
			<div className={styles.afterImage}>
				<img src={afterImage} alt="After" />
			</div>
			<div
				className={styles.sliderHandle}
				style={{ left: `calc(${sliderPosition}% - 10px)` }}
				onMouseDown={handleMouseDown}
				onTouchStart={handleTouchStart}
			>
				<div className={styles.sliderIcon}></div>
			</div>
		</div>
	);
}
