import "./card.component.css";

import type { CardProps } from "./card.component.d.jsx";

export default function (props: CardProps) {
    return (
        // We need an assertion here
        <a href={props.url!.toString()} class="card">
        <p class="card-title">
            {props.text.title}
        </p>
        <p class="card-description">
            {props.text.description}
        </p>
    </a>
    );
}
