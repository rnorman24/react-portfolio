import React, { Component } from 'react';
import { injectGlobal } from 'react-emotion';

class Global extends Component {
  render() {
    injectGlobal`
      * { box-sizing: border-box; }
      margin: 0;

      @import url("https://p.typekit.net/p.css?s=1&k=smi4hhm&ht=tk&f=10881.10884.10886&a=8722612&app=typekit&e=css");

      @font-face {
        font-family:"futura-pt";
        src:url("https://use.typekit.net/af/309dfe/000000000000000000010091/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/309dfe/000000000000000000010091/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/309dfe/000000000000000000010091/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style:normal;font-weight:700;
      }

      @font-face {
        font-family:"futura-pt";
        src:url("https://use.typekit.net/af/9b05f3/000000000000000000013365/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/9b05f3/000000000000000000013365/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/9b05f3/000000000000000000013365/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
        font-style:normal;font-weight:400;
      }

      @font-face {
        font-family:"futura-pt";
        src:url("https://use.typekit.net/af/ae4f6c/000000000000000000010096/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff2"),url("https://use.typekit.net/af/ae4f6c/000000000000000000010096/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff"),url("https://use.typekit.net/af/ae4f6c/000000000000000000010096/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("opentype");
        font-style:normal;font-weight:300;
      }

      html {
        font-family: 'futura-pt', helvetica, san-serif;
        font-size: 100%;
        font-weight: 400;
      }
      img {
        max-width: 100%; 
        display: block;
      }
      h1, h2, h3 {
        margin: 0;
        text-transform: uppercase;
        line-height: 1.2;
      }
      h4 {
        font-size: 1rem;
        font-weight: 400;
        margin: 0.1rem 0 0.2rem;
        line-height: 1.2;
      }
      a {
        color: #3c3b37;
        text-decoration: none;
      }
      a:hover {
        color: #f9423a;
      }
      ul {
        list-style: none;
        padding: 0;
        margin: 1rem 0 0;
      }
      ul > li {
        padding: 0;
      }
      ol {
        padding: 0;
        margin: 0;  
      }
      :focus {
        outline: 1px solid #f9423a;
      }      
    `;
    return React.Children.only(this.props.children);
    }
  }

export default Global;
