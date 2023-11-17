import { JSX } from "solid-js";

import "../CSS/404.css";
import FooterComponent from "../assets/components/footer/footer.component";
import NavbarComponent from "../assets/components/navbar/navbar.component";
import IconComponent from "../assets/components/icon/icon.component";
import TitleComponent from "../assets/components/title/title.component";

export default function FourOhFour(): JSX.Element {
    return (
        <>
            <NavbarComponent />
            <TitleComponent text={{
                h1: "Well, Fuck.",
                h2: "Something appears to have gone wrong...",
                h4: "This is quite sub-optimal. Let's pretend this didn't happen."
            }} />
            <div class="sub-area">
                <div class="icons">
                    <a href="/" class='no-link-style'>
                        <IconComponent file="home" alt="Press to go home" color="#FFF" />
                        </a>
                </div>

            </div>
            <FooterComponent github="404.tsx" />
        </>
    );
}