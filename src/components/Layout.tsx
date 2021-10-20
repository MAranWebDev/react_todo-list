import type { FC } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout: FC = ({ children }) => (
	<>
		<div className="min-vh-100 d-flex flex-column">
			<Header />
			<main className="container">{children}</main>
			<Footer />
		</div>
	</>
);

export default Layout;
