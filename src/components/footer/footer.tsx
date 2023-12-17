import styles from "./footer.module.css";

export default function(props: {github: string}) {
    return (
        <>
            <footer class={styles.source}>
                {"This website is "}
                <a
                    href={`https://github.com/SomeAspy/aspy.dev/blob/main/src/routes/${props.github}`}>
                    open source
                </a>
            </footer>
            <footer class={styles.copyright}>
                <a href="https://aspy.dev/license.txt" class={styles.noLinkStyle}>
                    <p>&copy; Aiden 2021-2024 with ❤️</p>
                    </a>
            </footer>
        </>
    );
}