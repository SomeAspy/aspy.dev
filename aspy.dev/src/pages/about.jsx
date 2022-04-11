// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import NavBar from '../modules/navbar/navbar.jsx';
import Footer from '../modules/footer/footer.jsx';
import '../SCSS/about.scss';

export default function About() {
    return (
        <>
            <div class='background' />
            <NavBar />
            <div class='photo'>
                <img
                    src='./src/images/aboutMePhoto.webp'
                    alt='Sketch of Aiden'
                />
            </div>
            <Footer />
        </>
    );
}
