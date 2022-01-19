import { createGlobalStyle } from 'styled-components';

//adding global style using styled-components, (new version)
export const Globalstyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    //background-color: green; test if this is worked globally
  }

  @font-face {
    font-family: "iconfont"; /* Project id 3152226 */
    src: url('./iconfont.woff2?t=1642594298162') format('woff2'),
        url('./iconfont.woff?t=1642594298162') format('woff'),
        url('./iconfont.ttf?t=1642594298162') format('truetype');
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

`




