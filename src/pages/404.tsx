import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const NotFound = () => (
	<Layout title="404 Not Found" plain>
		<section className="text-center">
			<h1 className="mb-5">Not Found</h1>
			<Link to="/" className="fs-3 btn btn-outline-dark">
				Go Back
			</Link>
		</section>
	</Layout>
);

export default NotFound;
