import NavBar from '../components/navbar/navbar.jsx';
import Footer from '../components/footer/footer.jsx';
import '../CSS/404.css';

export default function () {
    return (
        <>
            <div class='background' />
            <NavBar />
            <div class='center-text center'>
                <h1>Oh No!</h1>
                <h2>This page doesn't exist.</h2>
                <h3>:(</h3>
            </div>
            <Footer github='404.jsx' />
        </>
    );
}
