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
            <div className='textBlock'>
                <h1 className='header'>Hi!</h1>
                <p>
                    My name is Aiden, and I absolutely love fixing things and
                    technology, especially computers. I've worked several IT
                    jobs and spend a lot of time helping people with computers.
                    I am studying Computer Science and hope to work in the IT
                    field.
                </p>
            </div>
            <div className='discord'></div>
            <Footer github='about.jsx' />
        </>
    );
}
