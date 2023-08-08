import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }

    :focus {
            outline: 0;
            box-shadow: 0 0 0 2px ${(props) => props.theme['mundial-lightblue']}
        }

    body {
        --webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 400 1rem "Bai Jamjuree", sans-serif;
    }
`
