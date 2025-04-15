import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { PageContextClient } from './types';
import { PageShell } from './PageShell';

export async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext;
  hydrateRoot(
    document.getElementById('root')!,
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  );
}
