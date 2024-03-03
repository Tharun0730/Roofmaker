import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useEffect, useState } from 'react';
import './Carousel.css';
import { Typography } from '@mui/material';

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
        <div className='carousel-container' style={{ marginTop: '11rem' }}>
            <div className='carousel'>
                <div
                    className='carousel-inner'
                    style={{
                        transform: `translateX(-${currentImageIndex * 100}%)`,
                    }}
                >
                    {images.map((image, index) => (
                        <div key={index} className='carousel-slide'>
                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: '1rem',
                                        sm: '2rem',
                                        md: '3rem',
                                        lg: '4rem',
                                    },
                                    color: ' #ffffff',
                                   
                                 
                                }}
                                className='slide-text'
                            >
                                {image.text}
                            </Typography>
                            <img src={image.image} alt={`Slide ${index}`} />
                        </div>
                    ))}
                </div>
                <div className='prev-button' onClick={prevSlide}>
                    <ArrowBackIosNewIcon />
                </div>
                <div className='next-button' onClick={nextSlide}>
                    <ArrowForwardIosIcon />
                </div>
            </div>
        </div>
    );
};

export default Carousel;
