import { JSX } from "solid-js";

import '../CSS/404.css';
import Footer from '../assets/components/footer/footer.js';
import Navbar from '../assets/components/navbar/navbar.js';
import Home from '../assets/SVGs/home.svg?component-solid';
import { Icon } from "../assets/components/icon/icon";
import { Title } from "../assets/components/title/title";

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
                        <Icon src={Home} alt="Press to go home" color="#FFF" />
                        </a>
                </div>

            </div>
            <Footer github="404.tsx" />
        </>
    );
}