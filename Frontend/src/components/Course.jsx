import React from 'react'
import list from "../../public/list.json"
import Cards from './Cards'
import { Link } from 'react-router-dom'

function Course() {
	return (
		<>
		<div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
			<div className='mt-40 items-center justify-center text-center '>
				<h1 className='text-2xl md:text-4xl'>We'er delighted to you <span className='text-pink-500'>here!</span></h1>
				<p className='mt-10'>
				The project's main goal is to develop an online book store where users can search for and make
purchases of books based on title, author, and subject. The user's chosen books are displayed in
a tabular format, and they can order them online using a debit card or credit card. Instead of
going to a bookstore and wasting time, the user can purchase a book on this website
				</p>
				<Link to="/">
				<button className=' mt-5 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-800 duration-300'>Back</button>
				</Link>
			</div>
			<div className='mt-10 grid grid-cols-1 md:grid-cols-3'>
				{
					list.map((item)=>(
						<Cards key={item.id} item={item}/>

					))
				}
			</div>
		</div>

		
		</>
	)
}

export default Course