import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.logoContainer}>
				<img src="/logoks.png" alt="Logo" className={styles.logo} />
				<div className={styles.name}>
					<span className={styles.firstName}>Kate</span>
					<span className={styles.lastName}>Starchuk</span>
				</div>
			</div>
			<nav className={styles.nav}>
				<nav className={styles.nav}>
					<Link href="/" className={styles.navLink}>
						Home
					</Link>
					<Link href="/work" className={styles.navLink}>
						Work
					</Link>
					<Link href="/about" className={styles.navLink}>
						About
					</Link>
				</nav>
			</nav>
		</header>
	);
}
