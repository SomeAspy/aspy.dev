import { JSX } from "solid-js";
import NavbarComponent from "../assets/components/navbar/navbar.component";
import FooterComponent from "../assets/components/footer/footer.component";
export default function Contact(): JSX.Element {
    return (
        <>
            <NavbarComponent />
            <FooterComponent github="contact.tsx"/>
        </>
    );
}