import { Body } from "../components/Layout/Body";

const About = () => {
  return (
    <Body title="About">
      <main className="container my-5">
        <h2 className="mb-3">About this project:</h2>
        <p>
          This project represents a vanilla todo list done with react, context,
          local storage and boostrap
        </p>
      </main>
    </Body>
  );
};

export { About };
