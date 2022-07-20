import { Body } from "../components/Layout/Body";
import { Todos } from "../components/Todos/Todos";

const Home = () => {
  return (
    <Body title="Home">
      <main className="container my-5">
        <h1 className="mb-3">Todo Client</h1>
        <Todos />
      </main>
    </Body>
  );
};

export { Home };
