import { useState } from "react"

interface ImageSwapperProps {
  picturesNames: number[];
}

const ImageSwapper = ({ picturesNames }: ImageSwapperProps) => {
  const [count, setCount] = useState(0);
  setTimeout(() => {
    if (count === picturesNames.length - 1) {
      setCount(0);
      return
    }
    setCount((prevCount) => prevCount + 1);
  }, 5000)
  return (
    <div className={`imageSwapper overflow-hidden w-full h-full relative grid content-center`}>
      {picturesNames.map((src) => (
        <img
          loading="lazy"
          src={`src/assets/images/imageSwapper/${src}.jpg`}
          alt="pic"
          key={src}
          className={`imageSwapper__img z-[0] w-full absolute top-0 right-0 ${src === picturesNames[count] ? 'opacity-100' : 'opacity-0'} duration-[1.3s] transition-all `}
        />
      ))}
      <div className="imageSwapper__imageSelector flex flex-col w-fit gap-4 absolute self-center right-[10px]">
        {picturesNames.map((src) => (
          <div
            className="imageSwapper__imageSelect p-1 z-[10] border-white border-[1px] rounded-[50%] shadow-white hover:bg-white transition-all duration-500"
          >
            <div
              className={`${src === picturesNames[count] ? "bg-white" : ""} w-2 h-2 rounded-[50%] transition-all duration-500`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageSwapper