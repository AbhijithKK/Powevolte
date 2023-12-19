import { useEffect, useState } from "react";
import "./Carosal.css";
const Carosal= () => {
  let images: string[] = [
    "https://m.media-amazon.com/images/I/61B-9AopZNL._SL1500_.jpg",
    "https://www.olivepower.in/wp-content/uploads/2016/07/1836-combo.webp",
    "https://ilaiyaacservice.in/wp-content/uploads/2016/11/banner.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images?.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);
  console.log(currentIndex);

  return (
    <>
      <div className="home-container">
        <div className="image-adds">
          {images.map((img, i) => (
            <>
              <img
                key={i}
                src={img}
                alt="1ss"
                className={i === currentIndex ? "active" : ""}
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carosal;
