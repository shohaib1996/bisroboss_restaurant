import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SectionTitle from "../../../Utils/SectionTitle/SectionTitle";
import ChefItemCard from "./ChefItemCard/ChefItemCard";

const fetchMenu = async () => {
    const response = await axios.get('http://localhost:5000/menu');
    return response.data;
}
const ChefRecommend = () => {
    const { data: menus, isLoading } = useQuery({ queryKey: ['menus'], queryFn: fetchMenu })
    const chefRecommends = menus?.filter(item => item.category === 'salad')
    const heading = "CHEF RECOMMENDS"
    const subHeading = "---Should Try---"

    if (isLoading) {
        return (
            <div className="min-h-[15rem] flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
                    <div className="flex justify-center">
                        <div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
 

    return (
        <div className="max-w-6xl mx-auto mb-12">
            <SectionTitle heading={heading} subHeading={subHeading}></SectionTitle>
            <div className="grid grid-cols-3 gap-6 mt-16">
                {
                    chefRecommends?.slice(0, 3).map(item => <ChefItemCard key={item._id} item={item}></ChefItemCard>)
                }
            </div>
            
        </div>
    );
};

export default ChefRecommend;