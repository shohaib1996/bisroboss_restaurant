/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items, title, subtitle, coverImg }) => {
    
    
    return (
        <div className="mt-12">
            {title && <Cover subtitle={subtitle} img={coverImg} title={title}></Cover>}
            <div className="grid grid-cols-2 gap-6 mt-14 max-w-6xl mx-auto">
                {
                    items?.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="flex  items-center justify-center mb-7">
                <Link to={`/our-shop/${title || 'DRINKS'}`}>
                    <button className="btn btn-outline border-0 border-b-4 mt-12">Order Now</button>
                </Link>
            </div>

        </div>
    );
};

export default MenuCategory;