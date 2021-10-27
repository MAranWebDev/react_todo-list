import NavLinks from "./NavLinks";

const Footer = () => (
	<footer className="mt-auto bg-dark text-light">
		<div className="container text-center">
			<nav className="navbar navbar-expand-lg navbar-dark">
				<div className="navbar-nav mx-auto">
					<NavLinks />
				</div>
			</nav>
			<p>&copy; MAranWebDev INC.</p>
		</div>
	</footer>
);

export default Footer;
