import React from 'react'
import banner from "../../public/banner.jpg";


function Banner() {
	return (
		<>
			<div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
			<div className=' w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-28'>
			<div className='space-y-10'>
			<h1 className='text-4xl font-bold'>Hello, Welcomes here to learn something <spam className='text-pink-500'>new everyday!!!</spam></h1>
				<p className='text-xl'>
				The Online Bookstore Project is a web application which is designed and developed to help the customers to purchase different categories of books from the publishers all over the world. The main objective of this system is to make available the various genres of books of different authors from the world to customers by sitting in one particular place.
				</p>
				<label className="input input-bordered flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
			</div>
			<button className="btn mt-4 btn-secondary">Submit</button>
			</div>
			<div className='order-1 w-full md:w-1/2'>
				<img src={banner} className='w-86 h-86' alt='' />
			</div>

			</div>
		</>
	)
}

export default Banner;