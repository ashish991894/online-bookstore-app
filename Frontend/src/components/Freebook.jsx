import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";
import Cards from './Cards';

function Freebook() {
	const filterData = list.filter((data) => data.category === "Free");
	console.log(filterData);

	var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
	return (
		<>
	<div>
		<div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
			<div>
			<h1 className='font-bold text-xl pt-10 pb-2'>Free Offered Courses</h1>
			<p>
			Ready to embark on your next learning adventure? Browse our courses today and enroll in the one that speaks to your heart! Visit us in-store or check our website for more details on schedules and registration.
			</p>
			</div>
		
		<div>
		<Slider {...settings}>
       {filterData.map((item) => (
				<Cards item={item} key={item.id}/>
			 ))}
      </Slider>
		</div>
	</div>
</div>
</>
	
	)
}

export default Freebook