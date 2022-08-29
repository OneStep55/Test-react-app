import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <nav className="h-[50px] flex justify-between px-5 bg-gray-400 text-white items-center">
            <span>React App</span>

            <span>
                <Link to = '/' className="mr-3">Users</Link>
            </span>
        </nav>
    )
}