import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.logoContainer}>
				<Link href="/" className={styles.logo}>
					<img src="/images/logoks.png" alt="kates Logo" />
				</Link>

				<div className={styles.name}>
					<span className={styles.firstName}>Kate</span>
					<span className={styles.lastName}>Starchuk</span>
				</div>
			</div>

			<nav className={styles.nav}>
				<Link href="/" className={styles.navLink}>
					Home
				</Link>
				<Link href="/projects" className={styles.navLink}>
					Projects
				</Link>
				<Link href="/about" className={styles.navLink}>
					About
				</Link>
			</nav>
		</header>
	);
}
