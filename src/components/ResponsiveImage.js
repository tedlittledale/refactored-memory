import React from "react";

const ResponsiveImage = () => {
  return (
    <div>
      <img
        srcset={`${small.url} ${small.width}w,${large.url} ${large.width}w`}
        sizes={`(max-width: ${small.width}px) 100vw,100vw`}
        src={large.url}
        alt={`Image of ${title}`}
      />
    </div>
  );
};

export default ResponsiveImage;
