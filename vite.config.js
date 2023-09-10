import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		target: 'modules',
	},
	server: {
		port: 3000, // Port, den Sie verwenden möchten
	},
	// Weitere Vite-Konfigurationsoptionen hier hinzufügen
});
