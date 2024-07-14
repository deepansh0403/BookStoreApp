import React from 'react';

const Card = ({item}) => {
  return (
    <>
    <div className='mt-4 my-3 p-3'>
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200">
            <figure>
                <img src={item.img} alt="Shoes" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">{item.name}
                <div className="badge badge-secondary text-white">{item.category}</div>
                </h2>
                    <p>{item.title ? item.title : "lorem checking working or not"}</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline p-4 text-white">₹ {item.price}</div>
                        <div className="badge badge-outline p-4 hover:bg-pink-500 text-white hover:border-none duration-200">Buy Now</div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card