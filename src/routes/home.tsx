import { JSX } from "solid-js";

import '../CSS/home.css';
import Footer from '../assets/components/footer/footer.js';
import Navbar from '../assets/components/navbar/navbar.js';

import { Icon } from "../assets/components/icon/icon.js";
import { Title } from "../assets/components/title/title.js";


export default function Home(): JSX.Element {
    return (
        <>
            <div class="background" />
            <Navbar />
            <Title text={{ h2: "Hello there.", h3: "My Name is Aiden" }} />

            <div class="sub-area">
            <h1>I like to work with computers, and often like to develop various things.</h1>
            <h2>Things I like to work with:</h2>
                <div class="icons">
                    <Icon file="solid" alt="SolidJS" color="#2C4F7C" />
                    <Icon file="css3" alt="CSS" color="#1572B6" />
                    <Icon file="html5" alt="HTML" color="#E34F26" />
                    <Icon file="js" alt='JavaScript' color="#F7DF1E"/>
                    <Icon file="markdown" alt="Markdown" />
                    <Icon file="node-js" alt="NodeJS" color="#339933" />
                    <Icon file="java" alt="Java"  color="#F80000"/>
                    <Icon file="docker" alt="Docker" color="#2496ED"/>
                    <Icon file="linux" alt="Linux" color="#FCC624" />
                    <Icon file="archlinux" alt="Arch Linux" color="#1793D1" />
                    <Icon file="cloudflare" alt="Cloudflare" color="#F38020" />
                    <Icon file="github" alt="GitHub" />
                    <Icon file="typescript" alt="TypeScript" color="#3178C6" />
                    <Icon file="autodesk" alt="AutoCAD" />
                    <Icon file="cplusplus" alt="C++" color="#00599C" />
                    <Icon file="debian" alt="Debian Linux" color="#A81D33" />
                    <Icon file="visualstudiocode" alt="VSCode" color="#007ACC" />
                    <Icon file="react" alt="React" color="#61DAFB" />
                    <Icon file="vite" alt="Vite" color="#646CFF" />
                    <Icon file="python" alt="Python" color="#3776AB"/>
                </div>
            </div>
            <Footer github="home.tsx" />
        </>
    );
}