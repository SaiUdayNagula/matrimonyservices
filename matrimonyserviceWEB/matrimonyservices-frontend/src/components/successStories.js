import React from "react";
import PropTypes from "prop-types";

const TwoColumnImageGrid = ({ images }) => {
  // Assuming images is a flat array of image paths
  const numRows = 2;
  const numColumns = 5;

  // Split the images into rows

  return (
    <div className="p-4 bg-[#F3F3F3] py-[5rem]">
        <div className=" text-center">
            <h1 className="text-4xl font-semibold mb-10">- Our Matrimony Successfull Couples -</h1>
        </div>
      
        <div className="grid grid-cols-5 gap-6 flex-wrap justify-center w-[75%] mx-auto">
          {images.map((image, columnIndex) => (
            <div key={columnIndex} >
              <img src={image} alt={`image${columnIndex + 1}`} className="rounded-md w-full" />
            </div>
          ))}
        </div>
    </div>
  );
};

TwoColumnImageGrid.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TwoColumnImageGrid;
