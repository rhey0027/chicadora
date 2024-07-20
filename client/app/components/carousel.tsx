import React from "react";
// THIS WILL BE THE CAROUSEL TO HOST THE DATA FILES WE NEED TO
// DESTRUCTURE THE KEY PROPS OF THE IMAGESLIDES DATA

export default function Carousel({
  slide,
}: {
  slide: {
    image: string;
    title: string;
    brief: string;
  };
}) {
  return (
    <a
      href="#"
      className="img-bg flex items-center"
      // THIS IS INLINE STYLING
      style={{
        backgroundImage: `url(/${slide.image})`,
      }}
    >
      <div className="img-bg-inner bg-slate-800 bg-opacity-50 py-2 rounded-md">
        <h3 className="font-bold text-4xl text-orange-300 pb-3">
          {slide.title}
        </h3>
        <p className="text-slate-200 font-semibold text-xl">
          {slide.brief}description here
        </p>
      </div>
    </a>
  );
}
