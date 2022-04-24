// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import NavBar from '../components/navbar/navbar.jsx';
import Footer from '../components/footer/footer.jsx';
import '../CSS/contact.css';

import discord from '../images/discord.svg';
import github from '../images/github.svg';
import telegram from '../images/telegram.svg';
import steam from '../images/steam.svg';

function ContactItem(props) {
    return (
        <a class='contactItem' href={props.link}>
            <img src={props.image} alt={props.name} class='icon' />
            <div class='contactContent'>
                <span>{props.name}</span>
                <span2>{props.contact}</span2>
            </div>
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
                    name='Discord'
                    contact='SomeAspy\n#9999'
                />
                <ContactItem
                    link='https://github.com/SomeAspy'
                    image={github}
                    name='GitHub'
                    contact='SomeAspy'
                />
                <ContactItem
                    link='https://t.me/someaspy'
                    image={telegram}
                    name='Telegram'
                    contact='SomeAspy'
                />
                <a class='contactItem' href='mailto:amb@aspy.dev'>
                    <p class='icon email'>@</p>
                    <div class='contactContent'>
                        <span>Email</span>
                        <span2>amb\n@aspy.dev</span2>
                    </div>
                </a>
                <ContactItem
                    link='https://steamcommunity.com/id/SomeAspy/'
                    image={steam}
                    contact='SomeAspy'
                    name='Steam'
                />
            </div>
            <Footer github='pages/contact.jsx' />
        </>
    );
}
