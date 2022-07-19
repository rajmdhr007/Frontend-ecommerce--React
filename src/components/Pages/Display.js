// import React, { useContext,GlobalContext } from 'react'
import Card from "../Card";

const Display = () => {
  const items = [
    {
      name: "Real me",
      price: "Rs. 13,000/",
      description: "This is a very nice phone",
      image: "./images/a.jpg",
    },

    {
      name: "Samsung ",
      price: "Rs. 13,000/",
      description: "This is a very nice phone",
      image: "./images/b.jpg",
    },

    {
      name: "Iphone",
      price: "Rs. 14,000/",
      description: "This is a very nice phone",
      image: "./images/c.jpg",
    },
    {
      name: "Redmi",
      price: "Rs. 10,000/",
      description: "This is a very nice phone",
      image: "./images/d.jpg",
    },
  ];

  return (
    <>
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-3 mx-3 ">
          {items.map((i) => {
            // console.log(i);
            return <Card ite={i}/>;
          })}
        </div>
      </div>
    </>
  );
};

export default Display;
