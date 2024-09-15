import {Component, JSX, lazy} from "solid-js";

import styles from "./icon.module.css";

export default function Icon(props: {file: string; color?: string | undefined; alt: string; extraClass?: string}): JSX.Element {
    const defaultColor = "#FFF";
    const Src = lazy(
        // These icons are static
        // eslint-disable-next-line solid/reactivity
        async () =>
            (await import(`../../SVGs/${props.file}.svg?component-solid`)) as Promise<{
                default: Component<JSX.SvgSVGAttributes<SVGSVGElement>>;
            }>
    ) as Component<JSX.SvgSVGAttributes<SVGSVGElement>>;
    return (
        <div class={`${styles.iconContainer!} ${props.extraClass ? props.extraClass : ""}`}>
            <Src class={styles.icon} fill={props.color ? props.color : defaultColor} />
            <p> {props.alt} </p>
        </div>
    );
}
