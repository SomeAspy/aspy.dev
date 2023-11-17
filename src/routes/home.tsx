import { JSX } from "solid-js";

import "../CSS/home.css";
import FooterComponent from "../assets/components/footer/footer.component";
import IconComponent from "../assets/components/icon/icon.component";
import TitleComponent from "../assets/components/title/title.component";
import NavbarComponent from "../assets/components/navbar/navbar.component";

export default function Home(): JSX.Element {
    return (
        <>
            <div class="background" />
            <NavbarComponent />
            <TitleComponent text={{ h1: "Hello there.", h2: "My Name is Aiden" }} />

            <div class="sub-area">
                <p>I like to work with computers, and often like to develop various things.</p>
                <p>Things I like to work with:</p>
                <div class="icons">
                    <IconComponent file="solid" alt="SolidJS" color="#2C4F7C" />
                    <IconComponent file="css3" alt="CSS" color="#1572B6" />
                    <IconComponent file="html5" alt="HTML" color="#E34F26" />
                    <IconComponent file="js" alt='JavaScript' color="#F7DF1E"/>
                    <IconComponent file="markdown" alt="Markdown" />
                    <IconComponent file="node-js" alt="NodeJS" color="#339933" />
                    <IconComponent file="java" alt="Java"  color="#F80000"/>
                    <IconComponent file="docker" alt="Docker" color="#2496ED"/>
                    <IconComponent file="linux" alt="Linux" />
                    <IconComponent file="archlinux" alt="Arch Linux" color="#1793D1" />
                    <IconComponent file="cloudflare" alt="Cloudflare" color="#F38020" />
                    <IconComponent file="github" alt="GitHub" />
                    <IconComponent file="typescript" alt="TypeScript" color="#3178C6" />
                    <IconComponent file="autodesk" alt="AutoCAD" />
                    <IconComponent file="cplusplus" alt="C++" color="#00599C" />
                    <IconComponent file="debian" alt="Debian Linux" color="#A81D33" />
                    <IconComponent file="visualstudiocode" alt="VSCode" color="#007ACC" />
                    <IconComponent file="react" alt="React" color="#61DAFB" />
                    <IconComponent file="vite" alt="Vite" color="#646CFF" />
                    <IconComponent file="bash" alt="Bash" color="#4EAA25" />
                    <IconComponent file="caddy" alt="Caddy" color="#1F88C0" />
                    <IconComponent file="nginx" alt="NGINX" color="#009639" />
                </div>
            </div>
            <FooterComponent github="home.tsx" />
        </>
    );
}