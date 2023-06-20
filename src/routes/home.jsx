import '../CSS/home.css';
import NavBar from '../components/navbar/navbar.jsx';
import Footer from '../components/footer/footer.jsx';

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
                <span class='contact'>{props.contact}</span>
            </div>
        </a>
    );
}

export default function Home() {
    return (
        <>
            <div>
                <div class='background' />
                <div class='first-section center'>
                    <h1>Aspy's Website</h1>
                    <h3>Student, full time idiot</h3>
                </div>
                <div class='second-section'>
                    <h1 class='header'>Hi!</h1>
                    <p>
                        I go by aspy online, and I absolutely love fixing things
                        and technology, especially computers. I've worked
                        several IT jobs and spend a lot of time helping people
                        with computers. I am studying Computer Science and hope
                        to work in the IT field.
                    </p>
                </div>
                <div class='third-section'>
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
                            <p class='icon text-icon'>@</p>
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
                </div>
                <NavBar />
            </div>

            <Footer github='home.jsx' />
        </>
    );
}
