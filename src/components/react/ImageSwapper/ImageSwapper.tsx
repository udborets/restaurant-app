import { useState } from "react";

interface ImageSwapperProps {
  picturesNames: string[];
}

const ImageSwapper = ({ picturesNames }: ImageSwapperProps) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const imageSwapTimeout = setTimeout(() => {
    if (currentImgIndex === picturesNames.length - 1) {
      setCurrentImgIndex(0);
      return;
    }
    setCurrentImgIndex((prevCurrentImgIndex) => prevCurrentImgIndex + 1);
  }, 5000)
  return (
    <div className={`imageSwapper overflow-hidden h-4/5 relative grid content-center bg-black`}>
      {picturesNames.map((src, i) => (
        <img
          src={src}
          alt="pic"
          loading="lazy"
          key={i}
          className={`imageSwapper__img z-[0] object-cover w-full h-full absolute top-0 right-0 ${currentImgIndex === i ? 'opacity-100' : 'opacity-0'} duration-[1.3s] transition-all `}
        />
      ))}
      <div
        className="imageSwapper__imageSelector outline-white outline-2 outline-double md:outline-none flex flex-col w-fit gap-4 absolute self-center 
        right-[10px] bg-opacity-100 md:bg-opacity-0 bg-black p-2 rounded-[10px]">
        {picturesNames.map((_, i) => (
          <div
            key={i}
            onClick={() => {
              clearTimeout(imageSwapTimeout);
              setCurrentImgIndex(i);
            }}
            className="imageSwapper__imageSelect p-1 z-[10] border-white border-[1px] rounded-[50%] shadow-white hover:bg-white transition-all duration-500"
          >
            <div
              className={`${currentImgIndex === i ? "bg-white" : ""} w-2 h-2 rounded-[50%] transition-all duration-500`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageSwapper