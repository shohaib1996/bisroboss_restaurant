import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import toast from "react-hot-toast";



const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
   
    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = axiosSecure.get("/users")
            return (await res).data
        }
    })
    // console.log(users);
    const handleUpdateAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res => {
            console.log(res.data);
            if(res.data.modifiedCount > 0){
                refetch()
                toast.success(`${user.name} is admin now!`)
            }
        })
    }
    const handleUserDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                        }
                    })

            }
        });

    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        users?.map((user, i) =>
                          
                                <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {
                                            user.role === 'admin' ? "Admin" : <button onClick={()=> handleUpdateAdmin(user)} className="bg-orange-500 text-2xl p-2 text-white"><FaUsers></FaUsers></button>
                                        }
                                    </td>
                                    <td>
                                        <button onClick={()=> handleUserDelete(user._id)} className="btn"><FaTrash></FaTrash></button>
                                    </td>

                                </tr>

                            )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;