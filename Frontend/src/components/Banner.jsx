import React from 'react'
const Banner = () => {
  return (
   <>
   <div className="max-w-screen-2x1 mx-auto container px-4 md:px-20 flex flex-col md:flex-row">
    <div className="w-full order-2 md:order-1 md:w-1/2 mt-21 md:mt-32">
       <h1 className='text-4xl font-bold'>
        Hello, Welcome hero to learn Somthing{""} <span className='text-pink-500'>new everyday!!!</span>
       </h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas consequuntur dolor, quibusdam nesciunt totam, qui error quis quo cum aspernatur laudantium dicta, minus non sapiente. Unde provident illo in perferendis ad voluptatibus molestias, iure error nesciunt incidunt nobis ratione debitis quo accusamus quos, similique quam blanditiis ipsum natus. Error, labore.</p>
       <label className="input input-bordered flex items-center gap-2 mt-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
<a className='btn btn-sm mt-2 bg-pink-500 text-white'>Get Emails</a>
    
    </div>
    <div className="w-full md:w-1/2">
        <img src={'https://i.ibb.co/2ZFBQVx/653ec950-58e5-4397-9180-4c3c3848cafd-image.png'} className='w-92 h-92 banner-img' alt="" />
    </div>
   </div>  
   </>
  )
}

export default Banner