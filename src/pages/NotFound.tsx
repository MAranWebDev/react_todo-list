import { Link } from "react-router-dom";
import { Body } from "../components/Layout/Body";

const NotFound = () => {
  return (
    <Body title="Not Found" blank>
      <section className="text-center">
        <h1 className="mb-5">Not Found</h1>
        <Link to="/" className="fs-3 btn btn-outline-dark">
          Go Back
        </Link>
      </section>
    </Body>
  );
};

export { NotFound };
