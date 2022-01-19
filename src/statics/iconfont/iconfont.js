import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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


