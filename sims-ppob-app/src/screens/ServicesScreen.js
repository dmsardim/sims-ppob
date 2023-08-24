import Services from '../components/Services';
import { useSelector } from 'react-redux';
import { SplideSlide, Splide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const ServicesScreen = () => {
  const listServices = useSelector((state) => state.services.services);
  const listBanner = useSelector((state) => state.banner.banner);

  return (
    <>
      <div className="flex flex-row ml-16">
        {listServices.map((service, i) => {
          return <Services key={i} service={service} />;
        })}
      </div>
      <div className="ml-20 mt-10">
        <p className="text-sm font-bold">Temukan promo menarik</p>
      </div>
      <div className="ml-20 mt-7">
        <Splide
          options={{
            rewind: true,
            perPage: 5,
            perMove: 1,
            gap: '1rem',
            autoplay: true,
            pauseOnHover: false,
            autoScroll: {
              speed: 1,
            },
            breakpoints: {
              640: {
                perPage: 2,
              },
              768: {
                perPage: 3,
              },
              1024: {
                perPage: 5,
              },
            },
          }}
        >
          {[...listBanner, ...listBanner].map((banner, i) => {
            return (
              <SplideSlide key={i}>
                <img src={banner.banner_image} alt="banner" className="rounded-lg" />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </>
  );
};

export default ServicesScreen;
