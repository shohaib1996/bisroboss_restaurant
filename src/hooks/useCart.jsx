import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";



const useCart = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useContext(AuthContext)
    const { data: cart = [], refetch } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`carts?email=${user.email}`)
            const data = await res.data;
            return data
        }
    })
    return [cart, refetch];
};

export default useCart;