import { JSX, Component } from "solid-js";

import '../CSS/home.css';
import Footer from '../assets/components/footer/footer.js';
import Navbar from '../assets/components/navbar/navbar.js';

export function FourOhFour(): JSX.Element {
    return (
        <>
            <div class="background" />
            <Navbar />
            <div class="title-text">
                <h1>Well, Fuck.</h1>
                <h2>Something appears to have gone wrong...</h2>
                <h4>This is quite sub-optimal. Let's pretend this didn't happen.</h4>
            </div>
            <Footer github="404.tsx" />
        </>
    );
}