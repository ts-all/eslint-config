import stylistic from '@stylistic/eslint-plugin';
import tseslint from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import jsdoc from 'eslint-plugin-jsdoc';
import sonarjs from 'eslint-plugin-sonarjs';
import unicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import { eslintRules } from './rules/eslint.rules.js';
import { jsdocRules, sonarRules, unicornRules } from './rules/plugins.rules.js';
import { stylisticRules } from './rules/stylistic.rules.js';
import { tseslintRules } from './rules/tseslint.rules.js';

const config: FlatConfig.ConfigArray = [
    {
        ignores: ['**/*.js', '**/*.cjs', '**/*.mjs', '**/*.d.ts', '**/*.d.mts'],
    },
    {
        name: '@ts-all/eslint-config',
        files: ['**/*.ts', '**/*.mts'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.builtin,
                ...globals.nodeBuiltin,
            },
            parser,
            parserOptions: {
                ecmaVersion: 'latest',
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        plugins: {
            '@typescript-eslint': tseslint,
            '@stylistic': stylistic,
            jsdoc,
            sonarjs,
            unicorn,
        },
        rules: {
            ...eslintRules,
            ...tseslintRules,
            ...stylisticRules,
            ...jsdocRules,
            ...sonarRules,
            ...unicornRules,
        },
    },
] satisfies FlatConfig.ConfigArray;

export default config;
