import heroBannerLg from '../assets/hero-banner-large.jpg';
import heroBannerSm from '../assets/hero-banner-small.jpg';


const Home = () => {
  return (
    <>
      <img 
        src={heroBannerLg} 
        srcSet={`${heroBannerSm} 770w, ${heroBannerLg} 1200w`}
        alt="sora and saki banner" 
        className='w-full'
      />
    </>
  )
}

export default Home;