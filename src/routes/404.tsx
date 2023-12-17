import type { JSX } from "solid-js";

import styles from "../CSS/home.module.css";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import Icon from "../components/icon/icon";
import Title from "../components/title/title";

const comments =[
    "Well, it does seem there is something to chaos theory after all, yes?",
    "I suspected this could happen but the Administrator just would not listen.",
    "Quick! It's about to go critical!",
    "What the hell is going on with our equipment?",
    "It wasn't meant to do this in the first place!",
    "Nothing you need to worry about, Gordon. Go ahead.",
    "And potentially the most unstable!",
    "No, stay back! Gordon!",
    "Why didn't they listen!",
    "We tried to warn them.",
    "I...I can't hold on much...longer...",
    "Oh my God...we're doomed!",
    "Don't shoot! I'm with the science team!",
    "No...No! No! Get it off me! Get it off! Get it off!",
    "Put that down—it's a prototype.",
    "It's much too unpredictable. Don't let it overcharge!",
    "Freeman, you fool!",
    "You can't be serious.",
    "It can't get any worse than this.",
    "I can't take much more of this.",
    "Do you still say there's nothing to chaos theory?",
    "You are completely wrong.",
    "*Cough*",
    "Someone has hidden my glasses again.",
    "This is madness! I'm getting out of here!",
    "Well, there goes our grant money.",
    "Have you seen my coffee cup?",
    "Do you smell something burning?",
    "My God, what are you doing?",
    "Who is responsible for this mess?",
    "Well, do you have any idea what to do next?",
];

export default function FourOhFour(): JSX.Element {
    return (
        <>
            <Navbar />
            <Title text={{
                h1: comments[Math.floor(Math.random()*comments.length)]!,
                h3: "This page doesn't exist on the server!"
            }} />
            <div class={styles.subarea}>
                <div class={styles.icons}>
                    <a href="/" class="noLinkStyle">
                        <Icon file="home" alt="Home" color="#FFF" />
                    </a>
                </div>
            </div>
            <Footer github="404.tsx" />
        </>
    );
}