import Header from "../components/re-usable-components/Header"
import StatCard from "../components/re-usable-components/StatCard";
import { motion } from "framer-motion"
import { TbPackages } from "react-icons/tb";
import { HiMiniArrowTrendingUp, HiCurrencyDollar } from "react-icons/hi2";
import { GrAlert } from "react-icons/gr";
import ProductTable from "../components/Products/ProductTable";
import SalesTrendChart from "../components/Products/SalesTrendChart";
import CategoryDistributionChart from "../components/Overview/CategoryDistributionChart";

function ProductsPage() {
    return (
        <div className='flex-1 overflow-auto relative z-10'>
            <Header title="Products" />

            <main className="max-w-7xl mx-auto py-6 px-4  lg:px-8 xl:px-8">
                <motion.div
                    className="grid grid-cols-1 gap-5 sm:grid-cols-1 lg:grid-cols-4 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <StatCard name='Total Products' icon={TbPackages} value='23,798' color="#6366f1" />
                    <StatCard name='Top Selling' icon={HiMiniArrowTrendingUp} value='237' color='#10b981' />
                    <StatCard name='Low Stock' icon={GrAlert} value='24' color='#f59e0b' />
                    <StatCard name='Total Revenue' icon={HiCurrencyDollar} value='$536,978' color="#ef4444" />
                </motion.div>

                <ProductTable />

                {/* Chart */}
                <div className='grid grid-col-1 lg:grid-cols-2 gap-8'>
                    <SalesTrendChart />
                    <CategoryDistributionChart />
                </div>
            </main>
        </div>
    )
}

export default ProductsPage