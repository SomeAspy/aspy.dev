import { defineConfig, fontProviders } from "astro/config";
// https://astro.build/config
export default defineConfig({
	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: "Manrope",
			cssVariable: "--font-manrope",
		},
	],
	integrations: [],
});
