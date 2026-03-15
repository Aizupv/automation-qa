import { defineConfig } from 'cypress';

export default defineConfig({
	allowCypressEnv: true,
	watchForFileChanges: false,

	e2e: {
		baseUrl: `https://guest:welcome2qauto@qauto.forstudy.space`,
	},
});
