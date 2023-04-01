import { useState } from "react"

interface ImageSwapperProps {
  picturesPaths: number[];
}

const ImageSwapper = ({ picturesPaths }: ImageSwapperProps) => {
  const [count, setCount] = useState(1);
  setTimeout(() => {
    if (count === 4) {
      setCount(1)
      return
    }
    setCount((prevCount) => prevCount + 1)
  }, 7000)
  return (
    <div className={`overflow-hidden`}>
      {picturesPaths.map((src) => (
        <img
          src={`src/assets/images/${src}.jpg`}
          alt="pic"
          key={src}
          className={`max-h-[100vh] max-w-1/2 w-1/2 absolute top-0 right-0 ${src === count ? 'opacity-100' : 'opacity-0'} duration-[1.5s] transition-all `}
        />
      ))}
    </div>
  )
}

export default ImageSwapper