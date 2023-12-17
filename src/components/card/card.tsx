import styles from "./card.module.css";

import type { CardProps } from "./card.d";

export default function (props: CardProps) {
    return (
        <a href={props.url ? props.url : ""} class={styles.card}>
            <p class={styles.cardTitle}>
                {props.text.title}
            </p>
            <p class={styles.cardDescription}>
                {props.text.description}
            </p>
        </a>
    );
}
