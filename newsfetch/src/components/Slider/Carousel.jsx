import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const data = [
    {
      name: "Happy Yadav",
      img: "https://media.licdn.com/dms/image/v2/D5603AQGllvkLtBTfOQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723833568484?e=1730332800&v=beta&t=eQqBIqDsSafIqdBWZmfvzytO_I1HZkYNbGSm-JcFSac",
      review: "TBD",
    },
    {
      name: "Happy Yadav",
      img: "https://media.licdn.com/dms/image/v2/D5603AQGllvkLtBTfOQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723833568484?e=1730332800&v=beta&t=eQqBIqDsSafIqdBWZmfvzytO_I1HZkYNbGSm-JcFSac",
      review: "TBD",
    },
    {
      name: "Happy Yadav",
      img: "https://media.licdn.com/dms/image/v2/D5603AQGllvkLtBTfOQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723833568484?e=1730332800&v=beta&t=eQqBIqDsSafIqdBWZmfvzytO_I1HZkYNbGSm-JcFSac",
      review: "TBD",
    },
    {
      name: "Happy Yadav",
      img: "https://media.licdn.com/dms/image/v2/D5603AQGllvkLtBTfOQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723833568484?e=1730332800&v=beta&t=eQqBIqDsSafIqdBWZmfvzytO_I1HZkYNbGSm-JcFSac",
      review: "TBD",
    },
    {
      name: "Happy Yadav",
      img: "https://media.licdn.com/dms/image/v2/D5603AQGllvkLtBTfOQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723833568484?e=1730332800&v=beta&t=eQqBIqDsSafIqdBWZmfvzytO_I1HZkYNbGSm-JcFSac",
      review: "TBD",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full md:w-3/4 m-auto bg-gray-200">
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} className="px-2">
              <div className="bg-white dark:bg-black dark:text-white dark:transition ease-in-out duration-500 h-[450px] text-black rounded-xl">
                <div className="h-56 dark:bg-white dark:transition ease-in-out duration-500  bg-indigo-500 flex justify-center items-center rounded-t-xl">
                  <img src={d.img} alt={d.name} className="h-44 w-44 rounded-full"/>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 p-4">
                  <p className="text-xl font-semibold">{d.name}</p>
                  <p className="text-center">{d.review}</p>
                  <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">Connect</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
