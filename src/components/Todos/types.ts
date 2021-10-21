type IdType = { id: string };

type TodoTypes = IdType & {
	name: string;
	completed: boolean;
};

type CallStringType = (value: string) => void;

type ContextTypes = {
	todos: TodoTypes[];
	setTodos: (value: TodoTypes[]) => void;
	editId: string;
	setEditId: CallStringType;
	edit: string;
	setEdit: CallStringType;
};

export type { IdType, TodoTypes, ContextTypes };
