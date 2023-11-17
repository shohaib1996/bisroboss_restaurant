/* eslint-disable react/prop-types */

import ShopCards from "../ShopCards/ShopCards";


const OrderTab = ({items}) => {
    return (
        <div className="grid grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto mb-12">
            {
                items?.map(item => <ShopCards key={item._id} item={item}></ShopCards>)
            }
        </div>

    );
};

export default OrderTab;