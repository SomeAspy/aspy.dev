# Aspy.dev

My Personal website that I work on in my free time.

Now a complete ground up rewrite in TSX!

It may not look the best but I'm proud of it. I'm not good with reactive libraries or CSS, but its been a lot of fun and a great learning experience working on this. When I started this project I had no idea how CSS or JSX worked.

This site also incorporates some stuff for its subdomains, like the stuff under /external

~~I develop this website with Chrome Canary in mind, and also test for Firefox Nightly with lower priority. This is simply due to the market share for the browsers.~~
I now build this with Firefox Nightly mainly. This is due to Google Chrome's funny ManifestV3 (See https://www.eff.org/deeplinks/2021/12/chrome-users-beware-manifest-v3-deceitful-and-threatening for a not-so-short summary)

Testing with Edge will generally not be done, [However most used practices should be auto-magically checked against browsers by ESLint Compat.](https://github.com/amilajack/eslint-plugin-compat)
That being said, if you find any issues please open an issue!

## Hosting

I host the base domain on my own VPS. Subdomains on the site are generally also hosted on my VPS.

## Goals

Some goals are listed in the TODO.txt file.
However, the main goals I have for this site are as follows:

### Modern Standards

One of my goals for the site is to continually use the latest features, for example, WebP, and AVIF or JPEG XL when support is finalized. This website entirely does not support Internet Explorer, for these reasons.

### Technical Perfectionism

I aim to have no errors or warnings in the console, and I try to adhere to best practices. To aid me in this, I have ESLint installed to check my code.

### Unique

I do not use templates or color pallettes. All CSS and JSX is made by me, by hand.

### Accessible

The internet should be available to anyone and everyone. I aim to make my website easy to navigate with accessibility tools. To aid me in this, I use the [ESLint A11y plugin.](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)

#### Installed ESLint Plugins:

-   [ESLint A11y plugin](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y) - Enforce best accessibility practices
-   [ESLint Solid plugin](https://github.com/solidjs-community/eslint-plugin-solid) - Enforce SolidJS best practices
-   [ESLint Compat Plugin](https://github.com/amilajack/eslint-plugin-compat) - Check compatibility with browsers
-   [ESLint Only Error Plugin](https://github.com/davidjbradshaw/eslint-plugin-only-error) - Make all ESLint warnings errors

### What makes this work?

-   The [about page](https://aspy.dev/about) has a websocket connection to a self hosted instance of [Lanyard](https://github.com/Phineas/lanyard) (Dockerized) to grab the discord info
