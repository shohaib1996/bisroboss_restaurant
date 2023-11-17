import { Helmet } from "react-helmet-async";
import OrderOnline from "../../Sections/OrderOnline/OrderOnline";
import Banner from "./Banner/Banner";
import ChefRecommend from "./ChefRecommend/ChefRecommend";
import Featured from "./Feature/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testitmonials/Testitmonials";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>BistroBoss | Home</title>
            </Helmet>
            <Banner></Banner>
            <OrderOnline></OrderOnline>
            <PopularMenu></PopularMenu>
            <ChefRecommend></ChefRecommend>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;