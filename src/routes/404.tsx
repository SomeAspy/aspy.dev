import { JSX } from "solid-js";

import "../CSS/404.css";
import Footer from "../assets/components/footer/footer.component.jsx";
import Navbar from "../assets/components/navbar/navbar.component.jsx";
import Icon from "../assets/components/icon/icon.component";
import Title from "../assets/components/title/title.component";

export default function FourOhFour(): JSX.Element {
    return (
        <>
            <Navbar />
            <Title text={{
                h1: "Well, Fuck.",
                h2: "Something appears to have gone wrong...",
                h4: "This is quite sub-optimal. Let's pretend this didn't happen."
            }} />
            <div class="sub-area">
                <div class="icons">
                    <a href="/" class='no-link-style'>
                        <Icon file="home" alt="Press to go home" color="#FFF" />
                        </a>
                </div>

            </div>
            <Footer github="404.tsx" />
        </>
    );
}