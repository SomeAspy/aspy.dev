// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import '../CSS/projects.css';
import NavBar from '../components/navbar/navbar.jsx';
import Footer from '../components/footer/footer.jsx';

function Card(props) {
    const redirect = () => {
        window.location.href = props.link;
    };
    return (
        <div onClick={() => redirect(props.link)} class='gridItem'>
            <div class='title'>{props.title}</div>
            <div class='description'>{props.description}</div>
        </div>
    );
}

export default function Projects() {
    return (
        <>
            <div class='background' />
            <NavBar />
            <div class='center'>
                <div class='gridContainer'>
                    <Card
                        link='https://statify.live/'
                        title='Statify.Live'
                        description="A project I'm the developer of. It incorporates many APIs into a simple to use API."
                    />
                    <Card
                        link='https://13ft.aspy.dev/'
                        title='13ft Ladder'
                        description='Bypass the paywall on new york times!'
                    />
                    <Card
                        link='https://ipogger.aspy.dev'
                        title='IPogger'
                        description='Literally a meme I whipped up in about 30 min, it shows your ip.'
                    />
                    <Card
                        action='https://mctf.aspy.dev'
                        title='MCTF'
                        description='A text formatter for Minecraft'
                    />
                    <Card
                        action='https://github.com/SomeAspy/FuckIE'
                        title='FuckIE'
                        description='A script to redirect users who are on Internet Explorer to a page explaining why it is unsafe to use, and offering alternatives'
                    />
                    <Card
                        action='https://github.com/SomeAspy/SCP-079'
                        title='SCP-079'
                        description='A Discord bot written in JavaScript, using Discord.JS 13, slash commands only'
                    />
                    <Card
                        action='https://duckduckno.com/'
                        title='DuckDuckNo'
                        description='Just a front page of a slightly different DuckDuckGo website'
                    />
                </div>
            </div>
            <Footer github='pages/projects.jsx' />
        </>
    );
}
