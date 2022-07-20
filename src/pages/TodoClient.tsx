import { Body } from "../components/Layout/Body";
import { Todos } from "../components/Todos/Todos";

const TodoClient = () => {
  return (
    <Body title="Todo Client">
      <h1 className="mb-3">Todo Client</h1>
      <Todos />
    </Body>
  );
};

export { TodoClient };
