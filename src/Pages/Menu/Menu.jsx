import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../../public/assets/menu/banner3.jpg"
import dessertImg from "../../../public/assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../public/assets/menu/pizza-bg.jpg"
import saladImg from "../../../public/assets/menu/salad-bg.jpg"
import soupImg from "../../../public/assets/menu/soup-bg.jpg"

// import PopularMenu from "../Home/PopularMenu/PopularMenu";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../Utils/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";




const Menu = () => {
    const [data, isLoading] = useMenu()
    console.log(data, isLoading);
    const desserts = data?.filter(item => item.category === 'dessert')
    const soup = data?.filter(item => item.category === 'soup')
    const salad = data?.filter(item => item.category === 'salad')
    const pizza = data?.filter(item => item.category === 'pizza')
    const offered = data?.filter(item => item.category === 'offered')

    
    return (
        <div>
            <Helmet>
                <title>BistroBoss | Menu</title>
            </Helmet>
            <Cover subtitle="Would you like to try a dish?" img={menuImg} title="Our Menu"></Cover>
            <div className="mt-12"><SectionTitle heading="TODAY'S OFFER" subHeading="---Don't miss---"></SectionTitle></div>
            {/* Offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert  menu items */}
            <MenuCategory coverImg={dessertImg} items={desserts} title="DESSERTS" subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></MenuCategory>
            {/* pizza menu items */}
            <MenuCategory coverImg={pizzaImg} items={pizza} title="PIZZA" subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></MenuCategory>
            {/* salad menu items */}
            <MenuCategory coverImg={saladImg} items={salad} title="SALAD" subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></MenuCategory>
            {/* soup menu items */}
            <MenuCategory coverImg={soupImg} items={soup} title="SOUP" subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></MenuCategory>
          
            
             
            
        </div>
    );
};

export default Menu;