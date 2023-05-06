import { JSX } from "solid-js";

import '../CSS/home.css'
import ArchLogo from '../assets/SVGs/archlinux.svg'
import CloudFlareLogo from '../assets/SVGs/cloudflare.svg'
import GitHubLogo from '../assets/SVGs/github.svg'
import css3Logo from '../assets/SVGs/css3-alt.svg'
import DockerLogo from '../assets/SVGs/docker.svg'
import Html5Logo from '../assets/SVGs/html5.svg'
import JavaLogo from '../assets/SVGs/java.svg'
import JSLogo from '../assets/SVGs/js.svg'
import LinuxLogo from '../assets/SVGs/linux.svg'
import NodeLogo from '../assets/SVGs/node-js.svg'
import MarkdownLogo from '../assets/SVGs/markdown.svg'
import ReactLogo from '../assets/SVGs/react.svg'



function Icon(props: { src: string, alt: string, href?: string, invert?: boolean }) {
    let imgClass = "icon"
    if (props.invert) {
        imgClass += " invert";
    }
    return (
        <a class="icon" href={props?.href}>
            <img class={imgClass} src={props.src} alt={props.alt} />
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
                    <Icon src={ReactLogo} alt="React Logo" href="https://www.solidjs.com/" invert={true} />
                    <Icon src={css3Logo} alt="CSS3 Logo" href="https://www.w3.org/Style/CSS/Overview.en.html" invert={true} />
                    <Icon src={Html5Logo} alt="HTML5 Logo" href="https://html.spec.whatwg.org/multipage/" invert={true} />
                    <Icon src={JavaLogo} alt="Java Logo" href="https://www.java.com/en/" invert={true} />
                    <Icon src={JSLogo} alt="JavaScript Logo" href="https://www.javascript.com" invert={true} />
                    <Icon src={NodeLogo} alt="NodeJS Logo" href="https://nodejs.org/en/" invert={true} />
                    <Icon src={DockerLogo} alt="Docker Logo" href="https://www.docker.com" invert={true} />
                    <Icon src={ArchLogo} alt="Arch Linux Logo" href="https://archlinux.org" invert={true} />
                    <Icon src={CloudFlareLogo} alt="CloudFlare Logo" href="https://www.cloudflare.com" invert={true} />
                    <Icon src={GitHubLogo} alt="GitHub Logo" href="https://github.com" invert={true} />
                    <Icon src={LinuxLogo} alt="Linux Logo" href="https://www.linux.org" invert={true} />
                    <Icon src={MarkdownLogo} alt="Markdown Logo" href="https://www.markdownguide.org" invert={true} />
                </div>
            </div>
        </>
    );
}