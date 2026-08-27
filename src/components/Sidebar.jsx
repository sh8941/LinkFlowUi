import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='w-1/4 h-full bg-gray-200 flex flex-col gap-8 text-xl pt-16 items-start p-8 font-semibold'>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? "bg-violet-700 text-white w-full p-2 rounded-lg  transition-all duration-300"
                        : "text-gray-700  w-full p-2 rounded-lg  transition-all duration-300"
                }
            >
                <i className="ri-links-line"></i> My Urls
            </NavLink>

            <NavLink
                to="/analytics"
                className={({ isActive }) =>
                    isActive ? "bg-violet-700 text-white w-full p-2 rounded-lg  transition-all duration-300"
                        : "text-gray-700  w-full p-2 rounded-lg transition-all duration-300"
                }
            >
                <i className="ri-bar-chart-fill"></i> Analytics
            </NavLink>

            {/* <NavLink
                to="/qr-code"
                className={({ isActive }) =>
                    isActive ? "bg-violet-700 text-white w-full p-2 rounded-lg  transition-all duration-300"
                        : "text-gray-700  w-full p-2 rounded-lg  transition-all duration-300"
                }
            >
                <i className="ri-qr-code-line"></i> QR Codes
            </NavLink> */}

            <NavLink
                to="/links"
                className={({ isActive }) =>
                    isActive ? "bg-violet-700 text-white w-full p-2 rounded-lg  transition-all duration-300"
                        : "text-gray-700  w-full p-2 rounded-lg  transition-all duration-300"
                }
            >
                <i className="ri-links-line"></i> Links
            </NavLink>

            {/* <NavLink
                to="/setting"
                className={({ isActive }) =>
                    isActive ? "bg-violet-700 text-white w-full p-2 rounded-lg  transition-all duration-300"
                        : "text-gray-700  w-full p-2 rounded-lg  transition-all duration-300"
                }
            >
                <i className="ri-settings-5-line"></i> Setting
            </NavLink> */}

            {/* <NavLink
                to="/billing"
                className={({ isActive }) =>
                    isActive ? "bg-violet-700 text-white w-full p-2 rounded-lg  transition-all duration-300"
                        : "text-gray-700  w-full p-2 rounded-lg  transition-all duration-300"
                }
            >
                <i className="ri-bill-line"></i> Billing
            </NavLink> */}
        </div>
    );
}

export default Sidebar;
