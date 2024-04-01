import React from "react";
import images from "@/config/images";
import FooterComponent from "@/components/footer";

const Gallery = () => {
  const imagesdata = [
    images.image9,
    images.image2,
    images.image3,
    images.image4,
    images.image5,
    images.image6,
    images.image7,
    images.image8,
    images.image9,
    images.image1,
    images.image9,
    images.image2,
    images.image3,
    images.image4,
    images.image5,
  ];
  return (
    <main>
      <section className="p-24 flex items-center h-[60vh] bg-[url('/assets/about-hero.png')] bg-no-repeat bg-cover bg-center">
        <div className="w-[65%] mx-auto flex flex-col items-center">
          <p className="text-white text-5xl text-center">Gallery</p>
        </div>
      </section>
      <section className="py-20" >
        <div className="grid grid-cols-5 gap-6 flex-wrap justify-center w-[75%] mx-auto">
          {imagesdata.map((image, columnIndex) => (
            <div key={columnIndex}>
              <img
                src={image}
                alt={`image${columnIndex + 1}`}
                className="rounded-md w-full"
              />
            </div>
          ))}
        </div>
      </section>
      <FooterComponent/>
    </main>
  );
};

export default Gallery;
