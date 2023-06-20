import './footer.component.css';

export default function Footer(props) {
    return (
        <>
            <footer class='source'>
                {'This website is '}
                <a
                    href={`https://github.com/SomeAspy/aspy.dev/blob/main/src/routes/${props.github}`}>
                    open source
                </a>
            </footer>
            <footer class='copyright'>
                <p>&copy; Aiden 2021-2023</p>
            </footer>
        </>
    );
}
