interface Testimonial {
    quote: string;
    author: string;
}

interface TestimonialsCarouselProps {
    testimonials: Testimonial[];
}

export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
    return (
        <div className="testimonials-carousel">
            <div className="testimonials-content">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-item">
                        <p>&quot;{testimonial.quote}&quot;</p>
                        <span>- {testimonial.author}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
