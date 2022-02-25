import React from "react";
import Product from "./Product";
import Header from "./Header";
import Footer from "./components/Footer";

function Coupons() {
  return (
    <div >
      <div >
       <div>
           <Header/>
       </div>

        <div className="home__row">
          <Product
            id="12321341"
            couponcode="MOBILE25"
            title="MOBILE-PHONE : get your new one"
            price={1}
            rating={4}
            discount={25}
            
            image="https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          />
        
          <Product
            id="49538094"
            title="SHOE : Make your feet elegant!"
            couponcode="SHOES10"
            price={2}
            rating={4}
            discount={10}
            image="https://wallpaperaccess.com/full/680116.jpg"
          />
           <Product
            id="49538094"
            title="WATCH : Be on time"
            price={5}
            rating={5}
            discount={35}
            couponcode="WATCH35"
            image="https://cutewallpaper.org/21/watches-wallpapers-hd/12-Watch-Wallpapers-HD-Backgrounds-Free-Download-Baltana.jpg"
          />
           
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="FOOD : Eat healty"
            price={3}
            rating={3}
            discount={45}
            couponcode="FOOD45"
            image="https://wallpaperaccess.com/full/767033.jpg"
          />
          <Product
            id="23445930"
            title="FURNITURE : Be unique"
            price={9}
            rating={4}
            discount={20}
            couponcode="FURNITURE20"
            image="https://images8.alphacoders.com/595/thumb-1920-595107.jpg"
          />
          <Product
            id="3254354345"
            title="MEDICINE : We care for your health"
            price={5}
            rating={3}
            discount={30}
            couponcode="MEDICINE30"
            image="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVkaWNpbmV8ZW58MHx8MHx8&w=1000&q=80"
          />

       </div>

          <div className="home__row">
           <Product
            id="3254354345"
            title="BOOKS : Gain knowledge"
            price={6}
            rating={5}
            discount={15}
            couponcode="BOOKS15"
            image="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&w=1000&q=80"
          />
         
    

        
          <Product
            id="90829332"
            title="T-SHIRTS : Gives you comfort"
            price={10}
            rating={4}
            discount={55}
            couponcode="T-SHIRTS55"
            image="https://c0.wallpaperflare.com/preview/605/214/503/fashion-mens-fashion-clothes-t-shirts.jpg"
          />
      

       
          <Product
            id="90829332"
            title="Ball : Play"
            price={10}
            rating={4}
            discount={25}
            couponcode="BALL25"
            image="https://cutewallpaper.org/21/bat-ball-wallpapers/Cricket-Bat-Ball-Wallpaper-The-Best-HD-Wallpaper.jpg"
          />
       
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Coupons;