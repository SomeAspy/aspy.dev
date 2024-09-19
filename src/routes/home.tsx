import { For, type JSX } from "solid-js";

import styles from "../CSS/home.module.css";
import Footer from "../components/footer/footer";
import Icon from "../components/icon/icon";
import Navbar from "../components/navbar/navbar";
import Title from "../components/title/title";
import icons from "../constants/icons.json";

export default function Home(): JSX.Element {
	return (
		<>
			<div class={styles.background} />
			<Navbar />
			<Title text={{ h1: "Hello there.", h2: "My Name is Aiden" }} />

			<div class={styles.subarea}>
				<p>
					I like to work with computers, and often like to develop various
					things.
				</p>
				<p>Things I like to work with:</p>
				<div class={styles.icons}>
					<For each={icons}>
						{(icon) => (
							<Icon file={icon.file} alt={icon.alt} color={icon.color} />
						)}
					</For>
				</div>
			</div>

			<Footer github="home.tsx" />
		</>
	);
}
