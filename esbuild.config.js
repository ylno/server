
import esbuild from "esbuild";

esbuild.build({
	entryPoints: ['./src/cli.mjs'], // Geben Sie den Einstiegspunkt Ihrer Anwendung an
	bundle: true, // Erstellen Sie ein gebündeltes Ausgabedatei
	outfile: './dist/server.js', // Geben Sie den Ausgabeort und den Dateinamen an
	platform: 'node', // Zielplattform (Node.js)
	target: ['node18'], // Node.js-Zielversion (Sie können dies anpassen)
	format: 'esm', // Gemeinsamesjs-Modulformat
	external: [], // Geben Sie externe Abhängigkeiten an, die nicht gebündelt werden sollen
}).catch(() => process.exit(1));
