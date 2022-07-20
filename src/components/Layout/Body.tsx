import type { PropsWithChildren } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Header } from "./Header";
import { Footer } from "./Footer";

type BodyType = { title?: string; blank?: true };

const Body = ({
  children,
  title = "Todo App",
  blank,
}: PropsWithChildren<BodyType>) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="min-vh-100 d-flex flex-column">
        {!blank ? <Header /> : null}
        {children}
        {!blank ? <Footer /> : null}
      </div>
    </HelmetProvider>
  );
};

export { Body };
