import type { CardProps } from "./card.d";
import styles from "./card.module.css";

export default function (props: CardProps) {
	return (
		<a href={props.url ? props.url : ""} class={styles.card}>
			<p class={styles.cardTitle}>{props.text.title}</p>
			<p class={styles.cardDescription}>{props.text.description}</p>
		</a>
	);
}
