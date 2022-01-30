import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className="dark">
        <Head>
          <meta property="og:site_name" content="facebook" />
          {/* <meta property="twitter:site" content="@readit" /> */}
          <meta property="twitter:card" content="summary" />
          <meta property="og:type" content="website" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-white dark:bg-dim-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
