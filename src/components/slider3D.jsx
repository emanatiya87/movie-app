import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Keyboard } from "swiper/modules";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Calendar,
  Globe,
} from "lucide-react";
import "./slider3D.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { useSelector } from "react-redux";

export default function Slider3D() {
  const movies = useSelector((state) => state.movies.movies);
  const selectedMovies = movies.slice(6, 12);
  const imgPath = "https://image.tmdb.org/t/p/w500/";
  const swiperRef = useRef(null);
  return (
    <div className="coverflow-wrap relative  overflow-hidden m-auto">
      <Swiper
        modules={[EffectCoverflow, Navigation, Keyboard]}
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        keyboard={{ enabled: true }}
        slidesPerView="auto"
        initialSlide={1}
        coverflowEffect={{
          rotate: 28,
          stretch: 0,
          depth: 220,
          modifier: 1,
          slideShadows: false,
        }}
        onSwiper={(s) => (swiperRef.current = s)}
        className="coverflow-swiper"
      >
        {selectedMovies.map((s, i) => (
          <SwiperSlide key={i}>
            <img
              src={imgPath + s.backdrop_path}
              alt={s.title}
              width={1024}
              height={640}
              loading={i === 1 ? "eager" : "lazy"}
            />
            <div className="coverflow-slide-content swiper-active-only">
              {s.title ? (
                <div className="coverflow-brand">{s.title}</div>
              ) : (
                <div />
              )}
              <div>
                <h3 className="coverflow-title">{s.title}</h3>
                <div className="coverflow-meta">
                  {s.release_date && (
                    <span className="coverflow-meta-item">
                      <Calendar size={14} />
                      <span>{s.release_date}</span>
                    </span>
                  )}
                  {s.original_language && (
                    <span className="coverflow-meta-item">
                      <Globe size={14} /> <span>{s.original_language}</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="coverflow-side-label swiper-inactive-only">
              {s.title.split(" ").slice(0, 2).join(" ")}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        aria-label="Previous"
        className="coverflow-nav coverflow-nav-prev"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        aria-label="Next"
        className="coverflow-nav coverflow-nav-next"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <ChevronRight size={24} />
      </button>

      <style>{`
        .coverflow-swiper .swiper-slide:not(.swiper-slide-active) .swiper-active-only { display: none; }
        .coverflow-swiper .swiper-slide-active .swiper-inactive-only { display: none; }
      `}</style>
    </div>
  );
}
