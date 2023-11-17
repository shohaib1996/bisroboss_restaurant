/* eslint-disable react/prop-types */

import { useState } from "react";
import { FaPenSquare, FaTrashAlt } from "react-icons/fa";
import UpdateModal from "../UpdateModal/UpdateModal";

// eslint-disable-next-line react/prop-types
const ManageItemsRow = ({ item, i, handleDelete }) => {
    const [showModal, setShowModal] = useState(false)
    const [menuItem, setMenuItem] = useState([])
    // console.log(item);
    const { _id, image, name, price } = item
    const handleModal = (item) => {
        setMenuItem(item)
        setShowModal(true)

    }
    return (
        <>
            <tr className="text-center w-full">
                <th>
                    {i + 1}
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
                    ${price}
                </td>
                <td>
                    <button onClick={()=> handleModal(item)} className="bg-orange-500 text-2xl p-1 "><FaPenSquare className="text-white"></FaPenSquare></button>
                </td>
                <th>
                    <button onClick={() => handleDelete(_id)} className="btn bg-red-500">
                        <FaTrashAlt className="text-white"></FaTrashAlt>
                    </button>
                </th>
            </tr>
            <UpdateModal showModal={showModal} menuItem={menuItem} setShowModal={setShowModal}></UpdateModal>
        </>
    );
};

export default ManageItemsRow;