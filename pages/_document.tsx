import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

const NAME = "Retrieve XC";
const DESCRIPTION = "Organize and track paragliding retrieves.";
const LOGO = "/static/images/logo.png";

class _Document extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en" dir="ltr" className="h-full bg-sky-900">
        <Head>
          <meta name="application-name" content={NAME} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content={NAME} />
          <meta name="description" content={DESCRIPTION} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#0C4A6E" />

          <title>{NAME}</title>
          <meta name="description" content={DESCRIPTION} />

          <meta property="og:url" content="https://retrievexc.com" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={NAME} />
          <meta property="og:description" content={DESCRIPTION} />
          <meta property="og:image" content="" />

          <meta name="twitter:card" content={LOGO} />
          <meta property="twitter:domain" content="retrievexc.com" />
          <meta property="twitter:url" content="https://retrievexc.com" />
          <meta name="twitter:title" content={DESCRIPTION} />
          <meta name="twitter:description" content={DESCRIPTION} />
          <meta name="twitter:image" content={LOGO} />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body className="h-full">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default _Document;
