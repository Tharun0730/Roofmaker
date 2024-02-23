import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useEffect, useState } from "react";
import "./Carousel.css";

const Carousel = ({ images, autoplayInterval }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, autoplayInterval);

        return () => clearInterval(intervalId);
    }, [images, autoplayInterval]);

    const nextSlide = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="carousel-container" style={{ marginTop: "0px" }}>
            <div className="carousel">
                <div
                    className="carousel-inner"
                    style={{
                        transform: `translateX(-${currentImageIndex * 100}%)`,
                    }}
                >
                    {images.map((image, index) => (
                        <div key={index} className="carousel-slide">
                            <p className="slide-text">{image.text}</p>
                            <img src={image.image} alt={`Slide ${index}`} />
                        </div>
                    ))}
                </div>
                <div className="prev-button" onClick={prevSlide}>
                    <ArrowBackIosNewIcon />
                </div>
                <div className="next-button" onClick={nextSlide}>
                    <ArrowForwardIosIcon />
                </div>
            </div>
        </div>
    );
};

export default Carousel;
