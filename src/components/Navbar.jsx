import { Link, NavLink } from "react-router-dom";


const Navbar = ({textColor}) => {
    const link = <>
        <li> <NavLink className={({ isActive }) => `font-semibold ${isActive ? 'text-[#F79B72]' : `${textColor}`}`} to={'/'}>Home</NavLink></li>
        <li><NavLink className={({ isActive }) => `font-semibold ${isActive ? 'text-[#F79B72]' : `${textColor}`}`} to={'/updateProfile'}>Update Profile</NavLink></li>
    </>
    return (
        <div className="navbar lg:w-11/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className={`${textColor} h-5 w-5`} fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-gray-400 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>
                <Link to='/' className={`lg:text-xl font-semibold ${textColor}`}>Travel Adventures</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
                <NavLink to='/loginModal' className="btn">Login</NavLink>
            </div>
        </div>
    );
};

export default Navbar;