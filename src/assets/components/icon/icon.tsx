import { Component, JSX } from "solid-js";
import './icon.component.css';

/**
 * A component that renders an SVG
 * @param props.extraClass The class to add to the icon
 * @param props.src The SVG component to use
 * @param props.color The color to use for the icon
 * @param props.href The href to use for the icon
 * @param props.alt The alt text to use for the icon
 * @returns A TSX element containing the icon
 */
export function Icon(props: { src: Component<JSX.SvgSVGAttributes<SVGSVGElement>>, color?: string, alt: string, extraClass?: string; }): JSX.Element {

    const defaultColor = "#FFF";
    return (
        <div class={`icon-container ${props.extraClass?props.extraClass:''}`} >
        <props.src class="icon" fill = { props.color ? props.color : defaultColor } />
            <p class="icon-alt-text" > { props.alt } </p>
                </div>
    );
}