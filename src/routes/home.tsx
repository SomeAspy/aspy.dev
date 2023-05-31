import { JSX, Component } from "solid-js";

import '../CSS/home.css';
import Footer from '../assets/components/footer/footer.js';
import Navbar from '../assets/components/navbar/navbar.js';

import ArchLogo from '../assets/SVGs/archlinux.svg?component-solid';
import CloudFlareLogo from '../assets/SVGs/cloudflare.svg?component-solid';
import GitHubLogo from '../assets/SVGs/github.svg?component-solid';
import Css3Logo from '../assets/SVGs/css3.svg?component-solid';
import DockerLogo from '../assets/SVGs/docker.svg?component-solid';
import Html5Logo from '../assets/SVGs/html5.svg?component-solid';
import JavaLogo from '../assets/SVGs/java.svg?component-solid';
import JSLogo from '../assets/SVGs/js.svg?component-solid';
import LinuxLogo from '../assets/SVGs/linux.svg?component-solid';
import NodeLogo from '../assets/SVGs/node-js.svg?component-solid';
import MarkdownLogo from '../assets/SVGs/markdown.svg?component-solid';
import SolidLogo from '../assets/SVGs/solid.svg?component-solid';
import TypeScriptLogo from '../assets/SVGs/typescript.svg?component-solid';
import AutodeskLogo from '../assets/SVGs/autodesk.svg?component-solid';
import CppLogo from '../assets/SVGs/cplusplus.svg?component-solid';
import PythonLogo from '../assets/SVGs/python.svg?component-solid';
import DebianLogo from '../assets/SVGs/debian.svg?component-solid';
import VisualStudioCodeLogo from '../assets/SVGs/visualstudiocode.svg?component-solid';
import ReactLogo from '../assets/SVGs/react.svg?component-solid';
import ViteLogo from '../assets/SVGs/vite.svg?component-solid';


/**
 * A component that renders an SVG
 * @param props.class The class to add to the icon
 * @param props.src The SVG component to use
 * @param props.color The color to use for the icon
 * @param props.href The href to use for the icon
 * @param props.alt The alt text to use for the icon
 * @returns A TSX element containing the icon
 */
function Icon(props: {src: Component<JSX.SvgSVGAttributes<SVGSVGElement>>, color?: string, alt: string; }): JSX.Element {
    const defaultColor = "#FFF";
    return (
        <div class="icon-container">
            <props.src class="icon" fill={props.color ? props.color : defaultColor} />
            <p class="icon-alt-text">{props.alt}</p>
        </div>
    );
}

export function Home(): JSX.Element {
    return (
        <>
            <div class="background" />
            <Navbar />
            <div class="title-text">
                <h1>Hello there.</h1>
                <h2>My name is Aiden.</h2>
            </div>
            <div class="sub-area">
                <p>I like to work with computers, and often like to develop various things.</p>
                <p>Things I like to work with:</p>
                <div class="icons">
                    <Icon src={SolidLogo} alt="SolidJS" color="#2C4F7C" />
                    <Icon src={Css3Logo} alt="CSS" color="#1572B6" />
                    <Icon src={Html5Logo} alt="HTML" color="#E34F26" />
                    <Icon src={JSLogo} alt="JavaScript" color="#F7DF1E" />
                    <Icon src={MarkdownLogo} alt="Markdown" />
                    <Icon src={NodeLogo} alt="NodeJS" color="#339933" />
                    <Icon src={JavaLogo} alt="Java" color="#FC4C02" />
                    <Icon src={DockerLogo} alt="Docker" color="#2496ED" />
                    <Icon src={LinuxLogo} alt="Linux" />
                    <Icon src={ArchLogo} alt="Arch Linux" color="#1793D1" />
                    <Icon src={CloudFlareLogo} alt="CloudFlare" color="#F38020" />
                    <Icon src={GitHubLogo} alt="GitHub" />
                    <Icon src={TypeScriptLogo} alt="TypeScript" color="#3178C6" />
                    <Icon src={AutodeskLogo} alt="Autodesk" color="#d74e26" />
                    <Icon src={CppLogo} alt="C++" color="#00599C" />
                    <Icon src={DebianLogo} alt="Debian" color="#A81D33" />
                    <Icon src={VisualStudioCodeLogo} alt="Visual Studio Code" color="#007ACC" />
                    <Icon src={ReactLogo} alt="React" color="#61DAFB" />
                    <Icon src={ViteLogo} alt="Vite" color="#646CFF" />
                    <Icon src={PythonLogo} alt="Python" color="#3776AB" />
                </div>
            </div>
            <Footer github="home.tsx" />
        </>
    );
}