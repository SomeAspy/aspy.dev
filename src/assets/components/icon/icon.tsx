import { Component, JSX, lazy } from "solid-js";
import './icon.component.css';

/**
 * A component that renders an SVG
 * @param props.file the file name
 * @param props.color The color to use for the icon
 * @param props.extraClass The class to add to the icon
 * @param props.alt The alt text to use for the icon
 * @returns A TSX element containing the icon
 */
export function Icon(props: { file: string, color?:string,alt: string, extraClass?: string; }): JSX.Element{
    const defaultColor = "#FFF";
    // The icon should never change. however, ideally this wouldn't have to be here.
    // eslint-disable-next-line solid/reactivity
    const Src = lazy(async()=>(await import(`../../SVGs/${props.file}.svg?component-solid`) as Promise<{ default: Component<JSX.SvgSVGAttributes<SVGSVGElement>>; }>)) as Component<JSX.SvgSVGAttributes<SVGSVGElement>>
    return (
        <div class={`icon-container ${props.extraClass?props.extraClass:''}`} >
        <Src class="icon" fill = { props.color ? props.color : defaultColor } />
            <p class="icon-alt-text" > { props.alt } </p>
                </div>
    );
}