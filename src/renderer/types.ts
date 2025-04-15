export type PageContextServer = {
  Page: (pageProps: any) => JSX.Element;
  pageProps: any;
  urlPathname: string;
};

export type PageContextClient = {
  Page: (pageProps: any) => JSX.Element;
  pageProps: any;
  urlPathname: string;
};

export type PageContext = PageContextClient | PageContextServer;
