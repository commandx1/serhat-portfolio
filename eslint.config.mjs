import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.config({
        extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
        plugins: ['import'],
        rules: {
            semi: ['error'],
            quotes: ['error', 'single'],
            indent: ['error', 4],
            'prefer-arrow-callback': ['error'],
            'prefer-template': ['error'],
            'space-infix-ops': ['error', { 'int32Hint': false }],
            'space-before-blocks': 'error',
            'comma-spacing':'error',
            'comma-style': ['error', 'last'],
            'import/no-absolute-path': 'error',
            'import/no-named-as-default-member': 'off',
            'import/no-useless-path-segments': 'error',
            'no-multiple-empty-lines': ['error', { max:1 }],
            'no-console': ['warn'],
            eqeqeq: ['error', 'always'], 'prefer-const': 'error',
            'object-curly-spacing': ['error', 'always'],
            'no-undef': 'error',
            'import/order': [
                'warn',
                {
                    groups: [
                        ['builtin', 'external'], // Node.js and third party libraries
                        ['internal'], // internal modules (starts with @)
                        ['parent', 'sibling', 'index'], // sort according to file structure
                    ],
                    'newlines-between': 'always', // Gruplar arasında yeni satır bırak
                    alphabetize: {
                        order: 'asc',
                        orderImportKind: 'asc',
                    },
                },
            ],
        },
    }),
];

export default eslintConfig;
