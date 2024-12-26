import { Link, NavLink } from "react-router-dom"

const Header = () => {
    
    const links = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/jobs"}>Jobs</NavLink></li>
        <li><NavLink to={"/applied"}>Applied Jobs</NavLink></li>
    </>
    return (

        <div className="bg-[#7E90FE] bg-opacity-5">
            <div className="navbar max-w-screen-2xl mx-auto md:px-28 md:py-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to={'/'} href="" className="text-4xl font-bold">CareerHub</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {links}
                </ul>
            </div>
            <div className="navbar-end">
                <NavLink to={'/jobs'} className="text-xl bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:bg-[#7E90FE] px-5 py-4 text-white font-semibold rounded-lg active:scale-95 transition-all">Start Applying</NavLink> 
            </div>
        </div>
        </div>
    )
}

export default Header