// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { MetaProvider, Title, Meta } from 'solid-meta';

import NavBar from '../components/navbar/navbar.jsx';
import Footer from '../components/footer/footer.jsx';
import '../CSS/home.css';

export default function Tixte() {
    return (
        <MetaProvider>
            <Title>Aiden's CDN</Title>
            <Meta name='og:title' content="Aiden's CDN" />
            <Meta
                name='og:description'
                content="Aiden's CDN is powered by Tixte! A free file hosting service."
            />
            <Meta name='og:image' content='./src/images/tixte.gif' />
            <Meta name='og:color' content='#26a9e1' />
            <Meta rel='shortcut-icon' content='./src/images/tixte.svg' />

            <div class='background' />
            <NavBar />
            <div class='centerText center'>
                <h1>Aiden's Content Delivery Network</h1>
                <h3>
                    Powered by <a href='https://tixte.com'>Tixte</a>!
                </h3>
            </div>
            <Footer github='tixte.jsx' />
        </MetaProvider>
    );
}
