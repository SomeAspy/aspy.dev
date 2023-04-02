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
                        link='https://duckduckno.com/'
                        title='DuckDuckNo'
                        description='A fun little project I made because I was able to purchase duckduckno.com'
                    />
                    <Card
                        link='https://github.com/SomeAspy/SSMS'
                        title='Simple Secure Media Server (SSMS)'
                        description='A highly work in progress media server that is designed to be simple and secure. It is currently not ready for production use.'
                    />
                </div>
            </div>
            <Footer github='projects.jsx' />
        </>
    );
}
