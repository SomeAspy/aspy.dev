import { JSX } from "solid-js";

import '../CSS/home.css'

export function Home(): JSX.Element {
    return (
        <>
            <div class="background"/>
                <div class="titleText">
                    <h1>Hello there.</h1>
                    <h2>My name is Aiden.</h2>
            </div>
            <div class="subText">
                <p>I like to work with computers, and often like to develop various things.</p>
                <p class="icons">                  <br/>      󰀷 󰊫 󰓓 󰔀 󰗯 󰙲 󰙯 󰜈 󰵮 󱎐 󱎏 󱎎 󱎒</p>
            </div>
        </>
    );
}