import { Links } from "../Router";
import { Link } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Logo = () => <div>
    <h1>PlayAstra</h1>
</div>

const Navbar = () => {
    const links = () => Links.map((k, i) => (
        <li key={i}><Link to={k.path}>{k.title}</Link></li>
    ));

    return (
        <div className="navbar bg-neutral text-neutral-content">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral text-neutral-content rounded-box w-52">
                        {links()}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">
                    <Logo />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {links()}
                </ul>
            </div>
            <div className="navbar-end">
                <ConnectButton />
            </div>
        </div>
    )
};

export default Navbar;