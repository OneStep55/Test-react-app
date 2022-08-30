import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store/userSlice";

// Header
export function Navigation() {
    const dispatch = useDispatch()
    return (
        <nav className="h-[50px] flex justify-between px-5 bg-gray-400 text-white items-center">
            <span>React App</span>

            <span>
                <Link to = '/' className="mr-5">Users</Link>
                <button className=" bg-red-500 py-1 px-2" onClick={() => {
                    // if users clicks to logout button disptach logout function from userSlice
                    dispatch(logout())
                    
                }}>Logout</button>
            </span>
        </nav>
    )
}