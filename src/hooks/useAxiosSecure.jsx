import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        // console.log('request stopped by interceptors', token);
        config.headers.authorization = `Bearer ${token}`
        return config
    }, function (error) {
        return Promise.reject(error)
    })

    // intercepts 401 and 403 status
    axiosSecure.interceptors.response.use(function (response) {
        return response
    }, async (error) => {

        const status = error.response.status
        // console.log('status error', status);
        if (status === 401 || status === 403) {
            await logOut()
                .then(() => {
                    console.log("successfully logout")
                    Swal.fire({
                        icon: "success",
                        title: "Good...",
                        text: "LogOut successfully",

                    });
                })
                .catch(error => console.log(error));
            navigate('/login')

        }
        return Promise.reject(error)
    })
    return axiosSecure
};

export default useAxiosSecure;

