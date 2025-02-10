"use client";
import styles from "./ProjectCard.module.css";
import styled from "styled-components";

export default function ProjectCard({ href, image, title, type, date }) {
	const StyledLink = styled.a`
		text-decoration: none;
	`;
	return (
		<StyledLink href={href}>
			<div className={styles.card}>
				<img src={image} alt={title} className={styles.image} />
				<div className={styles.info}>
					<h3 className={styles.title}>{title}</h3>
					<p className={styles.type}>{type}</p>
					<p className={styles.date}>{date}</p>
				</div>
			</div>
		</StyledLink>
	);
}
