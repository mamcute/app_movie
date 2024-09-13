import { useEffect, useState } from "react";

const ImageComponent = ({ src, width, height, className }) => {
  const [currentSrc, setCurrentSrc] = useState(
    `https://placehold.co/${width}x${height}?text=Loading`
  );
  useEffect(() => {
    const img = new Image();
    if (src) {
      img.src = src;
      img.onload = () => {
        setCurrentSrc(src);
      };
    }
    setCurrentSrc(`https://placehold.co/${width}x${height}?text=No Image`);
    // return nay se chay trc de xoa handler tren
    return () => {
      img.onload = null;
    };
  }, [src, width, height]);
  return (
    <>
      <img
        src={currentSrc}
        className={currentSrc === src ||  !src ? className : `${className} blur-md`}
        width={width}
        height={height}
      />
    </>
  );
};

export default ImageComponent;
