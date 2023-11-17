import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchMenu = async () => {
    const response = await axios.get('http://localhost:5000/menu');
    return response.data;
}
const useMenu = () => {
    const { data, isLoading, refetch } = useQuery({ queryKey: ['menus'], queryFn: fetchMenu })
    // console.log(data);
    return [data, isLoading, refetch]
}


export default useMenu;