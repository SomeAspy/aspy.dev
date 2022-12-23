import '../CSS/projects.css';
import NavBar from '../components/navbar/navbar.jsx';
import Footer from '../components/footer/footer.jsx';

function Card(props) {
    return (
        <a href={props.link} class='grid-item'>
            <div class='title'>{props.title}</div>
            <div class='description'>{props.description}</div>
        </a>
    );
}

export default function Projects() {
    return (
        <>
            <div class='background' />
            <NavBar />
            <div class='center'>
                <div class='grid-container'>
                    <Card
                        link='https://ipogger.aspy.dev/'
                        title='IPogger'
                        description='Literally a meme I whipped up in about 30 min, it shows your IP.'
                    />
                    <Card
                        link='https://github.com/SomeAspy/FuckIE/'
                        title='FuckIE'
                        description='A script to redirect users who are on Internet Explorer to a page explaining why it is unsafe to use, and offering alternatives'
                    />
                    <Card
                        link='https://duckduckno.com/'
                        title='DuckDuckNo'
                        description='A fun little project I made because I was able to purchase duckduckno.com'
                    />
                </div>
            </div>
            <Footer github='projects.jsx' />
        </>
    );
}
