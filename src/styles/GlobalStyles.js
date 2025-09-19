import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root {
        --color-background: #FFFFFF;
        --color-primary-background: #fff0f6;
        --color-secondary-background: #faeeee;
        --color-tertiary-background: #e7b9d5ff;
        --color-primary: #ffc8dd;
        --color-primary-dark: #ffafcc;
        --color-accent: #cdb4db;
        --color-accent-light: #e0bbe4;
        --color-text: #ff66c4;
        --color-text-dark: #c9184a;
        --color-text-black: #000000;
        --color-text-white: #fffcfcff;
        --color-border: #fcd5ce;
        --color-primary-light: #fdeaea; 
        --color-botones: #ff5c8a;
    }

    * {
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        padding: 0;
        background: var(--color-background);
        font-family: 'Montserrat', sans-serif;
        color: var(--color-primary);
        -webkit-tap-highlight-color: transparent;
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
    }

    li {
        list-style: none;
    }
`