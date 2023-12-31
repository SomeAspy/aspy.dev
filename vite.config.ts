import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import webfontDownload from "vite-plugin-webfont-dl";
import solidSvg from "vite-plugin-solid-svg";

export default defineConfig({
    plugins:[
        solidPlugin(),
        solidSvg({
            defaultAsComponent: true,
            svgo: {
                enabled: true,
                svgoConfig: {
                    multipass: true,
                    plugins: [
                        "preset-default",
                        "cleanupListOfValues",
                        "removeDimensions",
                        "removeOffCanvasPaths",
                        "removeXMLNS",
                        "reusePaths",
                    ],
                },
            },
        }),
        webfontDownload(),
    ],
    server: {
        port: 3000,
    },
    preview: {
        port: 3000,
    },
    build: {
        target: "esnext",
        sourcemap: true,
    }
}) ;
