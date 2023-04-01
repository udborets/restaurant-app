import { useState } from "react"

interface ImageSwapperProps {
  picturesNames: number[];
}

const ImageSwapper = ({ picturesNames }: ImageSwapperProps) => {
  const [count, setCount] = useState(1);
  setTimeout(() => {
    if (count === picturesNames.at(-1)) {
      setCount(1)
      return
    }
    setCount((prevCount) => prevCount + 1)
  }, 5000)
  return (
    <div className={`overflow-hidden w-full h-[100vh] relative`}>
      {picturesNames.map((src) => (
        <img
          loading="lazy"
          src={`src/assets/images/imageSwapper/${src}.jpg`}
          alt="pic"
          key={src}
          className={`z-[-5] h-auto w-full absolute top-0 right-0 ${src === count ? 'opacity-100' : 'opacity-0'} duration-[1.3s] transition-all `}
        />
      ))}
    </div>
  )
}

export default ImageSwapper