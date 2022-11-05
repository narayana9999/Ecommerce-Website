import React from "react";
import Announcement from "../components/Announcements";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
    return (
        <div>
            <Announcement></Announcement>
            <Navbar/>
            <Slider/>
            <Categories></Categories>
            <Products/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Home