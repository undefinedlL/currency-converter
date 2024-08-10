/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

const colorConstants = {
    darkGreen: '#172420',
    green: '#24382f',
    grey: '#AFC1B6',
    lightGreen: '#648374',
    red: '#4c1501',
};

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
        colors: {
            transparent: colors.transparent,
            ...colorConstants,
        },
    },
    plugins: [],
};
