import { NavLink } from "react-router-dom";

type Props = {
	to: string;
	name: string;
};

const ActiveLink = ({ to, name }: Props) => (
	<NavLink to={to} className="nav-link" activeClassName="active" exact>
		{name}
	</NavLink>
);

export default ActiveLink;
