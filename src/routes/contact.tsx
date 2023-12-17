import type { JSX } from "solid-js";

import Navbar from "../assets/components/navbar/navbar";
import Footer from "../assets/components/footer/footer";
export default function Contact(): JSX.Element {
    return (
        <>
            <Navbar />
            <Footer github="contact.tsx"/>
        </>
    );
}