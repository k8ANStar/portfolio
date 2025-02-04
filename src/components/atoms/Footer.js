import styles from "./Footer.module.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<h2>Want to connect?</h2>
			<p>Links to connect below!</p>
			<div className={styles.icons}>
				<a
					href="mailto:katestarchuk@gmail.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaEnvelope />
				</a>
				<a
					href="https://linkedin.com/in/katestarchuk"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaLinkedin />
				</a>
				<a
					href="https://github.com/k8ANStar"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaGithub />
				</a>
			</div>
		</footer>
	);
}
