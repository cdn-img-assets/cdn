import React from 'react';
import { renderToString } from 'react-dom/server';
import { PageContextServer } from './types';
import { PageShell } from './PageShell';

export const passToClient = ['pageProps', 'urlPathname'];

export async function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext;
  const pageHtml = renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  );

  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ImageHub</title>
      </head>
      <body>
        <div id="root">${pageHtml}</div>
      </body>
    </html>`;
}
