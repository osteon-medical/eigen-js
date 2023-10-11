import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import arraybuffer from '@wemap/rollup-plugin-arraybuffer';

export default [
    {
        input: 'src/eigen.mjs',
        external: ['ms'],
        output: [
            { file: 'dist/index.js', format: 'es' }
        ],
        plugins: [resolve(), commonjs(), arraybuffer({ include: '**/*.wasm' })]
    }
];