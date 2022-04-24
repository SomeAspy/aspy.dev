// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import './footer.css';

export default function Footer(props) {
    return (
        <>
            <footer class='source'>
                {'This website is '}
                <a
                    href={`https://github.com/SomeAspy/aspy.dev/blob/main/src/${props.github}`}>
                    open source
                </a>
            </footer>
            <footer class='copyright'>
                <p>&copy; Aiden Baker 2021-2022</p>
            </footer>
        </>
    );
}
