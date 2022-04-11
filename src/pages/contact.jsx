// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import NavBar from '../modules/navbar/navbar.jsx';
import Footer from '../modules/footer/footer.jsx';
import '../SCSS/contact.scss';

export default function Contact() {
    return (
        <>
            <div class='background' />
            <NavBar />
            <div class='contactGrid center'>
                <a
                    class='contactItem'
                    href='https://discord.com/users/516750892372852754'>
                    <img
                        class='icon'
                        src='./src/images/discord.svg'
                        alt='Discord Logo'
                    />
                    <div class='contactInfo'>SomeAspy#9999</div>
                </a>
                <a class='contactItem' href='https://github.com/SomeAspy'>
                    <img
                        class='icon'
                        src='./src/images/github.svg'
                        alt='Github Logo'
                    />
                    <div class='contactInfo'>SomeAspy</div>
                </a>
                <a class='contactItem' href='https://t.me/someaspy'>
                    <img
                        class='icon telegram'
                        src='./src/images/telegram.svg'
                        alt='Telegram Logo'
                    />
                    <div class='contactInfo'>Telegram</div>
                </a>
                <a class='contactItem' href='mailto:amb@aspy.dev'>
                    <p class='icon email'>@</p>
                    <div class='contactInfo'>Email</div>
                </a>
                <a
                    class='contactItem'
                    href='https://steamcommunity.com/id/SomeAspy/'>
                    <img
                        class='icon steam'
                        src='./src/images/steam.svg'
                        alt='Steam Logo'
                    />
                    <div class='contactInfo'>Steam</div>
                </a>
            </div>
            <Footer github='pages/contact.jsx' />
        </>
    );
}
