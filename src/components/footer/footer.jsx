// Copyright (c) 2022 Aiden
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

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
                <p>&copy; Aiden 2021-2022</p>
            </footer>
        </>
    );
}
