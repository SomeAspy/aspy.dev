// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import NavBar from '../components/navbar/navbar.jsx';
import Footer from '../components/footer/footer.jsx';
import '../CSS/about.css';
import aboutMePhoto from '../assets/aboutMePhoto.webp';

export default function About() {
    return (
        <>
            <div class='background' />
            <NavBar />
            <div class='photo'>
                <img src={aboutMePhoto} alt='Sketch of Aiden' />
            </div>
            <Footer github='about.jsx' />
        </>
    );
}
