import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root{
        --color-background: #FFFFFF;
        --color-secondary-background: #faeeeeff;
        --color-text: #ff66c4;
        --color-primary: #f4d2d2ff;
    }
    html {
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        padding: 0;
        background: var(--color-background);
        font-family: 'Montserrat', sans-serif;
        color: var(color-text);
        -webkit-tap-highlight-color: transparent;
        overflow-x: hidden
    }

    a {
        text-decoration: none;
    }

    li {
        list-style: none;
    }
`