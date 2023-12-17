import type { JSX } from "solid-js";

import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
export default function Contact(): JSX.Element {
    return (
        <>
            <Navbar />
            <Footer github="about.tsx"/>
        </>
    );
}