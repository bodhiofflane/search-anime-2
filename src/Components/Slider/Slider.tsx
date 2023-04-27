import {useState, useRef, useEffect} from 'react';

import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';

import './Slider.scss'

import slide1 from '../../assets/img/slider1.jpg';
import slide2 from '../../assets/img/slider2.jpg';
import slide3 from '../../assets/img/slider3.jpg';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const slides = useRef<HTMLElement[]>([]);

  let slidesNumber: number;


  const translateXForSlides = () => {
    slides.current.forEach((slide, index) => {
      slide.style.transform = `translateX(${index * 100}%)`;
    });
  };

  const moveToSlide = (currentSlide: number) => {
    slides.current.forEach((slide, index) => {
      slide.style.transform = `translateX(${(index - currentSlide) * 100})%`;
    });
  }

  const previousSlide = () => {
    if(currentSlide === 0) {
      setCurrentSlide(slidesNumber);
    } else {
      setCurrentSlide((prev) => prev--);
    }
    moveToSlide(currentSlide);
  }

  const nextSlide = () => {
    if(currentSlide === slidesNumber) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((prev) => prev++)
    }
  }

  useEffect(() => {
    slidesNumber = slides.current.length - 1;

    console.log(slidesNumber)

    translateXForSlides();
  }, [])

  return (
    <section className="slider">
      <article
        ref={(item) => (item ? slides.current.push(item) : null)}
        className="slider__slide"
      >
        <img
          className="slider__image"
          src={slide1}
          alt=""
        />
      </article>
      <article
        ref={(item) => (item ? slides.current.push(item) : null)}
        className="slider__slide"
      >
        <img
          className="slider__image"
          src={slide2}
          alt=""
        />
      </article>
      <article
        ref={(item) => (item ? slides.current.push(item) : null)}
        className="slider__slide"
      >
        <img
          className="slider__image"
          src={slide3}
          alt=""
        />
      </article>
      <button className="slider__btn slider__btn--left" onClick={() => {previousSlide()}}>
        <AiOutlineArrowLeft className="slider__arrow"/>
      </button>
      <button className="slider__btn slider__btn--right" onClick={nextSlide}>
        <AiOutlineArrowRight className="slider__arrow"/>
      </button>
    </section>
  );
}
 
export default Slider;