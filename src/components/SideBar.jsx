import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { HiMiniShoppingBag, HiUsers, HiCurrencyDollar, HiMiniShoppingCart, HiMiniArrowTrendingUp } from "react-icons/hi2";
import { FcSettings } from "react-icons/fc";
import { BsBarChartFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";




const SIDEBAR_ITEMS = [
    {
        name: "Overview",
        icon: BsBarChartFill,
        color: '#6366f1',
        href: '/',
    },
    { name: "Products", icon: HiMiniShoppingBag, color: "#8b5cf6", href: '/Products' },
    { name: "Users", icon: HiUsers, color: "#ec4899", href: '/users' },
    { name: "Sales", icon: HiCurrencyDollar, color: "#10b981", href: '/sales' },
    { name: "Orders", icon: HiMiniShoppingCart, color: "#f59e0b", href: '/orders' },
    { name: "Analytics", icon: HiMiniArrowTrendingUp, color: "#3b82f6", href: '/analytics' },
    { name: "Settings", icon: FcSettings, color: "#6ee7b7", href: '/settings' }
];

function SideBar() {

    const [isOpen, setIsOpen] = useState(true);

    return (
        <motion.div className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${isOpen ? 'w-64' : 'w-20'}`}
            animate={{ width: isOpen ? 256 : 80 }}
        >
            <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
                >
                    <GiHamburgerMenu size={24} />
                </motion.button>


                <nav className="mt-8 flex-grow">
                    {SIDEBAR_ITEMS.map((item, index) => (
                        <Link key={item.name} to={item.href}>
                            <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
                                <item.icon size={20} style={{ color: item.color, minWidth: '20px' }} />

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.span
                                            className="ml-4 whitespace-nowrap"
                                            initial={{ opacity: 0, width: 0 }}
                                            animate={{ opacity: 1, width: "auto" }}
                                            exit={{ opacity: 0, width: 0 }}
                                            transition={{
                                                duration: 0.2, delay: 0.3
                                            }}
                                        >
                                            {item.name}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </Link>
                    ))}
                </nav>
            </div>
        </motion.div>
    )
}

export default SideBar;