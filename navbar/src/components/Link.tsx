import { NavLink } from "react-router-dom";

export default function Link({ to, content }: { to: string, content: string }) {
    return (
        <NavLink to={to} className="w-full h-full">
            {content}
        </NavLink>
    )
}