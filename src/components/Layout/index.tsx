import type { FC } from "react";
import MetaTags from "react-meta-tags";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
	title?: string;
	description?: string;
	plain?: boolean;
};

const Layout: FC<Props> = ({ children, title, description, plain }) => (
	<>
		<MetaTags>
			<title>{title}</title>
			<meta name="description" content={description} />
		</MetaTags>
		<div className="min-vh-100 d-flex flex-column">
			{/* Optional header */}
			{!plain && <Header />}

			{/* Content */}
			<main className="container my-5">{children}</main>

			{/* Optional footer */}
			{!plain && <Footer />}
		</div>
	</>
);

Layout.defaultProps = {
	title: "App",
	description: "website powered by react.js",
	plain: false,
};

export default Layout;
