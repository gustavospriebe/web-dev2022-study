import { Outlet, useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { getCategory } from "../api";

export default function Category() {
    const { categoryId } = useParams();

    const category = getCategory(categoryId);

    const active = ({ isActive }) => (isActive ? "session-active" : null);

    return (
        <>
            <h2>{category.name} Sessions</h2>
            <ul className="session-list">
                {category.sessions.map((session) => (
                    <li className="session" key={session.id}>
                        <NavLink className={active} to={session.id}>
                            <p className="session-name">{session.name} </p>
                            <p>
                                {session.speaker.name} | {session.speaker.org}
                            </p>
                        </NavLink>
                    </li>
                ))}
            </ul>
            <Outlet />
        </>
    );
}
