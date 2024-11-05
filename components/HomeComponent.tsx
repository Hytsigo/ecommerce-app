import React from "react";
import SearchComponent from "@/components/SearchComponent";
import SvgContainer from "@/components/SvgContainer";
import CategoriesComponent from "@/components/CategoriesComponent";
import FeaturedProduct from "@/components/FeaturedProduct";
import BannerArticleComponent from "@/components/BannerArticleComponent";
import SvgCable from "@/assets/svg/SvgCable";
import AllProductsComponent from "@/components/AllProductsComponent";
import AccordionComponent from "@/components/AccordionComponent";
import Custombutton from "@/components/Custombutton";

const home = [
    { id: "search", component: <SearchComponent /> },
    { id: "svg", component: <SvgContainer /> },
    { id: "categories", component: <CategoriesComponent /> },
    { id: "featured", component: <FeaturedProduct /> },
    {
        id: "banner",
        component: (
            <BannerArticleComponent
                title="CO2 - Cable Multifuntion"
                subtitle="Shop now"
                SvgComponent={SvgCable}
                backgroundColor="#0acf83"
            />
        ),
    },
    {
        id: "bestSeller",
        component: (
            <AccordionComponent
                title="Best Seller"
                children={<AllProductsComponent isExpanded={false} />}
                expandedContent={<AllProductsComponent isExpanded />}
            />
        ),
    },
    {
        id: "button",
        component: (
            <Custombutton
                color="oceanBlue"
                size="large"
                text="See All News"
                onPress={() => console.log("first")}
            />
        ),
    },
];

export default home;
