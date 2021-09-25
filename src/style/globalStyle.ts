import { createGlobalStyle} from "styled-components";


export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #292929;
        --yellow: #FFCE00;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
    }

    html {
        @media (max-width: 1080px){
            font-size: 93.75%;
        }

        @media (max-width: 720px)
        {
            font-size: 87.5%;
        }
    }

    body {
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
        
    }


`