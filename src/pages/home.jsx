// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import '../CSS/home.css';
import NavBar from '../components/navbar/navbar.jsx';
import Footer from '../components/footer/footer.jsx';

export default function Home() {
    return (
        <>
            <div class='background' />
            <NavBar />
            <div class='centerText center'>
                <h1>Aiden's Website</h1>
                <h2>Aiden Baker</h2>
                <h3>Student, full time idiot</h3>
            </div>
            <Footer github='pages/home.jsx' />
        </>
    );
}
