import NavLinks from "./Navlinks";

const Footer = () => (
	<footer className="mt-auto bg-dark text-light">
		<div className="container text-center">
			<nav className="navbar navbar-expand-lg navbar-dark">
				<div className="navbar-nav mx-auto">
					<NavLinks />
				</div>
			</nav>
			<p>Footer</p>
		</div>
	</footer>
);

export default Footer;
