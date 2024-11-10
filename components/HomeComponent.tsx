import AccordionComponent from "@/components/AccordionComponent";
import BannerArticleComponent from "@/components/BannerArticleComponent";
import CategoriesComponent from "@/components/CategoriesComponent";
import Custombutton from "@/components/Custombutton";
import FeaturedProduct from "@/components/FeaturedProduct";
import SvgContainer from "@/components/SvgContainer";
import React from "react";

interface HomeItem {
    id: string;
    component: JSX.Element;
}

const home: HomeItem[] = [
    { id: "svg", component: <SvgContainer /> },
    { id: "categories", component: <CategoriesComponent /> },
    { id: "featured", component: <FeaturedProduct /> },
    { id: "banner", component: <BannerArticleComponent /> },
    { id: "bestSeller", component: <AccordionComponent /> },
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
