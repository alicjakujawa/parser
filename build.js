const esbuild = require('esbuild');

esbuild.build({
    entryPoints: ['./src/index.ts'],
    bundle: true,
    platform: 'node',
    outfile: './dist/bundle.js',
    tsconfig: './tsconfig.json',
}).catch(() => process.exit(1))
