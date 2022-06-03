// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import '../CSS/home.css';
import NavBar from '../components/navbar/navbar.jsx';
import Footer from '../components/footer/footer.jsx';

import discord from '../assets/discord.svg';
import github from '../assets/github.svg';
import telegram from '../assets/telegram.svg';
import steam from '../assets/steam.svg';

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

export default function Home() {
    return (
        <>
            <div>
                <div class='background' />
                <div class='firstSection center'>
                    <h1>Aiden's Website</h1>
                    <h2>Aiden Baker</h2>
                    <h3>Student, full time idiot</h3>
                </div>
                <div className='secondSection'>
                    <h1 className='header'>Hi!</h1>
                    <p>
                        My name is Aiden, and I absolutely love fixing things
                        and technology, especially computers. I've worked
                        several IT jobs and spend a lot of time helping people
                        with computers. I am studying Computer Science and hope
                        to work in the IT field.
                    </p>
                </div>
                <div className='thirdSection'>
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
                </div>
                <NavBar />
            </div>

            <Footer github='home.jsx' />
        </>
    );
}
