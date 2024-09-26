import Header from "../components/re-usable-components/Header"
import StatCard from "../components/re-usable-components/StatCard";
import { motion } from "framer-motion"
import { LuZap } from "react-icons/lu";
import { HiUsers } from "react-icons/hi";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { BsBarChart } from "react-icons/bs";



function OverviewPage() {
    return (
        <div className='flex-1 overflow-auto relative z-10'>
            <Header title="Overview" />

            <main className="max-w-7xl mx-auto py-6 px-4  lg:px-8 xl:px-8">
                <motion.div
                    className="grid grid-cols-1 gap-5 sm:grid-cols-1 lg:grid-cols-4 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <StatCard name='Total Sales' icon={LuZap} value='$14,756' color="#6366f1" />
                    <StatCard name='New User' icon={HiUsers} value='3,432' color='#8b5cf6' />
                    <StatCard name='Total Products' icon={HiMiniShoppingBag} value='487' color='#ec4899' />
                    <StatCard name='Conversion Rate' icon={BsBarChart} value='14.6%' color="#10b981" />
                </motion.div>
            </main>
        </div>
    )
}

export default OverviewPage