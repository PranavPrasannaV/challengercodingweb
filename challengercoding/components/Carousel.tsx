"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface CarouselItem {
    image: string;
    title: string;
    description: string;
}

interface CarouselProps {
    items: CarouselItem[];
    autoAdvanceInterval?: number;
}

export default function Carousel({ items, autoAdvanceInterval = 5000 }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, [items.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    }, [items.length]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, autoAdvanceInterval);
        return () => clearInterval(interval);
    }, [nextSlide, autoAdvanceInterval]);

    return (
        <div className="carousel">
            <div className="carousel-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {items.map((item, index) => (
                    <div key={index} className="carousel-item">
                        <Image src={item.image} alt={item.title} width={1200} height={600} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
                        <div className="carousel-description">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="carousel-nav">
                <button onClick={prevSlide}>&lt;</button>
                <button onClick={nextSlide}>&gt;</button>
            </div>
            <div className="carousel-indicators">
                {items.map((_, index) => (
                    <div key={index} className={`carousel-indicator ${index === currentIndex ? "active" : ""}`} onClick={() => goToSlide(index)} />
                ))}
            </div>
        </div>
    );
}
