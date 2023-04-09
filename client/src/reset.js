import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  font-family: sans-serif; /* 1 */
  -ms-text-size-adjust: 100%; /* 2 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/**
   * Remove default margin.
   */

body {
  margin: 0;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section,
summary {
  display: block;
}

input:-webkit-autofill { -webkit-box-shadow: 0 0 0 30px #fff inset ; -webkit-text-fill-color: #000; }
input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active { transition: background-color 5000s ease-in-out 0s; }
audio,
canvas,
progress,
video {
  display: inline-block; /* 1 */
  vertical-align: baseline; /* 2 */
}

audio:not([controls]) {
  display: none;
  height: 0;
}

[hidden],
template {
  display: none;
}


a {
  background-color: transparent;
}

/**
   * Improve readability when focused and also mouse hovered in all browsers.
   */

a:active,
a:hover {
  outline: 0;
}

/* Text-level semantics
     ========================================================================== */

/**
   * Address styling not present in IE 8/9/10/11, Safari, and Chrome.
   */

abbr[title] {
  border-bottom: 1px dotted;
}


b,
strong {
  font-weight: bold;
}

/**
   * Address styling not present in Safari and Chrome.
   */

dfn {
  font-style: italic;
}


h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/**
   * Address styling not present in IE 8/9.
   */

mark {
  background: #ff0;
  color: #000;
}

/**
   * Address inconsistent and variable font size in all browsers.
   */

small {
  font-size: 80%;
}


sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sup {
  top: -0.5em;
}

sub {
  bottom: -0.25em;
}

/* Embedded content
     ========================================================================== */


img {
  border: 0;
}

/**
   * Correct overflow not hidden in IE 9/10/11.
   */

svg:not(:root) {
  overflow: hidden;
}

/* Grouping content
     ========================================================================== */

/**
   * Address margin not present in IE 8/9 and Safari.
   */

figure {
  margin: 1em 40px;
}

/**
   * Address differences between Firefox and other browsers.
   */

hr {
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  height: 0;
}

/**
   * Contain overflow in all browsers.
   */

pre {
  overflow: auto;
}
code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

/* Forms
     ========================================================================== */


button,
input,
optgroup,
select,
textarea {
  color: inherit; /* 1 */
  font: inherit; /* 2 */
  margin: 0; /* 3 */
}

button {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

button,
  html input[type="button"], /* 1 */
  input[type="reset"],
  input[type="submit"] {
  -webkit-appearance: button; /* 2 */
  cursor: pointer; /* 3 */
}

/**
   * Re-set default cursor for disabled elements.
   */

button[disabled],
html input[disabled] {
  cursor: default;
}

/**
   * Remove inner padding and border in Firefox 4+.
   */

button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}

input {
  line-height: normal;
}


input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

input[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box; /* 2 */
  box-sizing: content-box;
}


input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}


fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}


legend {
  border: 0; /* 1 */
  padding: 0; /* 2 */
}

/**
   * Remove default vertical scrollbar in IE 8/9/10/11.
   */

textarea {
  overflow: auto;
}


optgroup {
  font-weight: bold;
}

/* Tables
     ========================================================================== */

/**
   * Remove most spacing between table cells.
   */

table {
  border-collapse: collapse;
  border-spacing: 0;
}

td,
th {
  padding: 0;
}
`;
