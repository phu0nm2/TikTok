import React, { forwardRef, useState } from "react";
import { images } from "../../assets/images";
import "./styles.scss";

const Image = forwardRef(
  // fallback children costumes for Img
  // 1. Don't use: If the link Img from src getting error, fallback = images.noImage
  // 2. Using : fallback = fallback as costumesImg and get that picture from fallback
  (
    { fallback: costumesImg = images.noImage, src, alt, className, ...props },
    ref
  ) => {
    const [fallback, setFallback] = useState("");

    const handleImgError = () => {
      setFallback(costumesImg);
    };
    return (
      <img
        src={fallback || src}
        ref={ref}
        className={`custom-img ${className}`}
        alt={alt}
        {...props}
        onError={handleImgError}
      />
    );
  }
);

export default Image;
