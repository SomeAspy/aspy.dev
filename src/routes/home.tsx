import type { JSX } from "solid-js";

import styles from "../CSS/home.module.css";
import Footer from "../assets/components/footer/footer";
import Icon from "../assets/components/icon/icon";
import Title from "../assets/components/title/title";
import Navbar from "../assets/components/navbar/navbar";

export default function Home(): JSX.Element {
    return (
        <>
            <div class={styles.background} />
            <Navbar />
            <Title text={{ h1: "Hello there.", h2: "My Name is Aiden" }} />

            <div class={styles.subarea}>
                <p>I like to work with computers, and often like to develop various things.</p>
                <p>Things I like to work with:</p>
                <div class={styles.icons}>
                    <Icon file="solid" alt="SolidJS" color="#2C4F7C" />
                    <Icon file="css3" alt="CSS" color="#1572B6" />
                    <Icon file="html5" alt="HTML" color="#E34F26" />
                    <Icon file="js" alt='JavaScript' color="#F7DF1E"/>
                    <Icon file="markdown" alt="Markdown" />
                    <Icon file="node-js" alt="NodeJS" color="#339933" />
                    <Icon file="java" alt="Java"  color="#F80000"/>
                    <Icon file="docker" alt="Docker" color="#2496ED"/>
                    <Icon file="linux" alt="Linux" />
                    <Icon file="archLinux" alt="Arch Linux" color="#1793D1" />
                    <Icon file="cloudflare" alt="Cloudflare" color="#F38020" />
                    <Icon file="github" alt="GitHub" />
                    <Icon file="typescript" alt="TypeScript" color="#3178C6" />
                    <Icon file="autodesk" alt="AutoCAD" />
                    <Icon file="cplusplus" alt="C++" color="#00599C" />
                    <Icon file="debian" alt="Debian Linux" color="#A81D33" />
                    <Icon file="visualstudiocode" alt="VSCode" color="#007ACC" />
                    <Icon file="react" alt="React" color="#61DAFB" />
                    <Icon file="vite" alt="Vite" color="#646CFF" />
                    <Icon file="bash" alt="Bash" color="#4EAA25" />
                    <Icon file="caddy" alt="Caddy" color="#1F88C0" />
                    <Icon file="nginx" alt="NGINX" color="#009639" />
                </div>
            </div>
            <Footer github="home.tsx" />
        </>
    );
}