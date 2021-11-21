import { NavLink } from "react-router-dom";

type Props = {
	to: string;
	name: string;
};

const ActiveLink = ({ to, name }: Props) => (
	<NavLink to={to} className="nav-link">
		{name}
	</NavLink>
);

export default ActiveLink;
