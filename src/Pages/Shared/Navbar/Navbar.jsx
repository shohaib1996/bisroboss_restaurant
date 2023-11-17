import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";



const Navbar = () => {
    const [dropDown, setDropDown] = useState(false)
    const { user, logOut } = useContext(AuthContext)
    const [cart] = useCart()

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("successfully logout")
                Swal.fire({
                    icon: "success",
                    title: "Good...",
                    text: "LogOut successfully",

                });
            })
            .catch(error => console.log(error));
    }
    return (
        <>
            {/* ========== HEADER ========== */}
            <header className="flex fixed z-10 flex-wrap sm:justify-start sm:flex-nowrap w-full bg-black bg-opacity-50 text-sm py-3 sm:py-0">
                <nav
                    className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
                    aria-label="Global"
                >
                    <div className="flex items-center justify-between">
                        <a
                            className="flex-none text-xl font-semibold text-white"
                            href="#"
                            aria-label="Brand"
                        >
                            <p className="flex flex-col">
                                <span className="font-cinzel font-extrabold text-2xl">BISTRO BOSS</span>
                                <span className="font-inter text-base font-bold uppercase tracking-[5px]">Restaurant</span>
                            </p>
                        </a>
                        <div className="sm:hidden">
                            <button
                                onClick={() => setDropDown(!dropDown)}
                                type="button"
                                className="hs-collapse-toggle w-9 h-9 flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-white/20 text-white hover:border-white/40 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                data-hs-collapse="#navbar-collapse-with-animation"
                                aria-controls="navbar-collapse-with-animation"
                                aria-label="Toggle navigation"
                            >
                                <svg
                                    className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1={3} x2={21} y1={6} y2={6} />
                                    <line x1={3} x2={21} y1={12} y2={12} />
                                    <line x1={3} x2={21} y1={18} y2={18} />
                                </svg>
                                <svg
                                    className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div
                        id="navbar-collapse-with-animation"
                        className={dropDown ? `hs-collapse open overflow-hidden transition-all duration-300 basis-full grow sm:block` : `hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block`}
                    >
                        <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "font-medium text-lg text-[#EEFF25] sm:py-6" : "font-medium text-lg text-white sm:py-6"
                                }
                            >
                                HOME
                            </NavLink>
                            <NavLink
                                to="/contact-us"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "font-medium text-lg text-[#EEFF25] sm:py-6" : "font-medium text-lg text-white sm:py-6"
                                }
                            >
                                CONTACT US
                            </NavLink>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "font-medium text-lg text-[#EEFF25] sm:py-6" : "font-medium text-lg text-white sm:py-6"
                                }
                            >
                                DASHBOARD
                            </NavLink>
                            <NavLink
                                to="/our-menu"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "font-medium text-lg text-[#EEFF25] sm:py-6" : "font-medium text-lg text-white sm:py-6"
                                }
                            >
                                OUR MENU
                            </NavLink>
                            <NavLink
                                to="/our-shop"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "font-medium text-lg text-[#EEFF25] sm:py-6" : "font-medium text-lg text-white sm:py-6"
                                }
                            >
                                OUR SHOP
                            </NavLink>
                            <div>

                                <Link to="/dashboard/cart">
                                    <button className="btn bg-transparent border-none hover:bg-transparent relative">
                                        <img className="w-16 h-12" src="../../../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png" alt="" />
                                        <div className="badge badge-secondary absolute top-6 left-10">+{cart.length}</div>
                                    </button>
                                </Link>
                            </div>

                            {
                                user?.email ? <button
                                    onClick={handleLogOut}
                                    className="flex items-center gap-x-2 font-medium text-white/[.8] hover:text-white sm:border-s sm:border-white/[.3] sm:my-6 sm:ps-6"
                                    href="#"
                                >
                                    <svg
                                        className="flex-shrink-0 w-4 h-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                        <circle cx={12} cy={7} r={4} />
                                    </svg>
                                    Log Out
                                </button> : <Link to="/login">
                                    <button
                                        className="flex items-center gap-x-2 font-medium text-white/[.8] hover:text-white sm:border-s sm:border-white/[.3] sm:my-6 sm:ps-6"
                                        href="#"
                                    >
                                        <svg
                                            className="flex-shrink-0 w-4 h-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                            <circle cx={12} cy={7} r={4} />
                                        </svg>
                                        Log in
                                    </button>
                                </Link>
                            }


                        </div>
                    </div>
                </nav>
            </header>
            {/* ========== END HEADER ========== */}
        </>

    );
};

export default Navbar;