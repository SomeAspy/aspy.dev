import type { JSX } from "solid-js";

import styles from "../CSS/home.module.css";
import Footer from "../components/footer/footer";
import Icon from "../components/icon/icon";
import Navbar from "../components/navbar/navbar";
import Title from "../components/title/title";
import comments from "../constants/404strings.json";

export default function FourOhFour(): JSX.Element {
	return (
		<>
			<Navbar />
			<Title
				text={{
					h1: comments[Math.floor(Math.random() * comments.length)]!,
					h3: "This page doesn't exist on the server!",
				}}
			/>
			<div class={styles.subarea}>
				<div class={styles.icons}>
					<a href="/" class="noLinkStyle">
						<Icon file="home" alt="Home" color="#FFF" />
					</a>
				</div>
			</div>
			<Footer github="404.tsx" />
		</>
	);
}
