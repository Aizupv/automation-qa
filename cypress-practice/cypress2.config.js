import { defineConfig } from 'cypress';

export default defineConfig({
	allowCypressEnv: true,

	e2e: {
		baseUrl: `https://guest:welcome2qauto@qauto2.forstudy.space`,
	},
});
