import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world',
		fullname: 'Nga Le'
	}
});

export default app;
