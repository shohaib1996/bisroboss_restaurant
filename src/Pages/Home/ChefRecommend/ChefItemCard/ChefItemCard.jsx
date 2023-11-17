/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars



const ChefItemCard = ({ item }) => {
    // console.log(Object.keys(item).toString());


    const { recipe, image, category } = item
    return (
        <div className="card rounded-none bg-[#F3F3F3]">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body justify-center items-center font-inter">
                <h2 className="card-title uppercase">{category}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline border-b-4 border-0 text-[#BB8506] ">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ChefItemCard;