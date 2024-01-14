import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'theme-dark-blue': '#152e4d',
                'theme-darker-blue': '#12263f',
                'theme-lighter-blue': '#0891B2',
                'theme-hover-lighter-blue': '#167BB7',
                'theme-green-fluo': '#4afc32',
                'theme-black-dark': '#121212',
                'theme-black-darker': '#0f0f0f',
            }
        },
    },

    plugins: [forms, typography],
};
