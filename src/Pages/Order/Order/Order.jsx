import Cover from "../../Shared/Cover/Cover";
import shopImg from "../../../../public/assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
// import ShopCards from "../ShopCards/ShopCards";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./order.css"


const Order = () => {
    const categories = ["SALAD", "PIZZA", "SOUP", "DESSERTS", "DRINKS"]
    const {title} = useParams()
    // console.log(title);
    const initialIndex = categories.indexOf(title)
    const [tabIndex, setTabIndex] = useState(initialIndex > -1 ? initialIndex : 0)
    console.log(tabIndex, initialIndex);
    const [data] = useMenu()
    const desserts = data?.filter(item => item.category === 'dessert')
    const soup = data?.filter(item => item.category === 'soup')
    const salad = data?.filter(item => item.category === 'salad')
    const pizza = data?.filter(item => item.category === 'pizza')
    const drinks = data?.filter(item => item.category === 'drinks')
    console.log(tabIndex);
    const [selected, setSelected] = useState(false) 
    
    return (
        <div>
            <Helmet>
                <title>BistroBoss | Order Food</title>
            </Helmet>
            <Cover img={shopImg} title="OUR SHOP" subtitle="Would you like to try a dish?"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="flex flex-row items-center justify-center mt-12 space-x-4 ">
                    <Tab onClick={() => setSelected(selected(true))} className={selected ? `react-tabs__tab--selected`: 'text-black outline-none cursor-pointer'}>SALAD</Tab>
                    <Tab  onClick={() => setSelected(selected(true))} className={selected ? `react-tabs__tab--selected`: 'text-black outline-none cursor-pointer'}>PIZZA</Tab>
                    <Tab  onClick={() => setSelected(selected(true))} className={selected ? `react-tabs__tab--selected`: 'text-black outline-none cursor-pointer'}>SOUP</Tab>
                    <Tab  onClick={() => setSelected(selected(true))} className={selected ? `react-tabs__tab--selected`: 'text-black outline-none cursor-pointer'}>DESSERTS</Tab>
                    <Tab  onClick={() => setSelected(selected(true))} className={selected ? `react-tabs__tab--selected`: 'text-black outline-none cursor-pointer'}>DRINKS</Tab>
                </TabList>
                <TabPanel>
                   <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;

