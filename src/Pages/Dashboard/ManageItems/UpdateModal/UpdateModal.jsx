/* eslint-disable react/prop-types */

import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useMenu from "../../../../hooks/useMenu";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const UpdateModal = ({ showModal, setShowModal, menuItem }) => {
    const { _id, name, price, category, recipe } = menuItem
    const [,,refetch] = useMenu()

    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const { register, handleSubmit } = useForm()
    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            // now send the menu item data to the server with the image url
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            // 
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data)
            if (menuRes.data.modifiedCount > 0) {
                // show success popup
                refetch()

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is updated to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                });
                setShowModal(false)
            }
        }


    }
    return (
        <>
            {
                showModal && <dialog id="my_modal_1" className="modal" open>
                    <div className="modal-box max-w-4xl mx-auto">
                        <h3 className="font-bold text-lg">UPDATE ITEM</h3>
                        <div className="">
                            <form onSubmit={handleSubmit(onSubmit)} className="">
                                <div className="form-control w-full my-2">
                                    <label className="label">
                                        <span className="label-text">Recipe Name*</span>
                                    </label>
                                    <input
                                        defaultValue={name}
                                        type="text"
                                        placeholder="Recipe Name"
                                        {...register('name', { required: true })}
                                        required
                                        className="input input-bordered w-full" />
                                </div>
                                <div className="flex gap-6">
                                    {/* category */}
                                    <div className="form-control w-full my-2">
                                        <label className="label">
                                            <span className="label-text">Category*</span>
                                        </label>
                                        <select defaultValue={category} {...register('category', { required: true })}
                                            className="select select-bordered w-full">
                                            <option disabled value="default">Select a category</option>
                                            <option value="salad">Salad</option>
                                            <option value="pizza">Pizza</option>
                                            <option value="soup">Soup</option>
                                            <option value="dessert">Dessert</option>
                                            <option value="drinks">Drinks</option>
                                        </select>
                                    </div>

                                    {/* price */}
                                    <div className="form-control w-full my-2">
                                        <label className="label">
                                            <span className="label-text">Price*</span>
                                        </label>
                                        <input
                                        defaultValue={price}
                                            type="number"
                                            placeholder="Price"
                                            {...register('price', { required: true })}
                                            className="input input-bordered w-full" />
                                    </div>

                                </div>
                                {/* recipe details */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Recipe Details</span>
                                    </label>
                                    <textarea {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Bio" defaultValue={recipe}></textarea>
                                </div>

                                <div className="form-control w-full my-2">
                                    <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                                </div>

                                <button className="btn">
                                    Update Item <FaUtensils className="ml-4"></FaUtensils>
                                </button>
                            </form>
                        </div>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button onClick={() => setShowModal(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 font-bold text-white bg-red-600">X</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            }

        </>
    );
};

export default UpdateModal;