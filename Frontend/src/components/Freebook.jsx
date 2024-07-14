import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from "../../public/list.json";
import Slider from "react-slick";
import Card from "./Card";
const Freebook = () => {
  const filterData = list.filter((data) =>  data.category === "free" );
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3   ,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return <>
  <div className="max-w-screen-2x1 mx-auto md:px-20 px-4">
<h1 className="text-xl font-bold pb-2">Free Offered Books</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nulla exercitationem doloribus at odit minus ab ratione itaque asperiores explicabo!</p>
  
<Slider {...settings}>
{filterData.map((item)=>(
  <Card item={item} key={item.id}/>      
))}  
</Slider> 
  </div>
     

  </> 
};

export default Freebook;
