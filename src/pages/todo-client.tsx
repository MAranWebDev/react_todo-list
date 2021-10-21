import Layout from "../components/Layout";
import Todos from "../components/Todos/index";

const TodoClient = () => (
	<Layout title="Todo Client">
		<h1 className="mb-3">Todo Client</h1>
		<Todos />
	</Layout>
);

export default TodoClient;
