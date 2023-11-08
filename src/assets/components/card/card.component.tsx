import "./card.component.css";

import type { CardProps } from "./card.component.d.jsx";

export default function Card(props: CardProps) {
    return (
        <a href={props.url} class="card">
            <p class="card-title">
                {props.text.title}
            </p>
            <p class="card-description">
                {props.text.description}
            </p>
        </a>
    );
}
