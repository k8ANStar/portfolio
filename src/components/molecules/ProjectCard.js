import styles from "./ProjectCard.module.css";

export default function ProjectCard({ image, title, type, date }) {
	return (
		<div className={styles.card}>
			<img src={image} alt={title} className={styles.image} />
			<div className={styles.info}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.type}>{type}</p>
				<p className={styles.date}>{date}</p>
			</div>
		</div>
	);
}
