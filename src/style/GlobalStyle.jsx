import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    /* reset.css */
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
    }

    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
      background-color: #161616;
    }
    *{
      box-sizing: border-box;
      @font-face {
          font-family: 'IBM';
          src: local(IBMPlexSansKR),
              url("./fonts/IBMPlexSansKR-Bold.woff2") format("woff2");
          font-weight: 400;
          font-style: normal;
          font-display: swap;
      }

      @font-face {
          font-family: 'IBM';
          src: local(IBMPlexSansKR),
              url("./fonts/IBMPlexSansKR.woff2") format("woff2");
          font-weight: 700;
          font-style: normal;
          font-display: swap;
      }
      @font-face {
          font-family: 'Maple';
          src: local(MaplestoryLight),
              url("./fonts/Maplestory-Light.woff2") format("woff2");
          font-weight: normal;
          font-style: normal;
          font-display: swap;
      }
    }
`;
