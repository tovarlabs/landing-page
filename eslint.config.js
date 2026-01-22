import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [
    // Configuración para archivos JavaScript y TypeScript
    {
        files: ['**/*.js', '**/*.mjs', '**/*.ts'],
        languageOptions: {
            parser: tsparser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        plugins: {
            '@typescript-eslint': tseslint,
        },
        rules: {
            'linebreak-style': ['error', 'unix'],
            quotes: ['error', 'single'],
            semi: ['error', 'always'],
        },
    },
    // Configuración para archivos Astro
    ...eslintPluginAstro.configs.recommended,
    {
        files: ['**/*.astro'],
        rules: {
            'astro/semi': ['error', 'always'],
        },
    },
];
