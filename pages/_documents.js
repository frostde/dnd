import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    src: url('Poppins-Black.ttf');
    src: url('Poppins-BlackItalic.ttf');
    src: url('Poppins-Bold.ttf');
    src: url('Poppins-BoldItalic.ttf');
    src: url('Poppins-ExtraBold.ttf');
    src: url('Poppins-ExtraBoldItalic.ttf');
    src: url('Poppins-ExtraLight.ttf');
    src: url('Poppins-ExtraLightItalic.ttf');
    src: url('Poppins-Italic.ttf');
    src: url('Poppins-Light.ttf');
    src: url('Poppins-LightItalic.ttf');
    src: url('Poppins-Medium.ttf');
    src: url('Poppins-MediumItalic.ttf');
    src: url('Poppins-Regular.ttf');
    src: url('Poppins-SemiBold.ttf');
    src: url('Poppins-SemiBoldItalic.ttf');
    src: url('Poppins-Thin.ttf');
    src: url('Poppins-ThinItalic.ttf');
  }
`

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0"
          />
        </Head>
        <body>
          <GlobalStyle />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}