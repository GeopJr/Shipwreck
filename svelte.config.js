import staticAdapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: staticAdapter({ fallback: 'index.html' }),
		target: '#svelte'
	}
};

export default config;