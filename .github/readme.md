# Aspy.dev

My Personal website that I work on in my free time.

Now a complete ground up rewrite in TSX!

It may not look the best but I'm proud of it. I'm not good with reactive libraries or CSS, but its been a lot of fun and a great learning experience working on this. When I started this project I had no idea how CSS, JSX, or TSX worked.

## Hosting

I host the base domain on a dedicated server from [Hetzner](https://hetzner.com/). Subdomains on the site are generally also hosted on the same server.

## Goals

Some goals are listed in the [todo.md](/todo.md) file.
However, the main goals I have for this site are as follows:

### Modern Standards

One of my goals for the site is to continually use the latest features, for example, WebP, and AVIF or JPEG XL when support is finalized. This website will make no efforts to support Internet Explorer, for these reasons. IE support is entirely coincidental.

I build and test this site with Firefox.
Why not Google Chrome with it's 64% market share? Manifest v3 has forced me to move to Firefox, and it's actually not bad.
Chrome support is best-effort.

### Technical Perfectionism

I aim to have no errors or warnings in the console, and I try to adhere to best practices. To aid me in this, I have ESLint and StyleLint installed to check my code.

### Unique

I do not use templates or color pallettes. All CSS and JSX is made by me, by hand.

### Where do you get the SVGs?

Most SVGs I am using come from <https://simpleicons.org/>

### Accessible

The internet should be available to anyone and everyone. I aim to make my website easy to navigate with accessibility tools. To aid me in this, I use the [ESLint A11y plugin.](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)

#### Installed Vite Plugins

- [Vite-Plugin-Webfont-DL](https://github.com/feat-agency/vite-plugin-webfont-dl)
- [Vite-Plugin-Solid](https://github.com/solidjs/vite-plugin-solid)
- [Vite-Plugin-Solid-SVG](https://github.com/jfgodoy/vite-plugin-solid-svg)

### What makes this work?

- The [about page](https://aspy.dev/about) has a websocket connection to a self hosted instance of [Lanyard](https://github.com/Phineas/lanyard) (Docker) to grab the discord info
