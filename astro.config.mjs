import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	// Enable React to support React JSX components.
	integrations: [react()],
	site: "https://carloseustaquio.github.io",
	base: import.meta.env.PROD ? "/my-items-store" : undefined,
});
