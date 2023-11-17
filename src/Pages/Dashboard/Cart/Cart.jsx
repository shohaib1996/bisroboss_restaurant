
import SectionTitle from "../../../Utils/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

import CartTableRow from "./CartTableRow/CartTableRow";




const Cart = () => {
    const [cart, refetch] = useCart()
    const axiosSecure = useAxiosSecure()
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price*1, 0)
    const handleDelete = (id) => {
        // console.log(id)
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
                axiosSecure.delete(`/carts/${id}`)
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
  
    const handleUpdate = (updatePrice, counts, id) => {
        // console.log(updatePrice, counts, id);
        const price = updatePrice.toFixed(2)
        const quantity = counts
        const updatedDoc = {
            price, quantity
        }
        console.log(updatedDoc);
        axiosSecure.patch(`/carts/${id}`, updatedDoc)
        .then(res => {
            refetch()
            console.log(res.data);
        })
        .catch(err => {
            console.error(err);
        })

        
    }
    return (
        <div className="p-5 bg-[#F6F6F6] min-h-screen">
            <SectionTitle heading="WANNA ADD MORE?" subHeading="---My Cart---"></SectionTitle>
            <div className="p-5 bg-white rounded-lg">
                <div className="flex justify-between ">
                    <h1 className="font-cinzel text-3xl font-bold">Total orders: {cart.length}</h1>
                    <h1 className="font-cinzel text-3xl font-bold">Total price: ${totalPrice}</h1>
                    <button className="btn bg-[#D1A054]">Pay</button>

                </div>
                <div className="overflow-x-auto mt-8">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bg-[#D1A054] text-white text-center w-full">
                                <th>
                                    #
                                </th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>Quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <CartTableRow key={item._id} item={item} index={index} handleDelete={handleDelete} handleUpdate={handleUpdate}></CartTableRow>)
                            }


                        </tbody>


                    </table>
                </div>


            </div>

        </div>
    );
};

export default Cart;