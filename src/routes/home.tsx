import { JSX } from "solid-js";

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

function Icon(props: { class: string, children: JSX.Element }): JSX.Element {
    return (
        <div class={props.class}>
            {props.children}
        </div>
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
                    <SolidLogo class="icon invert" />
                    <Css3Logo class="icon invert" />
                    <Html5Logo class="icon invert" />
                    <JSLogo class="icon" fill='#F7DF1E'/>
                    <NodeLogo class="icon invert" />
                    <JavaLogo class="icon invert" />
                    <MarkdownLogo class="icon invert" />
                    <DockerLogo class="icon invert" />
                    <LinuxLogo class="icon invert" />
                    <ArchLogo class="icon invert" />
                    <CloudFlareLogo class="icon invert" />
                    <GitHubLogo class="icon invert" />
                </div>
            </div>
        </>
    );
}