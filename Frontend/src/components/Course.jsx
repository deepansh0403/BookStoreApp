import React from 'react';
import list from "../../public/list.json";
import Card from "./Card";

import { Link } from 'react-router-dom';
const Course = ({item}) => {
  //console.log(item);
  return (
    
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className="mt-28 items-center justify-center text-center">
        <h1 className='text-2xl md:text-4xl'>
          We're delighted to have {""} <span className='text-pink-500'>Here :)</span>
        </h1>
        <p className='mt-12'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, eaque? Neque provident tenetur rem nemo eaque molestias, officia dolores reiciendis iure explicabo! At molestiae culpa doloribus repellendus, officia accusantium expedita sequi consequatur doloremque laboriosam ex ipsam blanditiis. Perferendis saepe inventore laborum natus id eum dolorum? Repellat saepe cupiditate, ad illo eveniet fugit inventore tempora quam nihil hic placeat officiis asperiores?</p>
        
        <Link to={"/"}>
        <button className='bg-pink-500 text-white px-4 py-2 rounded-md my-5'>Back</button>

        </Link>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
          {list.map((item)=>(
            <Card item={item} key={item.id}/>
          ))}
        </div>
      
      </div>
    </div>
    </>
  )
}

export default Course