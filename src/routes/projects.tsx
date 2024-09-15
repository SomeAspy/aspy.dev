import {type JSX, For} from "solid-js";

import styles from "../CSS/projects.module.css";
import Navbar from "../components/navbar/navbar";
import Title from "../components/title/title";
import Card from "../components/card/card";
import Footer from "../components/footer/footer";
import projectData from "../constants/projects.json"

export default function Projects(): JSX.Element {
    return (
        <>
            <div class={styles.background} />
            <Navbar />
            <Title text={{h1: "My Projects", h2: "Stuff I've made to share with the world"}} />
            <div class={styles.projectsGrid}>
                <For each={projectData}>
                    {(project) => (
                        <Card
                            text={{
                                title: project.title,
                                description: project.description
                            }}
                            url={project.url}
                        />
                    )}
                </For>
            </div>
            <Footer github="projects.tsx" />
        </>
    );
}
