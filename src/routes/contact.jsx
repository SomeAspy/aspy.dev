import NavBar from '../components/navbar/navbar.jsx';
import Footer from '../components/footer/footer.jsx';
import '../CSS/contact.css';

import discord from '../assets/discord.svg';
import github from '../assets/github.svg';
import telegram from '../assets/telegram.svg';
import steam from '../assets/steam.svg';

function ContactItem(props) {
    return (
        <a class='contact-item' href={props.link}>
            <img src={props.image} alt={props.name} class='icon' />
            <div class='contact-content'>
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
            <div class='contact-grid center'>
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
                <a class='contact-item' href='mailto:amb@aspy.dev'>
                    <p class='icon email'>@</p>
                    <div class='contact-content'>
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
            <Footer github='contact.jsx' />
        </>
    );
}
