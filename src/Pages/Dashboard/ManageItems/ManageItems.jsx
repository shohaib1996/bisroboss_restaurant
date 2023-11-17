import Swal from "sweetalert2";
import SectionTitle from "../../../Utils/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import ManageItemsRow from "./ManageItemsRow/ManageItemsRow";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const ManageItems = () => {
    const axiosSecure = useAxiosSecure()
    const [data, ,refetch] = useMenu()
    console.log(data);
    const handleDelete = (id) => {
        console.log(id)
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
                axiosSecure.delete(`/menu/${id}`)
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
        <div className="p-8">
            <SectionTitle heading="MANAGE ALL ITEMS" subHeading="---Hurry Up---"></SectionTitle>
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
                            <th>ACTION</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((item, i) => <ManageItemsRow
                                key={item._id}
                                item={item}
                                i={i}
                                handleDelete={handleDelete}
                            ></ManageItemsRow>)
                        }



                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ManageItems;