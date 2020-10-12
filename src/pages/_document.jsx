import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />

        <body className="text-black-1 bg-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
