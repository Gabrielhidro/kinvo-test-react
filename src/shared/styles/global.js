import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
  --white: #FFFFFF;
  --white-200: #F8FAFB;
  --white-400: #EEF2F4;
  --white-600: #DAE0E3;

  --text: #707B81;
  --text-opacity: #A5A5A5;
  --text-200: #627179;
  --text-400: #4E5B61;

  --purple: #4C309B;
  --purple-light: #8A51BA;
  --blue: #008DCB;
  --green: #38BFA0;
}

html {
  font-family: 'Montserrat', sans-serif;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
   }

button {
  cursor: pointer;
}
`