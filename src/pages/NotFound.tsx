import { Link } from "react-router-dom";
import { Body } from "../components/Layout/Body";

const NotFound = () => {
  return (
    <Body title="Not Found" blank>
      <main className="m-auto text-center">
        <h1 className="display-2">404 Not Found</h1>
        <Link to="/" className="btn btn-outline-dark btn-lg">
          Go Back
        </Link>
      </main>
    </Body>
  );
};

export { NotFound };
