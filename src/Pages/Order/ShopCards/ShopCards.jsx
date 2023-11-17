/* eslint-disable react/prop-types */

import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";


const ShopCards = ({ item }) => {
    const axiosSecure = useAxiosSecure()
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [, refetch] = useCart()
    const [count, setCount] = useState(1)
    const { recipe, image, name, price, _id } = item
    const handleAddToCart = food => {
        console.log(food);
        const cartItem = {
            menuId: _id,
            email: user.email,
            name,
            image,
            singlePrice: price,
            price: price * count,
            quantity: count
        }
        if (user && user?.email) {
            // Todo: send data to server
            axiosSecure.post("/carts", cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 2000
                        });
                        refetch()

                    }
                })

        }
        else {
            Swal.fire({
                title: "You are not Logged In!!",
                text: "Please login to add to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Log in!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } })
                }
            });
        }
    }

    return (
        <div className="card rounded-none bg-[#F3F3F3]">
            <figure className="relative flex-col">
                <img src={image} alt="Shoes" />
                <p className="text-white bg-black absolute right-5 bottom-48 px-2 py-1 rounded-lg">${price}</p>
            </figure>
            <div className="card-body justify-center items-center font-inter">
                <h2 className="card-title uppercase">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-between items-center gap-12">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-b-4 border-0 text-[#BB8506] ">add to cart</button>
                    <p className="space-x-5 bg-white border-4">
                        <button onClick={() => setCount(Math.max(count - 1, 1))} className="btn btn-xs bg-white text-2xl">-</button>
                        <span className="text-center">{count}</span>
                        <button onClick={() => setCount(count + 1)} className="btn bg-white btn-xs text-2xl">+</button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ShopCards;