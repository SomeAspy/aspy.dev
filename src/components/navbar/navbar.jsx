// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import './navbar.component.css';

export default function NavBar() {
    return (
        <div className='navBar'>
            <a href='https://aspy.dev'>Home</a>
            <a href='https://aspy.dev/about'>About Me</a>
            <a href='https://aspy.dev/projects'>Projects</a>
            <a href='https://aspy.dev/contact'>Contact</a>
            <a href='https://blog.aspy.dev'>Blog</a>
        </div>
    );
}
