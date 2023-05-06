import { JSX, Component } from "solid-js";

import '../CSS/home.css'
import ArchLogo from '../assets/SVGs/archlinux.svg?component-solid';
import CloudFlareLogo from '../assets/SVGs/cloudflare.svg?component-solid';
import GitHubLogo from '../assets/SVGs/github.svg?component-solid';
import Css3Logo from '../assets/SVGs/css3-alt.svg?component-solid';
import DockerLogo from '../assets/SVGs/docker.svg?component-solid';
import Html5Logo from '../assets/SVGs/html5.svg?component-solid';
import JavaLogo from '../assets/SVGs/java.svg?component-solid';
import JSLogo from '../assets/SVGs/js.svg?component-solid';
import LinuxLogo from '../assets/SVGs/linux.svg?component-solid';
import NodeLogo from '../assets/SVGs/node-js.svg?component-solid';
import MarkdownLogo from '../assets/SVGs/markdown.svg?component-solid';
import SolidLogo from '../assets/SVGs/solid.svg?component-solid';

/**
 * A component that renders an SVG
 * @param props.class The class to add to the icon
 * @param props.src The SVG component to use
 * @param props.color The color to use for the icon
 * @param props.href The href to use for the icon
 * @param props.alt The alt text to use for the icon
 * @returns A TSX element containing the icon
 */
function Icon(props: { class?: string, src: Component<JSX.SvgSVGAttributes<SVGSVGElement>>, color?: string, href?: string, alt: string; }) {
    let defaultClass = "icon";
    let color="#FFF"
    if (props.color) {
        color = props.color;
    }
    if (props.class) {
        defaultClass += " " + props.class;
    }
    return (
        <a href={props?.href}>
            <props.src class={defaultClass} fill={color} />
        </a>
    )
}

export function Home(): JSX.Element {
    return (
        <>
            <div class="background"/>
            <div class="titleText">
                <h1>Hello there.</h1>
                <h2>My name is Aiden.</h2>
            </div>
            <div class="subArea">
                <p>I like to work with computers, and often like to develop various things.</p>
                <p>Things I like to work with:</p>
                <div class="icons">
                    <Icon src={SolidLogo} alt="SolidJS Logo" color="#2C4F7C" href="https://www.solidjs.com/" />
                    <Icon src={Css3Logo} alt="CSS3 Logo" color="#1572B6" href="https://www.w3.org/Style/CSS/Overview.en.html" />
                    <Icon src={Html5Logo} alt="HTML5 Logo" color="#E34F26" href="https://html.spec.whatwg.org/multipage/" />
                    <Icon src={JSLogo} alt="JavaScript Logo" color="#F7DF1E" href="https://www.javascript.com/" />
                    <Icon src={MarkdownLogo} alt="Markdown Logo" href="https://www.markdownguide.org/" />
                    <Icon src={NodeLogo} alt="NodeJS Logo" color="#339933" href="https://nodejs.org/en/" />
                    <Icon src={JavaLogo} alt="Java Logo" color="#FC4C02" href="https://www.java.com/en/" />
                    <Icon src={DockerLogo} alt="Docker Logo" color="#2496ED" href="https://www.docker.com/" />
                    <Icon src={LinuxLogo} alt="Linux Logo" href="https://www.linux.org/" />
                    <Icon src={ArchLogo} alt="Arch Linux Logo" color="#1793D1" href="https://archlinux.org/" />
                    <Icon src={CloudFlareLogo} alt="CloudFlare Logo" color="#F38020" href="https://www.cloudflare.com/" />
                    <Icon src={GitHubLogo} alt="GitHub Logo" href="https://github.com/SomeAspy" />
                </div>
            </div>
        </>
    );
}