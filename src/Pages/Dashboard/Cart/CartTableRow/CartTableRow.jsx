/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
const CartTableRow = ({ item, index, handleDelete, handleUpdate }) => {
    const { _id, quantity, image, name, price, singlePrice } = item
    const [count, setCount] = useState(quantity)
    const [updatedPrice, setUpdatedPrice] = useState(price)
    // console.log(updatedPrice, count);
    useEffect(() => {
        setUpdatedPrice(singlePrice * count)

    }, [count, singlePrice])
    const decreaseCount = () => {
        setCount((prevCount) => Math.max(prevCount - 1, 1));
        handleUpdate(singlePrice * (count - 1), count - 1, _id);

    };

    const increaseCount = () => {
        setCount((prevCount) => prevCount + 1);
        handleUpdate(singlePrice * (count + 1), count + 1, _id);

    };


    return (
        <>
            <tr className="text-center w-full">
                <th>
                    {index + 1}
                </th>
                <td>

                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>

                </td>
                <td>
                    {name}
                </td>
                <td>
                    ${Number(updatedPrice).toFixed(2)}
                </td>
                <td>
                    <p className="space-x-2 bg-white w-36 mx-auto border-4">
                        <button onClick={decreaseCount} className="btn btn-xs bg-white text-2xl">-</button>
                        <span className="text-center">{count}</span>
                        <button onClick={increaseCount} className="btn bg-white btn-xs text-2xl">+</button>
                    </p>
                </td>
                <th>
                    <button onClick={() => handleDelete(_id)} className="btn bg-red-500">
                        <FaTrashAlt className="text-white"></FaTrashAlt>
                    </button>
                </th>
            </tr>
        </>
    );
};

export default CartTableRow;