import SectionTitle from "../../../Utils/SectionTitle/SectionTitle";
import featuredImg from "../../../../public/assets/home/featured.jpg"
import "./fearured.css"


const Featured = () => {
    const heading = "FROM OUR MENU";
    const subHeading = "---Check it out---"
    // console.log(heading);
    return (
        <div className="featured-item bg-fixed text-white mb-12">
            <div className="bg-black bg-opacity-50 h-full pt-12">
                <SectionTitle heading={heading} subHeading={subHeading}></SectionTitle>
                <div className="md:flex justify-center items-center pb-20 pt-12 px-36 ">
                    <div>
                        <img src={featuredImg} alt="" />
                    </div>
                    <div className="md:ml-10">
                        <p>Aug 20, 2029</p>
                        <p className="uppercase">Where can i get some?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita hic dolorem, iusto vel suscipit nam excepturi debitis magnam nostrum! Ut eum dignissimos culpa doloremque eligendi consectetur blanditiis laboriosam fugiat ea quia similique quam nisi reprehenderit numquam magnam nemo vitae cupiditate, atque maiores dicta minus pariatur. Perspiciatis nobis vero quas?</p>
                        <button className="btn btn-outline text-white border-0 border-b-4 mt-4">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;