import { Component, JSX, lazy } from "solid-js";

import styles from "./icon.module.css";

export default function Icon(props: { file: string, color?:string,alt: string, extraClass?: string; }): JSX.Element{
    const defaultColor = "#FFF";
    // The icon should never change. however, ideally this wouldn't have to be here.
    // eslint-disable-next-line solid/reactivity
    const Src = lazy(async()=>(await import(`../../SVGs/${props.file}.svg?component-solid`) as Promise<{ default: Component<JSX.SvgSVGAttributes<SVGSVGElement>>; }>)) as Component<JSX.SvgSVGAttributes<SVGSVGElement>>;
    return (
        <div class={`${styles.iconContainer} ${props.extraClass?props.extraClass:""}`} >
            <Src class={styles.icon} fill = { props.color ? props.color : defaultColor } />
            <p> { props.alt } </p>
        </div>
    );
}