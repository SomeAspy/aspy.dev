// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import NavBar from '../components/navbar/navbar.jsx';
import Footer from '../components/footer/footer.jsx';
import '../CSS/404.css';

function redirect() {
    window.location.href = 'https://www.youtube.com/watch?v=xvFZjo5PgG0';
}

export default function () {
    return (
        <>
            <div class='background'></div>
            <NavBar />
            <div class='centerText center'>
                <h1>Oh No!</h1>
                <h2>This page doesn't exist.</h2>
                <h3>:(</h3>
            </div>
            <a class='troll' onclick='redirect()'>
                Or maybe it does?
            </a>
            <Footer github='pages/404.jsx' />
        </>
    );
}
