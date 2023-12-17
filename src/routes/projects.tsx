import type { JSX } from "solid-js";

import styles from "../CSS/projects.module.css";
import Navbar from "../components/navbar/navbar";
import Title from "../components/title/title";
import Card from "../components/card/card";
import Footer from "../components/footer/footer";

export default function Projects(): JSX.Element {
    return (
        <>
            <div class={styles.background}/>
            <Navbar />
            <Title text={{ h1: "My Projects", h2: "Stuff I've made to share with the world" }} />
            <div class={styles.projectsGrid}>
                <Card text={{
                    title: "AOCR",
                    description: "AOCR stands for Automod OCR. It is a bot that gives Discord's automoderation tools OCR capabilities on images, as well as other standard automoderation actions, with minimal permissions."
                }} url="https://github.com/SomeAspy/AOCR" />
                <Card text={{
                    title: "DuckDuckNo",
                    description: "DuckDuckNo is a mock search engine powered by Google CSE. I was able to get a lookalike domain of DuckDuckGo.com so I made this"
                }} url="https://github.com/SomeAspy/DuckDuckNo" />
                <Card text={{
                    title: "T-Mail",
                    description: "A simple program written to monitor temperature of a room and update a google spreadsheet with it. It sends emails when temperature is outside of a provided range. "
                }} url="https://github.com/SomeAspy/T-Mail" />
                <Card text={{
                    title: "dotfiles",
                    description: "Dotfiles are system configs for linux. Mine are aimed primarily at arch and debian."
                }}url="https://github.com/SomeAspy/dotfiles" />
            </div>
            <Footer github="projects.tsx" />
        </>
    );
}