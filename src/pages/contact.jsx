// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import NavBar from '../modules/navbar/navbar.jsx';
import Footer from '../modules/footer/footer.jsx';
import '../SCSS/contact.scss';

import discord from '../images/discord.svg';
import github from '../images/github.svg';
import telegram from '../images/telegram.svg';
import steam from '../images/steam.svg';

function ContactItem(props) {
    return (
        <a class='contactItem' href={props.link}>
            <img src={props.image} alt={props.alt} class='icon' />
            <div class='contactInfo'>{props.name}</div>
        </a>
    );
}

export default function Contact() {
    return (
        <>
            <div class='background' />
            <NavBar />
            <div class='contactGrid center'>
                <ContactItem
                    link='https://discord.com/users/516750892372852754'
                    image={discord}
                    alt='Discord'
                    name='SomeAspy#9999'
                />
                <ContactItem
                    link='https://github.com/SomeAspy'
                    image={github}
                    alt='GitHub'
                    name='SomeAspy'
                />
                <ContactItem
                    link='https://t.me/someaspy'
                    image={telegram}
                    alt='Telegram'
                    name='Telegram'
                />
                <a class='contactItem' href='mailto:amb@aspy.dev'>
                    <p class='icon email'>@</p>
                    <div class='contactInfo'>Email</div>
                </a>
                <ContactItem
                    link='https://steamcommunity.com/id/SomeAspy/'
                    image={steam}
                    alt='Steam'
                    name='Steam'
                />
            </div>
            <Footer github='pages/contact.jsx' />
        </>
    );
}
