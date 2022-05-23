// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import NavBar from '../components/navbar/navbar.jsx';
import Footer from '../components/footer/footer.jsx';
import '../CSS/home.css';

/*
We want these headers but fuck me I guess
    <meta charset='utf-8' />
    <meta
    name='viewport' content='width=device-width, initial-scale=1.0'/>
    <link rel='shortcut-icon' content='./src/images/tixte.svg' />
    <title>Aiden's CDN</title>
    <meta name='og:description' content="Aiden's CDN is powered by Tixte! A free file hosting service."/>
    <meta name='og:title' content="Aiden's CDN" />
    <meta property='og:image' content='./src/images/tixte.gif' />
    <meta name='theme-color' content='#26a9e1' />
    <meta rel='shortcut-icon' content='./src/images/tixte.svg' />
    <link rel='stylesheet' href='../CSS/home.css' />
*/

export default function Tixte() {
    return (
        <>
            <div class='background' />
            <NavBar />
            <div class='centerText center'>
                <h1>Aiden's Content Delivery Network</h1>
                <h3>
                    Powered by <a href='https://tixte.com'>Tixte</a>!
                </h3>
            </div>
            <Footer github='tixte.jsx' />
        </>
    );
}
