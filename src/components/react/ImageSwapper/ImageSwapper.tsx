import { useState } from "react"

interface ImageSwapperProps {
  picturesNames: number[];
}

const ImageSwapper = ({ picturesNames }: ImageSwapperProps) => {
  const [count, setCount] = useState(picturesNames[0]);
  setTimeout(() => {
    if (count === picturesNames.at(-1)) {
      setCount(1)
      return
    }
    setCount((prevCount) => prevCount + 1)
  }, 5000)
  return (
    <div className={`imageSwapper overflow-hidden w-full h-[100vh] relative`}>
      {picturesNames.map((src) => (
        <img
          loading="lazy"
          src={`src/assets/images/imageSwapper/${src}.jpg`}
          alt="pic"
          key={src}
          className={`imageSwapper__img z-[0] h-auto w-full absolute top-0 right-0 ${src === count ? 'opacity-100' : 'opacity-0'} duration-[1.3s] transition-all `}
        />
      ))}
      <div className="imageSwapper imageSelectList">
        <div className="imageSwapper__i">

        </div>
      </div>
    </div>
  )
}

export default ImageSwapper